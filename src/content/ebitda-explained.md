---
title: "What is EBITDA and Why Do Analysts Use It for Valuation"
description: "EBITDA = Earnings Before Interest, Taxes, Depreciation, and Amortization. It measures core operating profit before financing and accounting decisions. Learn how EV/EBITDA works and when EBITDA is the right metric."
excerpt: "EBITDA = Net Income + Interest + Taxes + Depreciation + Amortization. Removes financing and accounting choices to show operating profitability. EV/EBITDA below 10 = potentially cheap. Above 20 = expensive for most sectors."
keywords:
  - EBITDA
  - EV/EBITDA
  - operating profit
  - fundamental analysis
  - enterprise value
  - valuation multiples
  - EBIT
  - operating cash flow
category: "Fundamental Analysis"
breadcrumbs:
  - "Education"
author: "Cluenex"
date: 2026-05-24
dateModified: 2026-05-24
readingTime: 8
keyTakeaways:
  - "<strong>EBITDA</strong> = Net Income + Interest Expense + Income Taxes + Depreciation + Amortization. Strips out non-operating costs to isolate core operating profitability."
  - "EBITDA enables fair comparison of companies with different capital structures, tax jurisdictions, and depreciation schedules — a company with $500M debt and a debt-free company can be compared on EBITDA without distortion."
  - "<strong>EV/EBITDA</strong> = Enterprise Value ÷ EBITDA. Below <data value='8'>8</data>x = cheap for most sectors. <data value='10'>10</data>–<data value='15'>15</data>x = fair value. Above <data value='20'>20</data>x = expensive (growth premium required)."
  - "EBITDA's main weakness: it ignores capital expenditures. A capital-intensive business (airlines, manufacturing) can show high EBITDA but burn cash maintaining physical assets. Always check FCF alongside EBITDA."
  - "Cluenex displays EBITDA and key valuation multiples as part of its comprehensive financial metrics suite for every covered stock."
layout: base.njk
permalink: /learn/fundamental-analysis/ebitda-explained/
---

## Definition

<div class="def-box">
<p class="definition-text">
<dfn id="ebitda-def"><strong>EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization)</strong></dfn> measures a company's core operating profitability by removing the effects of financing decisions (interest), tax environments (taxes), and non-cash accounting entries (depreciation and amortization) — enabling comparisons of operating performance across companies regardless of their capital structure or accounting choices.
</p>
<div class="def-source">Source: Widely adopted in leveraged buyout (LBO) analysis from the 1980s, standardized in CFA curriculum.</div>
</div>

EBITDA became the standard metric for comparing businesses across industries because it approximates operating cash flow before capex. Two companies in the same industry — one headquartered in a high-tax country, another in a low-tax country, one with aging fully-depreciated assets, another with new assets generating large depreciation charges — will look wildly different on net income but nearly identical on EBITDA if their operations are equally efficient.

## How EBITDA Is Calculated

```
EBITDA = Net Income + Interest Expense + Income Tax Expense 
         + Depreciation + Amortization
```

**Alternative (from operating income):**
```
EBITDA = EBIT + Depreciation + Amortization
EBIT   = Net Income + Interest + Taxes (= Operating Income)
```

**Example — Company with $1B revenue:**
- Net Income: $80M
- + Interest Expense: $40M
- + Income Taxes: $30M
- + Depreciation: $60M
- + Amortization: $20M
- **EBITDA = $230M** (EBITDA margin = 23%)

## EBITDA vs Related Metrics

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Metric</th><th>What It Excludes</th><th>Best For</th></tr>
</thead>
<tbody>
<tr><td><strong>Gross Profit</strong></td><td>Operating expenses, interest, taxes, D&A</td><td>Assessing product/service margin</td></tr>
<tr><td><strong>EBITDA</strong></td><td>Interest, taxes, depreciation, amortization</td><td>Cross-company operating comparison, M&A</td></tr>
<tr><td><strong>EBIT (Operating Income)</strong></td><td>Interest, taxes</td><td>Operating profit including real asset depreciation</td></tr>
<tr><td><strong>Net Income</strong></td><td>Nothing — all-in</td><td>Shareholder earnings; P/E calculation</td></tr>
<tr><td><strong>Free Cash Flow</strong></td><td>Non-cash items, but includes capex</td><td>Real cash generation after investment</td></tr>
</tbody>
</table>
</div>

## EV/EBITDA: The Acquisition Multiple

EV/EBITDA (Enterprise Value to EBITDA) is the primary valuation multiple used in mergers, acquisitions, and LBO analysis because it represents the total purchase price of a company relative to its cash-generating ability before financing costs.

```
EV/EBITDA = Enterprise Value ÷ EBITDA
Enterprise Value = Market Cap + Total Debt − Cash & Equivalents
```

**Why EV instead of market cap?** EV includes debt. An acquirer doesn't just buy the equity — they assume the debt too. EV/EBITDA reflects the true total cost of acquiring the business.

<div class="threshold-grid" role="list" aria-label="EV/EBITDA zones">
<div class="tc tc-1" role="listitem">
<div class="tc-range">Below 6x</div>
<div class="tc-label">Very cheap<br><small>Potential value or distress</small></div>
</div>
<div class="tc tc-2" role="listitem">
<div class="tc-range">6x – 10x</div>
<div class="tc-label">Inexpensive<br><small>Value territory for most sectors</small></div>
</div>
<div class="tc tc-3" role="listitem">
<div class="tc-range">10x – 15x</div>
<div class="tc-label">Fair value<br><small>Market consensus</small></div>
</div>
<div class="tc tc-4" role="listitem">
<div class="tc-range">15x – 20x</div>
<div class="tc-label">Premium<br><small>Growth or quality premium</small></div>
</div>
<div class="tc tc-5" role="listitem">
<div class="tc-range">Above 20x</div>
<div class="tc-label">Expensive<br><small>High growth required to justify</small></div>
</div>
</div>

