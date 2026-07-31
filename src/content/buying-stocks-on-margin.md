---
title: "What Is Buying on Margin: How Leverage Forces You to Sell"
description: "Buying on margin means borrowing from a broker to buy shares. Regulation T caps the loan at 50% of the purchase; a 33% decline triggers a margin call at FINRA's 25% maintenance floor."
excerpt: "Buying on margin means borrowing money from a broker to buy more shares than cash alone allows, using the shares as collateral. Leverage multiplies gains and losses equally, but only the losses come with a deadline: when equity falls below the maintenance requirement, the broker liquidates. US margin debt hit a record $1.53 trillion in June 2026."
keywords:
  - buying on margin
  - margin call
  - margin debt
  - leverage investing
  - Regulation T
  - FINRA maintenance requirement
  - 1929 crash margin
  - forced liquidation
category: "Portfolio Management"
breadcrumbs:
  - "Education"
author: "Cluenex"
date: 2026-07-31
dateModified: 2026-07-31
readingTime: 10
keyTakeaways:
  - "<strong>Buying on margin</strong> means borrowing from a broker to buy securities, with the securities themselves pledged as collateral. The loan balance does not shrink when the shares fall."
  - "Federal Reserve <strong>Regulation T</strong> caps the initial loan at <data value=\"50\">50%</data> of the purchase price. FINRA Rule 4210 requires at least <data value=\"25\">25%</data> equity be maintained thereafter; most brokers impose house requirements of <data value=\"30\">30</data>–<data value=\"40\">40%</data>."
  - "At the 25% maintenance floor, a position bought with the maximum Reg T loan triggers a margin call after a <data value=\"33\">33%</data> decline — and at a 30% house requirement, after a <data value=\"29\">29%</data> decline."
  - "US margin debt reached a record <data value=\"1.53\">$1.53 trillion</data> in June 2026, up <data value=\"51.5\">51.5%</data> year over year. Since 1997, comparable growth rates occurred only in late 1999–early 2000, mid-2007 and spring 2021."
  - "RCA fell from <data value=\"114.75\">114.75</data> in September 1929 to <data value=\"2.625\">2.625</data> in May 1932 — a <data value=\"98\">98%</data> decline. Margin holders were liquidated on the way down and never saw the recovery."
  - "Cluenex does not extend leverage. Its valuation, moat and sentiment tools are built for position sizing decisions made with capital that cannot be called away."
layout: base.njk
permalink: /learn/portfolio-management/buying-stocks-on-margin/
---

## Definition

<div class="def-box">
<p class="definition-text">
<dfn id="margin-def"><strong>Buying on margin</strong></dfn> is purchasing securities with money borrowed from a broker, where the purchased securities serve as collateral for the loan and the investor is liable for the full loan balance regardless of how the securities perform.
</p>
<div class="def-source">Source: Board of Governors of the Federal Reserve System, <em>Regulation T (12 CFR Part 220)</em>; FINRA, <em>Rule 4210: Margin Requirements</em>, finra.org.</div>
</div>

Margin converts an investment decision into a financed position. Gains and losses are both multiplied, but the two are not symmetric in consequence. A leveraged gain is unrealised until you choose to sell. A leveraged loss can force a sale on the broker's timetable.

That asymmetry — not the arithmetic of doubled returns — is what makes margin the mechanism behind every leveraged unwind in market history.

## How Margin Works

Three regulatory levels govern a margin position in the United States.

- **Initial margin (Regulation T)** — the Federal Reserve permits a broker to lend up to <data value="50">50%</data> of the purchase price of a marginable equity. $10,000 of cash buys $20,000 of stock.
- **Maintenance margin (FINRA Rule 4210)** — equity must stay at or above <data value="25">25%</data> of the position's current market value at all times.
- **House requirement** — brokers routinely set stricter thresholds, commonly <data value="30">30</data>–<data value="40">40%</data>, and can raise them on concentrated, volatile or thinly traded names without notice.

Equity is market value minus the loan. The loan is a fixed number; market value is not. Every dollar the position falls comes entirely out of equity.

