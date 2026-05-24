---
title: "How to Set Stop Losses: Fixed, Trailing, and ATR-Based Methods Explained"
description: "Stop losses limit maximum loss on a trade by triggering an automatic exit when price falls to a defined level. Learn fixed-percent, trailing, and ATR-based stop placement for stocks."
excerpt: "Stop loss = predetermined exit price that caps trade loss. Fixed: entry − X%. Trailing: moves up with price, locks in gains. ATR-based: entry − (ATR × 1.5–2.0) adjusts for volatility. Use ATR stops for most setups."
keywords:
  - stop loss
  - trailing stop
  - ATR stop loss
  - fixed stop loss
  - stop loss placement
  - risk management
  - stop loss strategy
category: "Portfolio Management"
breadcrumbs:
  - "Education"
author: "Cluenex"
date: 2026-05-25
dateModified: 2026-05-25
readingTime: 10
keyTakeaways:
  - "<strong>Fixed Stop Loss</strong>: Set at a fixed % below entry (e.g., 5–8%). Simple but ignores stock volatility — works best for low-volatility, slow-moving stocks."
  - "<strong>Trailing Stop</strong>: Moves up as price rises, locking in gains. Never moves down. A 10% trailing stop on a stock at $100 starts at $90; if price rises to $120, stop moves to $108."
  - "<strong>ATR-Based Stop</strong>: Stop = Entry − (14-period ATR × 1.5 or 2.0). Adjusts for each stock's actual volatility. Most accurate placement method — avoids premature stops on volatile stocks."
  - "<strong>Swing Low Stop</strong>: Stop placed below the most recent swing low or support level. Technically justified because a break below swing low invalidates the bullish thesis."
  - "Cluenex AI ingests ATR and price volatility data to calculate predicted short-term and long-term price movement — use these signals to confirm setups before placing ATR-based stops."
layout: base.njk
permalink: /learn/portfolio-management/stop-loss-methods/
---

## Definition

<div class="def-box">
<p class="definition-text">
<dfn id="stop-loss-def"><strong>A Stop Loss</strong></dfn> is a predetermined price level at which a trader exits a losing position to cap the maximum loss on the trade, functioning as a risk management tool that removes emotion from exit decisions.
</p>
<div class="def-source">Source: Elder, A. (1993). <em>Trading for a Living.</em></div>
</div>

A stop loss converts an open-ended risk (stock could fall to zero) into a defined risk (stock falls to $X, trade exits automatically). Without a stop loss, a trader is exposed to unlimited downside on every position. With one properly placed, each trade's worst-case outcome is known before entry.

## The Four Main Stop Loss Methods

### Method 1: Fixed Percentage Stop

**How it works:** Set stop at a fixed % below entry price.

**Formula:** Stop Price = Entry Price × (1 − Stop %)

**Common percentages:**
- Day traders: 0.5–1%
- Swing traders: 3–8%
- Position traders: 8–15%

**Example:**
- Entry: $100
- Fixed 5% stop: $100 × 0.95 = $95
- Maximum loss per share: $5

**Best for:** Low-volatility stocks, index ETFs (SPY, QQQ), consistent slow-movers like utility stocks.

**Weakness:** Doesn't account for volatility. A 5% stop on NVDA (ATR = $15 on $900 stock = 1.7%) may be too tight; a 5% stop on a utility stock (ATR = $0.40 on $40 stock = 1%) may be too wide.

---

### Method 2: ATR-Based Stop (Volatility-Adjusted)

**How it works:** Use the Average True Range (ATR) to set a stop that reflects the stock's actual daily volatility range, preventing premature exits on normal price swings.

**Formula:** Stop Price = Entry Price − (ATR × Multiplier)

Standard multipliers: 1.5× (tight, active traders) to 2.0× (standard) to 3.0× (wide, position traders)

**Example (AAPL, ATR₁₄ = $3.50, Entry = $185):**
- 1.5× ATR stop: $185 − ($3.50 × 1.5) = $179.75
- 2.0× ATR stop: $185 − ($3.50 × 2.0) = $178.00
- 3.0× ATR stop: $185 − ($3.50 × 3.0) = $174.50

