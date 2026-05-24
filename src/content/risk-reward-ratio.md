---
title: "What is the Risk-Reward Ratio: Why 1:3 is the Baseline for Most Traders"
description: "Risk-reward ratio compares potential profit to potential loss on a trade. A 1:3 ratio means risking $1 to make $3 — at a 40% win rate, this still produces net profit. Learn to calculate and apply it."
excerpt: "Risk-Reward = Potential Gain ÷ Potential Loss. A 1:3 ratio is profitable at a 40% win rate. Most traders fail because they take 1:1 or worse setups, requiring 60%+ win rates to break even."
keywords:
  - risk-reward ratio
  - risk reward
  - 1:3 risk reward
  - trading profitability
  - expected value trading
  - win rate vs risk reward
  - trade management
category: "Portfolio Management"
breadcrumbs:
  - "Education"
author: "Cluenex"
date: 2026-05-25
dateModified: 2026-05-25
readingTime: 9
keyTakeaways:
  - "<strong>Risk-Reward Ratio</strong> = Potential Gain ÷ Potential Loss. A 1:3 ratio risks $100 to make $300. A 1:1 ratio requires 51%+ win rate to profit; a 1:3 requires only 26%+."
  - "<strong>1:3 is the baseline</strong> because most strategies have win rates of 40–55%. At 40% win rate + 1:3 RR, expected value per trade = +$80 per $100 risked. Profitable without needing to be right most of the time."
  - "<strong>Expected Value formula</strong>: EV = (Win Rate × Avg Win) − (Loss Rate × Avg Loss). Positive EV = profitable strategy regardless of win rate alone."
  - "<strong>Never take below 1:2 setups</strong> unless win rate exceeds 60%. A 1:1 setup at 55% win rate barely breaks even after commissions and slippage."
  - "Cluenex displays financial health, sentiment, and valuation data for each stock — use these to assess the probability that price reaches your target, directly informing the reward side of the ratio."
layout: base.njk
permalink: /learn/portfolio-management/risk-reward-ratio/
---

## Definition

<div class="def-box">
<p class="definition-text">
<dfn id="risk-reward-def"><strong>Risk-Reward Ratio (RR)</strong></dfn> measures the potential profit of a trade relative to its potential loss, calculated as (Target Price − Entry Price) ÷ (Entry Price − Stop Loss Price), used to determine whether a trade's upside justifies its downside risk.
</p>
<div class="def-source">Source: Schwager, J. (1989). <em>Market Wizards.</em></div>
</div>

Risk-reward ratio separates profitable traders from unprofitable ones more than win rate does. A trader with a 40% win rate and 1:3 RR outperforms a trader with a 60% win rate and 1:1 RR. The math of compounding rewards high RR setups even when right less than half the time.

## How to Calculate Risk-Reward

**Formula:**

Risk-Reward = (Target Price − Entry Price) ÷ (Entry Price − Stop Loss Price)

**Example:**
- Entry: $100
- Stop Loss: $95 (Risk = $5 per share)
- Target: $115 (Reward = $15 per share)
- RR = $15 ÷ $5 = 3.0 → expressed as **1:3**

**Dollar amounts (100 shares):**
- Risk: $500
- Reward: $1,500
- RR: 1:3

## The Math That Makes 1:3 the Baseline

The critical insight: risk-reward ratio determines the minimum win rate needed to be profitable.

**Break-Even Win Rate = 1 ÷ (1 + RR)**

| RR Ratio | Break-Even Win Rate | Reality Check |
|----------|--------------------|-|
| **1:1** | 50.0% | Barely breaks even at 50%; loses to commissions |
| **1:1.5** | 40.0% | Need 40%+ win rate |
| **1:2** | 33.3% | Profitable at 1 win per 3 trades |
| **1:3** | 25.0% | Profitable at 1 win per 4 trades |
| **1:4** | 20.0% | Profitable at 1 win per 5 trades |
| **1:5** | 16.7% | Profitable at 1 win per 6 trades |

Most swing trading strategies achieve 40–55% win rates. At 40% win rate + 1:3 RR:

**Expected Value = (0.40 × $300) − (0.60 × $100) = $120 − $60 = +$60 per $100 risked**

