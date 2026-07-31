---
title: "Why Leveraged ETFs Lose Money Even When You Get the Direction Right"
description: "Leveraged ETFs reset their exposure daily, so returns compound off a new base each morning. A 2x fund ends below its index after any round trip, and losses grow with volatility."
excerpt: "A leveraged ETF delivers a multiple of its index's return for one trading day, then resets. Because each day compounds off a new base, the fund's multi-day return is not the multiple of the index's multi-day return — and in volatile or sideways markets it is reliably worse. Korea's single-stock leveraged ETFs, launched May 27, 2026, showed the mechanism at full scale within two months."
keywords:
  - leveraged ETF
  - volatility decay
  - beta slippage
  - daily reset
  - 2x ETF
  - inverse ETF
  - Korea leveraged ETF
  - compounding risk
category: "Portfolio Management"
breadcrumbs:
  - "Education"
author: "Cluenex"
date: 2026-07-31
dateModified: 2026-07-31
readingTime: 10
keyTakeaways:
  - "A <strong>leveraged ETF</strong> targets a multiple of its index's return over <strong>one trading day</strong>, then resets exposure. Its multi-day return is a path-dependent product of daily results, not a multiple of the period return."
  - "<strong>The round trip proves it:</strong> an index that falls <data value=\"10\">10%</data> then rises <data value=\"11.11\">11.11%</data> returns to 100. A 2x fund on the same path ends at <data value=\"97.78\">97.78</data>; a 3x fund ends at <data value=\"93.33\">93.33</data>."
  - "Decay scales with the square of volatility. Twenty days of alternating ±5% moves leave the index down <data value=\"2.5\">2.5%</data>, a 2x fund down <data value=\"9.6\">9.6%</data>, and a 3x fund down <data value=\"20.4\">20.4%</data>."
  - "Korea launched single-stock leveraged ETFs on <strong>May 27, 2026</strong>. Retail investors bought a net <data value=\"14\">₩14 trillion</data> (about <data value=\"9.4\">$9.4 billion</data>). The KODEX SK Hynix 2x product fell over <data value=\"80\">80%</data> from its June 23 peak and roughly <data value=\"50\">50%</data> from its debut."
  - "Regulators responded by suspending new single-stock leveraged listings and raising the cash requirement to trade them from an effective <data value=\"3\">₩3 million</data> to <data value=\"30\">₩30 million</data>."
  - "Cluenex scores individual companies rather than leveraged wrappers — a conviction on a business is expressed through the shares, where a correct call is not erased by the path the price took to get there."
layout: base.njk
permalink: /learn/portfolio-management/leveraged-etf-volatility-decay/
---

## Definition

<div class="def-box">
<p class="definition-text">
A <dfn id="leveraged-etf-def"><strong>leveraged ETF</strong></dfn> is an exchange-traded fund that uses derivatives to deliver a fixed multiple — typically <data value="2">2×</data> or <data value="3">3×</data> — of the daily return of an index or single stock, rebalancing its exposure at the end of every trading session so the multiple applies to one day at a time.
</p>
<div class="def-source">Source: FINRA, <em>Regulatory Notice 09-31: Non-Traditional ETFs</em>, finra.org; US Securities and Exchange Commission, <em>Investor Bulletin: Leveraged and Inverse ETFs</em>, sec.gov.</div>
</div>

The stated objective contains the whole risk in two words: *daily* return. A 2x fund promises twice today's move measured from today's opening exposure. It promises nothing about the week, the month or the year.

Because each day's result compounds off a new base, the sequence of returns determines the outcome. Two paths ending at the same index level produce different leveraged results, and the more volatile path always produces the worse one.

## How the Daily Reset Creates Decay

Every evening the fund adjusts its derivative exposure so that tomorrow's multiple applies to tomorrow's new net asset value. That rebalancing has a mechanical consequence: the fund adds exposure after gains and cuts exposure after losses. It buys higher and sells lower, by design, every single day.