## EBITDA Limitations: What It Hides

<div class="callout callout-red">
<div class="callout-label">⚠ Limitation 1: Ignores CapEx</div>
<p class="callout-text">EBITDA adds back depreciation but doesn't subtract capex. Airlines show solid EBITDA but burn billions replacing aging aircraft. Always compare EBITDA to maintenance capex to determine true cash generation. If maintenance capex equals or exceeds depreciation, EBITDA ≈ FCF. If capex greatly exceeds depreciation, the business is capital-hungry.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">⚠ Limitation 2: "Adjusted EBITDA" Can Be Abused</div>
<p class="callout-text">Companies increasingly report "Adjusted EBITDA" that excludes stock-based compensation, restructuring charges, and "one-time" items that recur every year. When Adjusted EBITDA is <data value="40">40</data>%+ higher than GAAP EBITDA, the adjustments deserve scrutiny. Stock-based compensation is a real cost that dilutes shareholders — EBITDA that ignores it overstates earning power.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">⚠ Limitation 3: Doesn't Reflect Working Capital</div>
<p class="callout-text">A company with strong EBITDA but rapidly rising receivables (customers not paying) is generating accounting profits but not cash. EBITDA cannot distinguish this. Always cross-check EBITDA with operating cash flow.</p>
</div>

## Example: EV/EBITDA Comparison Across Sectors

<div class="trade-log">
<div class="tl-header">
<span class="tl-title">Sector EV/EBITDA Benchmarks</span>
<span class="tl-ticker">Cross-Sector Comparison (Illustrative)</span>
</div>
<table>
<thead>
<tr><th>Sector</th><th>Typical EV/EBITDA</th><th>Rationale</th></tr>
</thead>
<tbody>
<tr><td>Technology / SaaS</td><td>15–30x</td><td>Asset-light, high margins, growth premium</td></tr>
<tr><td>Consumer Staples</td><td>10–14x</td><td>Stable cash flows, low growth, dividend payers</td></tr>
<tr><td>Healthcare</td><td>12–18x</td><td>Pricing power, patent protection</td></tr>
<tr><td>Energy / Utilities</td><td>5–10x</td><td>Capital-intensive, regulated, stable but slow</td></tr>
<tr><td>Retail</td><td>6–10x</td><td>Low margins, competitive, capex-heavy</td></tr>
<tr><td>Airlines</td><td>4–8x</td><td>High capex, cyclical, debt-heavy structures</td></tr>
</tbody>
</table>
</div>

## How Cluenex Displays EBITDA

Cluenex displays EBITDA as part of its full financial metrics suite for every covered stock, alongside EV/EBITDA multiples and EBITDA margin. This allows direct comparison against sector benchmarks without manual calculation — giving you an instant read on whether a company is trading at a discount or premium to its operating cash flow generation.

EBITDA margin trends are factored into Cluenex's profitability and growth indicators, and the AI uses EBITDA trajectory alongside FCF growth when calculating predicted long-term price movement.

## Frequently Asked Questions

- **Is EBITDA the same as operating cash flow?**
  Similar but not identical. Operating cash flow (from the cash flow statement) also adjusts for working capital changes — accounts receivable, inventory, accounts payable. EBITDA does not. In a business where customers pay immediately and suppliers allow deferred payment, EBITDA ≈ operating cash flow. In a business with long receivable cycles, they can differ significantly.

- **Why do private equity firms use EBITDA for LBO analysis?**
  LBOs are funded with debt. The question is: how many years of EBITDA does it take to repay the debt? A company bought at 8x EBITDA with 5x leverage (5x EBITDA in debt) can theoretically repay its debt in 5 years if EBITDA is fully applied to debt service. This "EBITDA coverage" framing is why PE firms live and die by this metric.

- **What EBITDA margin is considered good?**
  Varies dramatically by sector. SaaS: 20–35%. Healthcare: 15–25%. Consumer goods: 10–18%. Retail: 5–10%. Airlines: 10–15%. Compare a company's EBITDA margin to its sector peers, not to an absolute benchmark.

- **What is Adjusted EBITDA?**
  Companies often report an "Adjusted EBITDA" that adds back one-time charges, stock compensation, and restructuring costs. Adjusted EBITDA is useful when non-recurring items genuinely distort the picture, but treat recurring "one-time" adjustments skeptically.

- **When should I use EBITDA vs FCF?**
  Use EBITDA for sector comparisons and M&A analysis. Use FCF for dividend sustainability, buyback capacity, and intrinsic value calculations. For capital-intensive companies, FCF is always the more conservative and truthful measure.

## Related Concepts

- [Free Cash Flow](/learn/fundamental-analysis/free-cash-flow/) — Cash flow after capex; EBITDA's complement
- [Gross Margin vs Operating Margin vs Net Margin](/learn/fundamental-analysis/gross-operating-net-margin/) — Full profitability picture
- [Balance Sheet Analysis](/learn/fundamental-analysis/balance-sheet-analysis/) — Where debt (removed in EBITDA) lives
- [How to Analyze Debt](/learn/fundamental-analysis/debt-analysis/) — Debt/EBITDA is a key leverage measure
- [P/E Ratio Explained](/learn/fundamental-analysis/pe-ratio-valuation/) — Earnings-based peer metric to EBITDA