The same trader with 1:1 RR at 40% win rate: (0.40 × $100) − (0.60 × $100) = −$20. Net loser.

## Expected Value Framework

Expected Value (EV) combines win rate and RR into a single profitability metric:

**EV = (Win Rate × Avg Win) − (Loss Rate × Avg Loss)**

**Scenario comparisons (per $100 risked):**

<div class="tbl-wrap">
<table>
<thead>
<tr><th>Win Rate</th><th>RR Ratio</th><th>Avg Win</th><th>Avg Loss</th><th>EV per Trade</th><th>Verdict</th></tr>
</thead>
<tbody>
<tr><td>60%</td><td>1:1</td><td>$100</td><td>$100</td><td>+$20</td><td>✅ Slight edge</td></tr>
<tr><td>50%</td><td>1:1</td><td>$100</td><td>$100</td><td>$0</td><td>❌ Break-even (loses to fees)</td></tr>
<tr><td>40%</td><td>1:2</td><td>$200</td><td>$100</td><td>+$20</td><td>✅ Slight edge</td></tr>
<tr><td>40%</td><td>1:3</td><td>$300</td><td>$100</td><td>+$60</td><td>✅ Good edge</td></tr>
<tr><td>35%</td><td>1:3</td><td>$300</td><td>$100</td><td>+$40</td><td>✅ Profitable</td></tr>
<tr><td>30%</td><td>1:4</td><td>$400</td><td>$100</td><td>+$50</td><td>✅ Strong edge</td></tr>
<tr><td>55%</td><td>1:0.8</td><td>$80</td><td>$100</td><td>−$1</td><td>❌ Negative EV</td></tr>
</tbody>
</table>
</div>

## How to Set Realistic Targets (Reward Side)

Target placement is where most traders undermine their RR ratio by taking profits too early.

**Target Setting Methods:**

**1. Next Key Resistance Level**
Measure distance from entry to the next major resistance zone. If resistance is 15% above and stop is 5% below, RR = 3.0.

**2. Fibonacci Extensions**
Use 1.618 or 2.618 Fibonacci extensions from the prior swing as targets. Common in breakout setups.

**3. Fixed Multiple of ATR**
Target = Entry + (ATR × 3.0 or 4.0). If ATR = $5 and stop = ATR × 1.5 ($7.50 below entry), target = ATR × 3.0 ($15 above entry) = 1:2 RR.

**4. Prior Swing High**
In uptrends, target the prior swing high. Simple and technically justified.

## Practical RR Checklist Before Taking a Trade

Before entering any trade, confirm:

1. **Define entry** — exact price or trigger condition
2. **Define stop** — ATR-based or swing low placement
3. **Calculate risk per share** — Entry − Stop
4. **Identify target** — resistance, Fibonacci extension, or ATR multiple
5. **Calculate RR** — (Target − Entry) ÷ Risk per Share
6. **Check: RR ≥ 2.0?** — If not, skip the trade
7. **Check: Does target have a technical reason?** — Resistance, prior swing high, etc.

## Common Mistakes

<div class="callout callout-red">
<div class="callout-label">✗ Mistake 1</div>
<p class="callout-text"><strong>"I have a 70% win rate so I don't need high RR."</strong><br>
70% win rate sounds impressive until you realize it requires precision that degrades in adverse conditions. A 70% win rate with 1:0.5 RR (risking $2 to make $1) produces: EV = (0.70 × $1) − (0.30 × $2) = $0.10. Barely positive. One bad streak destroys the edge. High RR creates a buffer for win rate deterioration.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">✗ Mistake 2</div>
<p class="callout-text"><strong>"I cut profits early to lock in gains."</strong><br>
Premature exits destroy RR. If the planned target is $15 gain but you exit at $7, you've converted a 1:3 setup into 1:1.4 — requiring 42% win rate instead of 25% to stay profitable. Let winning trades reach their planned targets.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">✗ Mistake 3</div>
<p class="callout-text"><strong>"My target is wherever it goes — I'll figure it out."</strong><br>
Without a predefined target, RR cannot be calculated before entry. You end up making emotional exits at arbitrary prices. Define the target before the trade or skip it.</p>
</div>