### The round trip

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Day</th><th>Index move</th><th>Index level</th><th>2× fund</th><th>3× fund</th></tr>
</thead>
<tbody>
<tr><td>Start</td><td>—</td><td>100.00</td><td>100.00</td><td>100.00</td></tr>
<tr><td>Day 1</td><td>−10.00%</td><td>90.00</td><td>80.00 (−20%)</td><td>70.00 (−30%)</td></tr>
<tr><td>Day 2</td><td>+11.11%</td><td>100.00</td><td>97.78 (+22.22%)</td><td>93.33 (+33.33%)</td></tr>
<tr><td><strong>Result</strong></td><td>—</td><td><strong>Flat</strong></td><td><strong>−2.22%</strong></td><td><strong>−6.67%</strong></td></tr>
</tbody>
</table>
</div>

The index recovered fully. The 2x fund did not, because its +22.22% on day two was applied to 80, not to 100. This gap is called **volatility decay** or **beta slippage**, and it is arithmetic rather than a fee, a tracking error or a failure of the manager.

### Decay compounds with time and volatility

Twenty trading days of alternating ±5% moves — a choppy but entirely ordinary month:

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Product</th><th>Two-day cycle factor</th><th>After 10 cycles (20 days)</th><th>Total return</th></tr>
</thead>
<tbody>
<tr><td>Index (1×)</td><td>1.05 × 0.95 = 0.9975</td><td>0.9753</td><td>−2.5%</td></tr>
<tr><td>2× fund</td><td>1.10 × 0.90 = 0.9900</td><td>0.9044</td><td>−9.6%</td></tr>
<tr><td>3× fund</td><td>1.15 × 0.85 = 0.9775</td><td>0.7965</td><td>−20.4%</td></tr>
</tbody>
</table>
</div>

The index lost 2.5%. The 3x fund lost 20.4% — eight times the index's loss, not three times. Decay grows with the square of volatility, so doubling the size of the daily swings roughly quadruples the drag.

<div class="callout callout-teal">
<div class="callout-label">The Rule That Follows</div>
<p class="callout-text">Leveraged ETFs outperform their stated multiple in sustained one-direction trends, where daily compounding works in your favour, and underperform badly in choppy or range-bound markets. Direction alone does not determine the outcome — the path does.</p>
</div>

## Example: Korea's Single-Stock Leveraged ETFs, 2026

South Korea listed single-stock leveraged ETFs — products delivering twice the daily move of one company's shares — on <time datetime="2026-05-27">May 27, 2026</time>.

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Date / measure</th><th>Figure</th></tr>
</thead>
<tbody>
<tr><td>Products launched</td><td>May 27, 2026</td></tr>
<tr><td>Net retail purchases</td><td>₩14 trillion (~$9.4 billion)</td></tr>
<tr><td>Net foreign purchases</td><td>~₩2 trillion</td></tr>
<tr><td>KODEX SK Hynix 2× — from June 23 peak</td><td>−80%+</td></tr>
<tr><td>KODEX SK Hynix 2× — from May 27 debut</td><td>~−50%</td></tr>
<tr><td>Kospi index — trailing month to late July 2026</td><td>~−35%</td></tr>
<tr><td>Regulatory response</td><td>New listings suspended; cash requirement raised from ~₩3m to ₩30m</td></tr>
</tbody>
</table>
</div>

Two numbers in that table carry the lesson. The fund is down roughly 50% from launch and more than 80% from its June peak. The gap between those two figures is the round-trip problem: buyers who entered near the top and held through the reversal experienced far worse than twice the underlying's decline, because the reversal was volatile as well as large.

South Korea's finance minister publicly apologised on July 29, 2026. Regulators suspended new single-stock leveraged listings, raised the cash required to trade the existing ones from an effective ₩3 million to ₩30 million, and are weighing restricting the products to professional investors or reducing the leverage factor outright — one official noting that "two times is too large."

Securities firms were also directed to send automatic periodic warnings to investors carrying large losses or holding the products beyond a set period. That remedy identifies the actual failure: not the product's design, which was disclosed, but a holding period the design never contemplated.