### The multiplication, both directions

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Stock move</th><th>Position value</th><th>Loan owed</th><th>Your equity</th><th>Your return</th></tr>
</thead>
<tbody>
<tr><td>+20%</td><td>$24,000</td><td>$10,000</td><td>$14,000</td><td><span class="pos">+40%</span></td></tr>
<tr><td>+10%</td><td>$22,000</td><td>$10,000</td><td>$12,000</td><td><span class="pos">+20%</span></td></tr>
<tr><td>Unchanged</td><td>$20,000</td><td>$10,000</td><td>$10,000</td><td>0% (less interest)</td></tr>
<tr><td>−10%</td><td>$18,000</td><td>$10,000</td><td>$8,000</td><td>−20%</td></tr>
<tr><td>−20%</td><td>$16,000</td><td>$10,000</td><td>$6,000</td><td>−40%</td></tr>
<tr><td>−33%</td><td>$13,333</td><td>$10,000</td><td>$3,333</td><td>−67% · <strong>margin call</strong></td></tr>
<tr><td>−50%</td><td>$10,000</td><td>$10,000</td><td>$0</td><td>−100%</td></tr>
</tbody>
</table>
</div>

*Based on $10,000 cash and a $10,000 Reg T loan. Interest on the loan accrues throughout and is excluded from these figures.*

### Where the call lands

Solve for the price at which equity falls to the maintenance threshold:

```
Market value at call = Loan ÷ (1 − maintenance requirement)
25% floor: $10,000 ÷ 0.75 = $13,333  → a 33.3% decline
30% house: $10,000 ÷ 0.70 = $14,286  → a 28.6% decline
40% house: $10,000 ÷ 0.60 = $16,667  → a 16.7% decline
```

A 40% house requirement on a volatile position means a routine <data value="17">17%</data> drawdown — an ordinary event for a high-multiple growth stock — puts the account in call.

## What a Margin Call Actually Does

A margin call is a demand for additional cash or securities to restore the required equity level. Three features make it more dangerous than the arithmetic suggests.

**It arrives at the worst price.** Calls trigger after declines, so any liquidation happens near a local low. A holder who would have recovered by waiting is removed from the position before the recovery.

**It does not require your consent.** Brokerage margin agreements permit the firm to sell holdings — its choice of which ones — without contacting you first and without waiting out a stated deadline. Brokers may also raise house requirements mid-position.

**Losses are not capped at your investment.** In an unleveraged position the floor is zero. On margin, a gap down through the liquidation level leaves a residual debit balance owed to the broker.

Interest accrues the whole time. Margin loan rates float above a broker's base rate, which tracks short-term policy rates — the federal funds target range stood at <data value="3.5">3.50%</data>–<data value="3.75">3.75%</data> after the FOMC's July 29, 2026 decision, so the position must clear that carry before it earns anything.

## Example: RCA, 1929, and the Spiral

Radio Corporation of America was the defining growth stock of the 1920s — a consumer technology platform in a category that barely existed a decade earlier.

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Date</th><th>RCA price</th><th>Brokers' loans outstanding</th></tr>
</thead>
<tbody>
<tr><td><time datetime="1928-01">Jan 1928</time></td><td>—</td><td>$3.8 billion</td></tr>
<tr><td><time datetime="1929-01">Jan 1929</time></td><td>—</td><td>$5.3 billion</td></tr>
<tr><td><time datetime="1929-09">Sept 1929</time></td><td>114.75 (peak)</td><td>—</td></tr>
<tr><td><time datetime="1929-10">Early Oct 1929</time></td><td>—</td><td>$6.8 billion (peak)</td></tr>
<tr><td><time datetime="1932-05">May 1932</time></td><td>2.625</td><td>—</td></tr>
</tbody>
</table>
</div>

RCA fell <data value="98">98%</data> from its September 1929 peak to its May 1932 low. That number describes what happened to the company's shares. What happened to leveraged holders was worse, because they did not hold the shares to 1932 — they were liquidated in 1929 and 1930.

The mechanism is self-reinforcing. Falling prices push accounts below maintenance. Brokers liquidate. Liquidation is indiscriminate selling into a falling market, which pushes prices lower, which puts more accounts below maintenance. The feedback loop runs on obligation, not sentiment: forced sellers sell regardless of what they believe about value.

