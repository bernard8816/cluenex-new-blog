const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {

  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/CNAME');

  // Watch CSS
  eleventyConfig.addWatchTarget('src/assets/css/');

  // Markdown configuration
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
    .use(markdownItAttrs)
    .use(markdownItAnchor, {
      level: 2,
      permalink: false
    });

  eleventyConfig.setLibrary('md', md);

  // Filter: Format date
  eleventyConfig.addFilter('dateFilter', (dateObj, format = 'long') => {
    const date = new Date(dateObj);

    // Custom format support: MMM D (e.g., "May 20")
    if (format === 'MMM D') {
      const options = { month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }

    // Default long format
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  });

  // Filter: ISO date for schema.org
  eleventyConfig.addFilter('isoDate', (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Filter: Generate slug
  eleventyConfig.addFilter('slug', (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  });

  // Filter: Extract headings for TOC
  eleventyConfig.addFilter('extractHeadings', (content) => {
    const headingRegex = /<h2[^>]*?id="([^"]*)"[^>]*?>([\s\S]*?)<\/h2>/g;
    const headings = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const text = match[2].replace(/<[^>]*>/g, '').trim();
      if (text) headings.push({ id: match[1], text });
    }
    return headings;
  });

  // Filter: Limit an array to the first N items
  eleventyConfig.addFilter('limit', (arr, n) => (arr || []).slice(0, n));

  // Helper: decode a small set of HTML entities for clean JSON-LD text
  const decodeEntities = (str) => str
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));

  // Filter: Build FAQPage JSON-LD from the rendered FAQ section
  // (enables LLM / answer-engine citation of Q&A pairs)
  eleventyConfig.addFilter('faqSchema', (content) => {
    if (!content) return '';
    const idx = content.search(/<h2[^>]*id="frequently-asked-questions"/i);
    if (idx === -1) return '';
    const ul = content.slice(idx).match(/<ul>([\s\S]*?)<\/ul>/i);
    if (!ul) return '';
    const faqs = [];
    const liRegex = /<li>([\s\S]*?)<\/li>/gi;
    let li;
    while ((li = liRegex.exec(ul[1])) !== null) {
      const q = li[1].match(/<strong>([\s\S]*?)<\/strong>/i);
      if (!q) continue;
      const question = decodeEntities(q[1].replace(/<[^>]+>/g, '')).trim();
      const answer = decodeEntities(
        li[1].replace(/<strong>[\s\S]*?<\/strong>/i, '').replace(/<[^>]+>/g, ' ')
      ).replace(/\s+/g, ' ').trim();
      if (question && answer) {
        faqs.push({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer }
        });
      }
    }
    if (!faqs.length) return '';
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs
    });
  });

  // Collection: All posts
  eleventyConfig.addCollection('posts', (collection) => {
    return collection
      .getFilteredByGlob('src/content/**/*.md')
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // Collection: Posts by category
  eleventyConfig.addCollection('postsByCategory', (collection) => {
    const posts = collection.getFilteredByGlob('src/content/**/*.md');
    const categories = {};

    posts.forEach(post => {
      const cat = post.data.category || 'general';
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(post);
    });

    return categories;
  });

  return {
    dir: {
      input: 'src',
      output: 'docs',
      includes: '_includes',
      layouts: '_layouts'
    },
    pathPrefix: '/',
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
