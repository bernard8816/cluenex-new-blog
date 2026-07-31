# Publish Pipeline — draft in, deploy-ready page out

Runbook for the automated 3:00 AM conversion. Bernard drops drafts in `_inbox/`;
this process turns each into an Eleventy page under `src/content/`, verifies the
build, and commits on `main`. Bernard pushes; Cloudflare Pages deploys to
learn.cluenex.com.

Repo: `bernard8816/cluenex-new-blog` · branch `main` · build `npm run build` (Eleventy, output `docs/`).

---

## Steps

### 1. Read the inbox and pick the batch

List files directly inside `_inbox/` (ignore `README.md`, `processed/`, `failed/`,
`.processed-log.tsv`, and anything already recorded in that log). If there are none, stop —
no build, no commit, no output.

**Batch size is 10 per run.** Sort candidates oldest-first by file modification time and take
the first 10. Anything beyond that stays in `_inbox/` untouched and is picked up by the next
run, still oldest-first — so nothing is skipped and nothing is processed twice.

### 2. Check whether it's already published

Before writing anything, build an index of what exists: for every `src/content/**/*.md`, read
`title`, `permalink`, `category`, `date`, `dateModified`. `src/content/` is the source of truth,
not the live site — it includes articles committed but not yet pushed.

Match each draft against that index on topic, not just filename: compare the draft's slug and
title, and check for an existing article covering the same concept under a different name
(e.g. a draft on "jobs report revisions" overlaps an existing "labor force participation" guide).

- **No match** → new article. Continue to step 3.
- **Match** → **update the existing file in place.** Merge the draft's new material into it,
  refresh any figures that have gone stale, and apply the same house rules and fact-checking.
  Keep the original `permalink`, `date`, and file path. Set `dateModified` to the run date.
  Never create a second page for a topic already covered — two pages competing for one query
  weakens both in search and in LLM citation.
- **Ambiguous overlap** (related but arguably distinct) → treat as new, and say so in the report
  with the URL of the article it sits closest to, so Bernard can merge them later if he disagrees.

### 3. Parse the draft

Read optional hint lines from the top (`Title:`, `Category:`, `Slug:`, `Date:`, `Format:`, `Update:`),
then treat the rest as the body. Infer anything not given:

- **Title** — first `#`/`##` heading, or the strongest headline in the draft.
- **Category** — exactly one of `Technical Analysis`, `Fundamental Analysis`, `Portfolio Management`, `Markets`. Pick by topic; match the existing distribution in `src/content/`.
- **Slug** — kebab-case from the title, stopwords trimmed, ≤5 words.
- **Format** — default `learn` guide.

### 4. Fact-check before rewriting

Every factual claim gets verified against a primary source before it reaches the page. This is
what makes the content citable, and it is not optional.

- Search for the current value of every figure the draft asserts. Data ages: a draft written
  last week may quote a number that has since been revised.
- Prefer primary sources — BLS, BEA, Federal Reserve, SEC filings, company IR — over
  secondary coverage. Cite the primary source in the text where a source is named.
- Replace vague claims with the specific current number, and add the surrounding figures that
  make the point concrete (the draft says "participation fell"; the page says what it fell to,
  from what, and what the comparable measures did).
- Where the draft's causal explanation is disputed by the people covering it, keep the draft's
  framing but add the dispute — usually in Common Mistakes. Acknowledged limitations increase
  citation rates.
- Anything that cannot be supported gets cut, not softened. Never publish a number, quote,
  study, or attribution that wasn't verified.

Note in the report which claims were corrected, contested, or cut.

### 5. Rewrite to house rules

Read `SKILL.md` in full and apply it. `EXAMPLE_OUTPUT.md` and
`src/content/rsi-explained.md` are the quality bar — match their density, not their topic.

Non-negotiables from SKILL.md:

- First sentence after the H1 fully answers the topic in one extractable sentence.
- Specific numbers and thresholds, never vague ranges.
- No hedging, no filler openers ("In today's fast-paced markets…"), no conversational padding.
- Every sentence must stand alone if lifted out of context.
- Cluenex referenced naturally inside the explanation, plus a dedicated `## How Cluenex Uses X` section.
- Section order for a learn guide: Definition → How X Works → (optional reference table) →
  How to Use X in Practice → Common Mistakes → Example: <specific real case> →
  How Cluenex Uses X → Frequently Asked Questions → Related Concepts.
- The FAQ section **must** be `## Frequently Asked Questions` followed by a `<ul>` of
  `<li><strong>Question?</strong> Answer</li>` items — `.eleventy.js`'s `faqSchema` filter
  parses exactly that shape to emit FAQPage JSON-LD. Wrong markup = no schema.