<div class="callout callout-red">
<div class="callout-label">Correction to a common claim</div>
<p class="callout-text">The familiar line that 1920s investors "put down 10% and borrowed 90%" overstates the general case. Margin requirements ranged roughly <strong>10–30%</strong> for most of the decade, and brokers raised them to <strong>40–50%</strong> by mid-1929 as lenders grew nervous about valuations. Leverage was real and it was the transmission mechanism — but the tightening was already under way before the crash, which is part of why the unwind was so abrupt.</p>
</div>

## Where Margin Stands Now

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Measure</th><th>Reading</th><th>Context</th></tr>
</thead>
<tbody>
<tr><td>FINRA margin debt, June 2026</td><td>$1.53 trillion</td><td>Record high; series begins January 1997</td></tr>
<tr><td>Month-over-month change</td><td>+7.9%</td><td>Third consecutive monthly increase</td></tr>
<tr><td>Year-over-year change</td><td>+51.5%</td><td>May 2026 grew +53.7% year over year</td></tr>
<tr><td>Comparable YoY growth episodes</td><td>1999–2000, mid-2007, spring 2021</td><td>Late-cycle or post-surge periods</td></tr>
</tbody>
</table>
</div>

Margin debt growth of this magnitude is not a timing signal. Those three prior clusters did not mark tops precisely, and in one case the market ran considerably higher first. What the level does describe is fragility: the larger the leveraged base, the more forced selling a given percentage decline mechanically produces.

## How to Use Margin Data in Practice

**1. Find out whether margin is enabled on your account.** Many brokerage applications default to a margin account type. Cash-only accounts cannot be called; margin accounts can. Check the account type, not just whether you have knowingly borrowed.

**2. Calculate your call price before you open the position, not after.** Divide your loan by one minus your broker's house requirement. That number is the price at which control of the position passes to the broker.

**3. Read margin debt as a fragility gauge, not a signal.** Rapid growth in aggregate margin debt tells you how much involuntary supply is waiting under the market. It does not tell you when it will arrive.

**4. Separate leverage risk from concentration risk.** A leveraged position in a single high-volatility name compounds both. Brokers apply higher house requirements precisely to these positions, which means the call arrives sooner exactly where the drawdowns are largest.

**5. Size positions so that no price move can force your hand.** Cluenex's valuation tools — discounted cash flow and owner earnings — assess what a business is worth on a multi-year horizon. That analysis is only usable by an investor who can hold for multiple years, which leverage removes as an option.

## Common Mistakes and Misconceptions

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 1</div>
<p class="callout-text"><strong>"I'll just add cash if I get a margin call."</strong><br>
Margin calls cluster in market-wide declines, when your other assets are also down and your income may be less secure. The moment you most need spare cash is the moment it is hardest to produce. Brokers may also liquidate before the stated deadline if the account deteriorates further.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 2</div>
<p class="callout-text"><strong>"The worst case is losing what I put in."</strong><br>
That is true for cash purchases only. If a stock gaps down through your liquidation level — an earnings miss, a halted stock reopening lower — the sale can leave a debit balance you owe the broker after your equity is gone.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 3</div>
<p class="callout-text"><strong>"2x leverage means I need a 50% drop to be wiped out."</strong><br>
Wipeout is not the binding constraint; the maintenance requirement is. At a 30% house requirement, a maximum Reg T position is called after a <data value="29">29%</data> decline. You lose control of the position long before you lose all the money.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 4</div>
<p class="callout-text"><strong>"Record margin debt means a crash is coming."</strong><br>
Margin debt rises with market value almost mechanically, and the three prior episodes of comparable year-over-year growth — late 1999, mid-2007, spring 2021 — were followed by declines at very different intervals, in one case more than a year later. Elevated leverage describes how violent a decline would be, not whether one is imminent.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">&#10007; Mistake 5</div>
<p class="callout-text"><strong>"Margin is free money while the position is working."</strong><br>
Margin interest accrues daily and compounds into the loan balance. With short-term policy rates at 3.50%–3.75% as of July 2026, broker margin rates sit meaningfully above that. A flat position on margin loses money.</p>
</div>

