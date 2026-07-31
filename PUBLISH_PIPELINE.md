# Publish Pipeline — draft in, deploy-ready page out

Runbook for the automated 3:00 AM conversion. Bernard drops drafts in `_inbox/`;
this process turns each into an Eleventy page under `src/content/`, verifies the
build, and commits on `main`. Bernard pushes; Cloudflare Pages deploys to
learn.cluenex.com.

Repo: `bernard8816/cluenex-new-blog` · branch `main` · build `npm run build` (Eleventy, output `docs/`).

---

## Steps

### 1. Read the inbox

Process every file directly inside `_inbox/` (ignore `README.md`, `processed/`, `failed/`).
If there are none, stop — no commit, no output.

### 2. Parse the draft

Read optional hint lines from the top (`Title:`, `Category:`, `Slug:`, `Date:`, `Format:`, `Update:`),
then treat the rest as the body. Infer anything not given:

- **Title** — first `#`/`##` heading, or the strongest headline in the draft.
- **Category** — exactly one of `Technical Analysis`, `Fundamental Analysis`, `Portfolio Management`, `Markets`. Pick by topic; match the existing distribution in `src/content/`.
- **Slug** — kebab-case from the title, stopwords trimmed, ≤5 words.
- **Format** — default `learn` guide.

### 3. Rewrite to house rules

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

### 4. Write the frontmatter

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

### 5. Check for collisions

If `src/content/<slug>.md` or that permalink already exists: treat as an update only if the
draft said `Update:`. Otherwise fail the draft rather than overwrite.

### 6. Build

```bash
npm run build
```

Must exit 0. Then confirm the new page exists at `docs/learn/<category>/<slug>/index.html`,
appears in `docs/sitemap.xml` and `docs/llms.txt`, and is listed on its category index page.
Category indexes, sitemap and llms.txt are generated from collections — never edit by hand.

If the build fails, revert that file, move the draft to `_inbox/failed/` with a note, and
carry on with the others.

### 7. Commit (do not push)

Stage **only `src/content/`**. Article commits never include build output — Cloudflare runs
the build itself (confirmed: commits `54308ee` and `c962448`, which added 10 articles each,
touched zero files under `docs/`).

`docs/` is gitignored, but ~30 legacy files under it are still tracked from before that rule,
so a build dirties them. After committing, discard that noise so Bernard's tree is clean:

```bash
git add src/content
git commit -m "Add <N> article(s): <title-1>; <title-2>"
git restore docs        # drop build-time churn in the legacy tracked files
```

Leave the commit unpushed on `main`. Bernard reviews `git show --stat HEAD` and runs `git push`.

### 8. Move the drafts and report

Processed drafts → `_inbox/processed/`. Failures → `_inbox/failed/` plus
`<name>.note.txt` explaining what went wrong.

If `mv` or `rm` fails with `Operation not permitted` (the sandbox needs delete permission on
the folder, which may lapse), fall back: `cp` the draft into `_inbox/processed/`, append a line
to `_inbox/.processed-log.tsv` (`<iso-timestamp>\t<draft-filename>\t<output-path>`), and skip
any inbox file already listed there on future runs. Say so in the report so Bernard can clear
`_inbox/` himself.

Report back: what was created, the live URLs it will have, word counts, anything that needed a
judgment call, and anything that failed.

---

## Guardrails

- If git reports `Unable to create '.git/index.lock': File exists`, it's a stale lock left by an
  interrupted run (nothing persists between sandbox calls). `rm -f .git/index.lock` and retry.
- The sandbox may refuse `rm`/`mv` inside the mounted folder with `Operation not permitted`.
  Call the file-delete permission tool for the folder, or use the copy + ledger fallback above.
- Never push. Never force-push. Never touch `docs/` by hand.
- Never rewrite an existing article unless the draft explicitly says `Update:`.
- Never fabricate data to fill a template section — drop the section instead.
- If a draft is too thin to reach the quality bar (under ~400 words of real substance for a
  learn guide), fail it with a note rather than padding it out.