## Example: 1:3 RR Trade on MSFT

<div class="trade-log">
<div class="tl-header">
<span class="tl-title">Case Study: 1:3 Risk-Reward Setup</span>
<span class="tl-ticker">MSFT · Breakout Setup</span>
</div>
<table>
<thead>
<tr><th>Variable</th><th>Value</th><th>Reasoning</th></tr>
</thead>
<tbody>
<tr><td>Entry</td><td data-price="420.00">$420.00</td><td>Break above resistance at $418</td></tr>
<tr><td>Stop Loss</td><td data-price="406.50">$406.50</td><td>Below swing low ($407) − 0.5%</td></tr>
<tr><td>Risk per Share</td><td data-price="13.50">$13.50</td><td>$420 − $406.50</td></tr>
<tr><td>Target</td><td data-price="460.50">$460.50</td><td>Prior swing high resistance</td></tr>
<tr><td>Reward per Share</td><td data-price="40.50">$40.50</td><td>$460.50 − $420</td></tr>
<tr><td>RR Ratio</td><td>1:3</td><td>$40.50 ÷ $13.50 = 3.0</td></tr>
<tr><td>Win Needed to Profit</td><td>25%</td><td>1 ÷ (1+3) = 25%</td></tr>
</tbody>
</table>
</div>

<div class="callout callout-teal">
<div class="callout-label">Key Insight</div>
<p class="callout-text">This MSFT setup requires only a 25% win rate to be profitable over many trades. If your MSFT breakout setups win 45% of the time, EV = (0.45 × $40.50) − (0.55 × $13.50) = $18.23 − $7.43 = +$10.80 per share. On a 100-share position: +$1,080 expected value per trade taken. That is why 1:3 is the baseline — it creates a large positive EV buffer even with a below-50% win rate.</p>
</div>

## How Cluenex Supports RR Analysis

Cluenex displays sentiment scores and valuation data for every covered stock — these signals inform the probability assessment that underpins the reward side of the ratio. A stock with strong bullish short-term sentiment and a low valuation relative to fundamentals has a higher probability of reaching an upside target, supporting the reward assumption in the RR calculation. Cluenex's financial health and growth metrics further contextualize whether a company's fundamentals support the thesis duration needed for the trade to reach its target.

## Frequently Asked Questions

- **Is 1:3 always required for every trade?**
  No — but below 1:2 should be avoided unless your documented win rate exceeds 50%. Some professional scalpers use 1:1.5 RR with 65%+ win rates. The key is matching RR to your measured win rate, not following a rule blindly.

- **How does RR affect position sizing?**
  RR is separate from position sizing. Position sizing determines dollar risk per trade; RR determines whether the trade is worth taking. Calculate RR first (is this a good setup?) then position size (how much to risk on it).

- **Should RR be calculated in % or $?**
  Both work. % RR: Entry $100, stop $95 (−5%), target $115 (+15%) = 1:3. $ RR: $5 risk, $15 reward = 1:3. The ratio is the same regardless of unit.

- **What if my target keeps getting hit but price reverses after?**
  If targets are consistently right but price goes further after your exit, you are using targets that are too conservative. Extend targets to next resistance levels or use trailing stops instead of fixed targets to capture more of trending moves.

- **Can I use RR for long-term investing?**
  Yes. In long-term investing, RR = (Expected 12-month upside based on fair value) ÷ (Maximum tolerated drawdown). A stock worth $200 (by DCF) trading at $120 with support at $100 has a 1:4 RR: risk $20, reward $80.

## Related Concepts

- [Position Sizing](/learn/portfolio-management/position-sizing/) — Determines dollar amount to risk at each RR level
- [Stop Loss Methods](/learn/portfolio-management/stop-loss-methods/) — Defines the risk side of the RR equation
- [Drawdown Analysis](/learn/portfolio-management/drawdown-maximum-drawdown/) — Shows consequences of ignoring RR over many trades
- [Cut Losses vs Hold](/learn/portfolio-management/cut-losses-vs-hold/) — Decision framework that uses RR as a trigger for exits