## How to Use Leveraged ETFs in Practice

**1. Match the holding period to the reset period.** The fund's objective is defined over one trading day. FINRA's guidance states plainly that these products are typically unsuitable for retail investors holding longer than one trading session. Any longer horizon requires accepting decay as a cost.

**2. Estimate the drag before entering.** For a 2x fund, the approximate annual decay is the variance of the underlying — volatility squared. An underlying running at 40% annualised volatility implies roughly 16% of annual drag for a 2x fund and about 48% for a 3x fund, before fees.

**3. Never apply single-stock leverage to a volatile single stock.** Leverage multiplies the daily move and decay multiplies the daily variance. A single semiconductor name carries several times the daily variance of a broad index, which is precisely why Korea's single-stock products failed faster than index-based ones.

**4. Read the expense ratio against the alternative.** US leveraged equity ETFs commonly carry expense ratios near 1.00% annually, against 0.03% or less for the largest broad-market index funds — roughly a thirty-fold difference, charged whether the fund gains or loses.

**5. Audit what you already hold.** Fund names encode the risk: "2x," "3x," "Ultra," "Daily," "Bull," "Bear," "Inverse." Any of those words means the product resets and is not a hold-and-forget instrument.

**6. Express directional conviction through the asset itself.** If the underlying thesis is about a company, the shares deliver the thesis without the path dependency. Cluenex's discounted cash flow and owner earnings tools produce multi-year valuation estimates — a horizon over which a leveraged wrapper is guaranteed to diverge from the thing being valued.

## Common Mistakes and Misconceptions

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 1</div>
<p class="callout-text"><strong>"A 2x fund gives twice the index return over any period."</strong><br>
It gives twice the <em>daily</em> return. Over any multi-day period the result is the compounded product of daily results, which differs from twice the period return in every case except a perfectly straight-line move. In the ±5% example above, the 3x fund returned eight times the index's loss, not three.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 2</div>
<p class="callout-text"><strong>"Decay only matters if I'm wrong about direction."</strong><br>
Decay is driven by volatility, not by direction. An investor who correctly calls a market higher over twelve months but experiences a choppy path can hold a 2x fund that finishes below where it started. Being right about the destination provides no protection against the route.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 3</div>
<p class="callout-text"><strong>"Leveraged ETFs are always worse than the index."</strong><br>
They are not. In a sustained low-volatility uptrend, daily compounding works in the holder's favour and a 2x fund can return substantially more than twice the index. This is why the products keep attracting buyers — the favourable case is real, it just requires a trend without meaningful pullbacks, which is the rarer market state.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 4</div>
<p class="callout-text"><strong>"This was a Korean regulatory failure, not a product problem."</strong><br>
Both descriptions have defenders. Korean regulators face genuine criticism for approving single-stock 2x products for a retail base known for long holding periods. But the mathematics is jurisdiction-neutral: identical decay applies to US and European leveraged ETFs, where the daily reset is disclosed in every prospectus and holders still routinely carry positions for months.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 5</div>
<p class="callout-text"><strong>"Leveraged ETFs can margin-call me like borrowed money can."</strong><br>
No. Leverage sits inside the fund, so losses are capped at the amount invested and no broker can demand additional capital. That is the one structural advantage over buying on margin — and it is also why decay is the price: the fund deleverages daily on your behalf rather than calling you.</p>
</div>

## How Cluenex Approaches Leveraged Products

Cluenex analyses individual companies. Cluenex AI ingests financial statements, valuation inputs, moat characteristics, sentiment, earnings dates, and insider and congressional trading activity across the top 1,000+ US-listed stocks, producing short-term and long-term prediction scores alongside discounted cash flow and owner earnings estimates.

Those outputs describe a business, and they are expressible only through instruments that track the business. A leveraged ETF tracks a daily return series derived from the business, which is a different object — over a multi-month horizon its value depends on realised volatility as much as on the company's performance. A long-term valuation thesis and a daily-reset instrument are answers to different questions.

