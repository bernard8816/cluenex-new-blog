// Reading Progress
window.addEventListener('scroll', () => {
    const body = document.body;
    const html = document.documentElement;
    const total = Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    ) - window.innerHeight;
    const pct = (window.scrollY / total) * 100;
    document.getElementById('progress').style.width = Math.min(100, pct) + '%';
});

// TOC Active Highlighting — track article H2 sections
const tocLinks = document.querySelectorAll('.toc-link');
const headings = document.querySelectorAll('.article-body h2[id]');

if (tocLinks.length && headings.length) {
    const tocObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(l => l.classList.remove('active'));
                const a = document.querySelector(
                    `.toc-link[href="#${CSS.escape(entry.target.id)}"]`
                );
                if (a) a.classList.add('active');
            }
        });
    }, { rootMargin: '-10% 0px -80% 0px' });

    headings.forEach(h => tocObserver.observe(h));
}