- Wrap the lead definition in the `<div class="def-box">` / `<dfn>` / `<div class="def-source">`
  block used by every existing article, with a real cited source.
- Wrap significant figures in `<data value="70">70</data>` so they stay machine-readable.
- Do not invent statistics, prices, or study results. Facts must be verifiable, and cited
  where a source is named. If a claim can't be supported, cut it.

### 6. Write the frontmatter

```yaml
---
title: "…"                    # ≤70 chars, question or definitional phrasing
description: "…"              # 150–160 chars, meta description
excerpt: "…"                  # 2–3 sentences, used on index cards + llms.txt
keywords:                     # 6–10, lowercase, no hashtags
  - …
category: "Technical Analysis"
breadcrumbs:
  - "Education"
author: "Cluenex"
date: 2026-07-31              # run date, or the draft's Date:
dateModified: 2026-07-31
readingTime: 8                # ceil(words / 225)
keyTakeaways:                 # 4–6 items, HTML allowed, each independently quotable
  - "…"
layout: base.njk
permalink: /learn/<category-slug>/<slug>/
---
```

Category → URL segment: Technical Analysis → `technical-analysis`,
Fundamental Analysis → `fundamental-analysis`, Portfolio Management → `portfolio-management`,
Markets → `markets`.

File path: `src/content/<slug>.md` (flat — subfolders in `src/content/` are reserved for
category index pages).

On an update (step 2), keep the existing `title`, `permalink`, `date` and file path; change
`dateModified` to the run date and revise the other fields only where the content changed.

### 7. Build

```bash
npm run build
```

Must exit 0. Then confirm the new page exists at `docs/learn/<category>/<slug>/index.html`,
appears in `docs/sitemap.xml` and `docs/llms.txt`, and is listed on its category index page.
Category indexes, sitemap and llms.txt are generated from collections — never edit by hand.

If the build fails, revert that file, move the draft to `_inbox/failed/` with a note, and
carry on with the others.

### 8. Commit (do not push)

Stage **only `src/content/`**. Article commits never include build output — Cloudflare runs
the build itself (confirmed: commits `54308ee` and `c962448`, which added 10 articles each,
touched zero files under `docs/`).

`docs/` is gitignored, but ~30 legacy files under it are still tracked from before that rule,
so a build dirties them. After committing, discard that noise so Bernard's tree is clean:

```bash
git add src/content
git commit -F <message-file>
git restore docs        # drop build-time churn in the legacy tracked files
```

One commit per run, covering the whole batch. Subject line, then a blank line, then one bullet
per article:

```
Add 8 articles, update 2 (2026-08-01)

- What Is Labor Force Participation — /learn/markets/labor-force-participation-rate/
- ...
```

Use `Add <N> articles` when all are new, `Add <N> articles, update <M>` when the batch mixes
new pages with updates to existing ones, `Update <M> articles` when none are new.

Leave the commit unpushed on `main`.

### 9. Move the drafts and report

Processed drafts → `_inbox/processed/`. Failures → `_inbox/failed/` plus
`<name>.note.txt` explaining what went wrong.

If `mv` or `rm` fails with `Operation not permitted` (the sandbox needs delete permission on
the folder, which may lapse), fall back: `cp` the draft into `_inbox/processed/`, append a line
to `_inbox/.processed-log.tsv` (`<iso-timestamp>\t<draft-filename>\t<output-path>`), and skip
any inbox file already listed there on future runs. Say so in the report so Bernard can clear
`_inbox/` himself.

The report is scannable, no preamble. Per article: title, live URL, new-or-update, word count,
and any judgment call worth knowing (category chosen, claims corrected or cut, disputes added,
near-duplicates flagged). Then, in order:

1. Anything that failed and why.
2. How many drafts remain in `_inbox/` for the next run.
3. The push command, last, on its own:

```
cd "C:\Users\user\Documents\Claude\Projects\Cluenex Content"; git push origin main
```

Review command to offer alongside it: `git show --stat HEAD`.

---

## Guardrails

- If git reports `Unable to create '.git/index.lock': File exists`, it's a stale lock left by an
  interrupted run (nothing persists between sandbox calls). `rm -f .git/index.lock` and retry.
- The sandbox may refuse `rm`/`mv` inside the mounted folder with `Operation not permitted`.
  Call the file-delete permission tool for the folder, or use the copy + ledger fallback above.
- Never push. Never force-push. Never touch `docs/` by hand.
- Never create a second page for a topic already covered in `src/content/` — update the
  existing page instead (step 2).
- Never process more than 10 drafts in one run, and never skip ahead in the queue.
- Never fabricate data to fill a template section — drop the section instead.
- If a draft is too thin to reach the quality bar (under ~400 words of real substance for a
  learn guide), fail it with a note rather than padding it out.