## How Cluenex Approaches Leverage

Cluenex extends no credit and holds no customer positions. The platform's role is analytical: Cluenex AI ingests financial statements, valuation inputs, moat characteristics, sentiment, earnings dates, and insider and congressional trading activity across the top 1,000+ US-listed stocks, producing short-term and long-term prediction scores alongside discounted cash flow and owner earnings estimates.

The practical link to leverage is holding period. A discounted cash flow estimate is a claim about where value settles over years. A margin position has a maximum holding period set by the next 30% drawdown. An investor who is right about the valuation and leveraged on the timing gets liquidated before the thesis resolves — which is why the same analysis that supports a conviction position supports doing it with unencumbered capital.

## Frequently Asked Questions

- **What does buying on margin mean?**
  Buying on margin means borrowing money from your broker to purchase securities, using those securities as collateral for the loan. Under Federal Reserve Regulation T, the broker can lend up to 50% of the purchase price, so $10,000 of cash can buy $20,000 of stock. The loan balance stays fixed regardless of what the securities do.

- **What triggers a margin call?**
  A margin call is triggered when the equity in the account — market value minus the loan — falls below the maintenance requirement. FINRA Rule 4210 sets a 25% minimum, and most brokers impose house requirements of 30% to 40%. On a position bought with the maximum Reg T loan, a 33% decline breaches the 25% floor and a 29% decline breaches a 30% house requirement.

- **Can you lose more than you invest with margin?**
  Yes. Because the loan is owed in full regardless of the position's value, a decline steep enough to wipe out your equity before the broker can liquidate leaves a debit balance you still owe. This is the structural difference from a cash account, where the maximum loss is the amount invested.

- **How much is margin debt right now?**
  FINRA reported US margin debt at a record $1.53 trillion in June 2026, a 7.9% increase from May and 51.5% higher than a year earlier. The data series begins in January 1997, and only three earlier periods — late 1999 to early 2000, mid-2007, and spring 2021 — showed comparable year-over-year growth rates.

- **Does high margin debt predict a market crash?**
  No reliable timing relationship exists. Margin debt rises alongside market values, and the prior periods of comparable growth were followed by declines at intervals ranging from months to more than a year. What elevated margin debt does indicate is the volume of forced selling a given decline would mechanically produce, which affects the speed and depth of a drawdown rather than its start date.

- **What interest rate do brokers charge on margin loans?**
  Brokers set margin rates as a spread over a base rate that tracks short-term policy rates, and the spread typically narrows as the loan size increases. With the federal funds target range at 3.50%–3.75% following the July 29, 2026 FOMC decision, retail margin rates sit well above that level. Interest accrues daily and adds to the loan balance.

- **How do I turn margin off?**
  Most brokers allow an account to be converted from a margin account to a cash account, or allow margin borrowing to be disabled, through account settings or a written request. A cash account cannot be issued a margin call, which removes the possibility of forced liquidation entirely.

- **Is a leveraged ETF the same as buying on margin?**
  No. A leveraged ETF applies leverage inside the fund and resets it daily, so there is no margin call and losses are capped at the amount invested — but the daily reset causes value to erode in volatile markets even when the underlying index is flat. Margin applies leverage at the account level, carries no decay, and can force liquidation.

## Related Concepts

- [Why Leveraged ETFs Lose Money in Sideways Markets](/learn/portfolio-management/leveraged-etf-volatility-decay/) — the other way leverage removes control
- [What is Position Sizing: How to Calculate Trade Size Based on Risk Tolerance](/learn/portfolio-management/position-sizing/) — sizing so no decline forces a sale
- [What is a Drawdown: How to Calculate Maximum Drawdown of a Portfolio](/learn/portfolio-management/drawdown-maximum-drawdown/) — the measure that sets your call price
- [How to Set Stop Losses: Fixed, Trailing, and ATR-Based Methods](/learn/portfolio-management/stop-loss-methods/) — exiting on your terms rather than the broker's
- [When to Cut Losses vs Hold Through a Drawdown](/learn/portfolio-management/cut-losses-vs-hold/) — the decision leverage takes away from you