**Best for:** Active traders, volatile stocks (tech, biotech), earnings plays.

**Strength:** Self-adjusting — tight in low-volatility environments (stop closer = less risk), wider in high-volatility environments (stop further = avoids whipsaw).

Cluenex AI ingests ATR and volatility data across covered tickers to calculate predicted short-term and long-term price movement — these price forecasts help confirm whether the ATR-based stop sits below meaningful support or merely reflects noise.

---

### Method 3: Trailing Stop

**How it works:** Stop price moves upward as the stock price rises, locking in profits. It never moves downward.

**Types:**
- **% trailing stop:** Stop = Highest price since entry × (1 − Trail %)
- **$ trailing stop:** Stop = Highest price since entry − Fixed dollar amount
- **ATR trailing stop:** Stop = Highest price since entry − (ATR × multiplier), recalculated daily

**Example (% trailing):**
- Entry: $100, 10% trailing stop
- Day 1: Price = $100, Stop = $90
- Day 5: Price = $120, Stop = $108 (locked in $8/share profit)
- Day 10: Price = $115, Stop = $108 (stop doesn't drop)
- Day 15: Price = $107.50, STOP TRIGGERED at $108 (+8% gain locked)

**Best for:** Trend-following strategies, catching extended moves, avoiding the "when do I sell?" problem.

**Weakness:** Gets stopped out during normal pullbacks in strong uptrends. A stock that rises 30% and pulls back 10% triggers a 23% trailing stop — position exits even though the trend is intact.

---

### Method 4: Swing Low / Support Stop

**How it works:** Stop placed just below the most recent swing low or a key support level. The logic: if price breaks below the swing low, the bullish setup is invalidated.

**Placement:** Stop = Swing Low − 0.5–1% (buffer to avoid false breakdowns)

**Example:**
- Stock consolidating between $95 and $105
- Support level: $95
- Entry on breakout: $106
- Stop: $94.50 (just below $95 support − 0.5%)
- Trade risk: $11.50/share

**Best for:** Technical traders using chart patterns, breakout plays, swing trading.

**Strength:** Technically justified — the stop location has a logical reason (support break = thesis invalidated).

## Stop Loss Comparison

| Method | Best For | Adjusts for Volatility | Locks in Gains | Complexity |
|--------|----------|----------------------|----------------|------------|
| **Fixed %** | Slow-moving stocks, beginners | No | No | Low |
| **ATR-Based** | Active traders, volatile stocks | Yes | No | Medium |
| **Trailing** | Trend followers | Optional | Yes | Medium |
| **Swing Low** | Technical traders | Implied | No | High |

## Stop Loss Placement Mistakes

<div class="callout callout-red">
<div class="callout-label">✗ Mistake 1</div>
<p class="callout-text"><strong>"I'll move my stop down to give the trade more room."</strong><br>
Moving a stop further away after entry increases risk without improving odds. If the trade reaches the stop, the thesis is broken. Widening stops mid-trade is how small losses become large losses. Set stops before entry and honor them.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">✗ Mistake 2</div>
<p class="callout-text"><strong>"I placed my stop at a round number ($100, $50, $200)."</strong><br>
Round numbers attract stop clusters — market makers know retail traders place stops there. Set stops 0.5–1% below round numbers, swing lows, or obvious support levels to avoid stop hunts on normal volatility spikes.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">✗ Mistake 3</div>
<p class="callout-text"><strong>"Same 5% stop on all stocks."</strong><br>
A 5% stop on a low-volatility utility stock (ATR = 0.8%) is enormously wide. A 5% stop on a high-volatility biotech (ATR = 6%) is dangerously tight. Always match stop distance to each stock's volatility using ATR.</p>
</div>

## Example: ATR Stop vs Fixed Stop on TSLA

<div class="trade-log">
<div class="tl-header">
<span class="tl-title">Case Study: Stop Placement Comparison</span>
<span class="tl-ticker">TSLA · Entry $250 · ATR₁₄ = $12.50</span>
</div>
<table>
<thead>
<tr><th>Stop Type</th><th>Stop Price</th><th>Risk/Share</th><th>Triggered by Normal Move?</th><th>Verdict</th></tr>
</thead>
<tbody>
<tr><td>Fixed 3%</td><td data-price="242.50">$242.50</td><td data-price="7.50">$7.50</td><td>Yes — TSLA moves $12.50/day avg</td><td>❌ Too tight</td></tr>
<tr><td>Fixed 5%</td><td data-price="237.50">$237.50</td><td data-price="12.50">$12.50</td><td>Maybe — 1× ATR</td><td>⚠️ Borderline</td></tr>
<tr><td>ATR × 1.5</td><td data-price="231.25">$231.25</td><td data-price="18.75">$18.75</td><td>No — 1.5× daily range</td><td>✅ Good for swing</td></tr>
<tr><td>ATR × 2.0</td><td data-price="225.00">$225.00</td><td data-price="25.00">$25.00</td><td>No — 2× daily range</td><td>✅ Good for position</td></tr>
<tr><td>Swing Low</td><td data-price="238.00">$238.00</td><td data-price="12.00">$12.00</td><td>Depends on chart</td><td>✅ If technically valid</td></tr>
</tbody>
</table>
</div>

<div class="callout callout-teal">
<div class="callout-label">Key Insight</div>
<p class="callout-text">TSLA's 14-period ATR of $12.50 means a 3% fixed stop ($7.50 below entry) sits inside the stock's average daily range — it will be triggered on a normal intraday swing before the position has any chance to work. ATR × 1.5 ($18.75 stop) clears normal volatility while still invalidating the trade if TSLA genuinely reverses. Always check ATR before placing stops on volatile names.</p>
</div>

## How Cluenex Uses Stop Loss Data

Cluenex AI ingests ATR, price volatility, and momentum indicators across covered tickers to calculate predicted short-term and long-term price movement. These signals help traders determine the strength of a move before it reaches a stop, providing context on whether a pullback toward the stop level is likely to reverse or accelerate.

## Frequently Asked Questions

- **Should I use stop-limit or stop-market orders?**
  Stop-market orders execute at the next available price after the stop is triggered — guaranteed fill, but price may gap past your stop in fast markets. Stop-limit orders set a minimum fill price — risk of no fill in fast drops. For most retail traders, stop-market orders are safer; failing to exit a losing position is worse than a slightly worse fill price.

- **What percentage stop loss is best?**
  There is no universal "best" percentage. The correct stop distance is ATR × 1.5–2.0 for the specific stock. For a stock with an ATR of $3 on a $100 price, the appropriate stop is $4.50–$6.00 below entry (4.5–6%), not a flat 5%.

- **When should I use a trailing stop?**
  Use trailing stops when a position has already moved significantly in your favor and you want to lock in gains without watching it constantly. Set trailing stops at ATR × 2 or 10–15% for swing trades, adjusting tighter as the trend matures.

- **Can stop losses be used in long-term investing?**
  Long-term investors can use loose stops (15–25% below cost basis) or thesis-based stops instead of technical stops. Exit when the fundamental reason for holding the stock changes, not on normal price volatility.

- **How do I avoid getting stopped out in pre-market or after-hours?**
  Standard stop orders execute in regular market hours only. To protect against overnight gaps, use mental stops (manual monitoring at open) or options-based hedging (protective puts) for large positions.

## Related Concepts

- [Position Sizing](/learn/portfolio-management/position-sizing/) — Uses stop distance to calculate share count
- [Risk-Reward Ratio](/learn/portfolio-management/risk-reward-ratio/) — Stop distance defines the risk side of the ratio
- [ATR (Average True Range)](/learn/technical-analysis/atr-average-true-range/) — The volatility measure used for ATR-based stops
- [Cut Losses vs Hold](/learn/portfolio-management/cut-losses-vs-hold/) — Decision framework for when to exit before the stop hits