The limitation worth stating: Cluenex does not score ETFs, leveraged or otherwise, and produces no prediction for these products. Where a holding's return depends primarily on path rather than on fundamentals, company-level analysis has nothing to contribute.

## Frequently Asked Questions

- **What is volatility decay in a leveraged ETF?**
  Volatility decay is the gap between a leveraged ETF's compounded multi-day return and the stated multiple of the index's multi-day return, caused by the fund resetting exposure daily. An index that falls 10% then rises 11.11% returns to its starting level, while a 2x fund on that path ends at 97.78 and a 3x fund at 93.33. The effect grows with the square of volatility.

- **Can you lose money on a leveraged ETF if the market goes up?**
  Yes. If the market rises over your holding period but does so along a volatile path, the daily reset can leave a 2x or 3x fund below where it started. The fund's return depends on the sequence of daily moves, not on the start-to-finish change, so a correct directional call offers no protection against a choppy route.

- **How long should you hold a leveraged ETF?**
  These products state a one-trading-day objective, and FINRA's guidance is that they are typically unsuitable for retail investors holding longer than a single session. Any longer holding period means accepting volatility decay as a cost, which for a 2x fund approximates the annualised variance of the underlying — roughly 16% a year on an underlying running 40% volatility.

- **Why did Korean leveraged ETF investors lose so much in 2026?**
  Korea listed single-stock leveraged ETFs on May 27, 2026, and retail investors bought a net ₩14 trillion — about $9.4 billion — of them, concentrated in Samsung Electronics and SK Hynix. When the chip rally reversed and the Kospi fell roughly 35% in a month, the KODEX SK Hynix 2x product fell more than 80% from its June 23 peak. Two-times leverage on a single volatile stock produces both the largest daily moves and the largest decay.

- **Are leveraged ETFs riskier than buying stocks on margin?**
  They carry different risks. A leveraged ETF cannot generate a margin call and cannot lose more than the amount invested, because the leverage is applied inside the fund. Margin can force liquidation and can leave a debit balance. But a leveraged ETF decays continuously in volatile markets, while a margin loan does not — the fund deleverages daily on your behalf, and that daily deleveraging is the decay.

- **What is an inverse ETF and does it decay too?**
  An inverse ETF targets the opposite of an index's daily return, and leveraged inverse products target −2× or −3×. They reset daily on the same schedule and are subject to the same path dependency, so an inverse fund can lose money over a period in which the index it shorts also fell. Decay applies to any daily-reset product regardless of direction.

- **How do I identify a leveraged ETF before buying?**
  The fund's full legal name and its prospectus objective are the reliable tests. Names containing "2x," "3x," "Ultra," "UltraPro," "Daily," "Bull," "Bear," or "Inverse" indicate a daily-reset product, and the prospectus will state the objective explicitly in terms of a single trading day. Ticker symbols alone are not sufficient.

- **What expense ratios do leveraged ETFs charge?**
  US leveraged equity ETFs commonly carry expense ratios near 1.00% a year, compared with 0.03% or less for the largest broad-market index funds. The fee is charged on assets regardless of performance and accrues in addition to volatility decay, so the two costs stack.

## Related Concepts

- [What Is Buying on Margin: How Leverage Forces You to Sell](/learn/portfolio-management/buying-stocks-on-margin/) — account-level leverage and its different failure mode
- [What is a Drawdown: How to Calculate Maximum Drawdown of a Portfolio](/learn/portfolio-management/drawdown-maximum-drawdown/) — why an 80% loss requires a 400% gain to recover
- [How to Hedge a Stock Portfolio Using ETFs and Options](/learn/portfolio-management/hedging-portfolio/) — the hedging job leveraged ETFs are often misused for
- [What is Portfolio Beta: How to Measure and Manage Market Exposure](/learn/portfolio-management/portfolio-beta/) — measuring the exposure you actually hold
- [What is the VIX? The Stock Market's Fear Index Explained](/learn/technical-analysis/vix-explained/) — the volatility input that sets the decay rate
