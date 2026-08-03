---
title: "Backtesting a Seasonal Trade: Why 'Everyone Knows' Setups Fail"
description: "Seasonal trades built on known events rarely survive testing. Buying Home Depot before a major hurricane returned a 2.7% median over five days, but 36% of those trades lost money."
excerpt: "A trade built on a recurring, calendared event has a structural problem: everyone can see the event coming, so the expectation is already priced. The Home Depot hurricane trade is the clean case — a real median gain, a loss rate above one in three, and a sample too small to distinguish the edge from noise once costs are subtracted."
keywords:
  - backtesting
  - seasonal trading
  - efficient market hypothesis
  - hurricane stocks
  - data mining bias
  - hit rate
  - transaction costs
  - trading strategy testing
category: "Technical Analysis"
breadcrumbs:
  - "Education"
author: "Cluenex"
date: 2026-08-03
dateModified: 2026-08-03
readingTime: 8
keyTakeaways:
  - "<strong>Backtesting</strong> is applying a mechanical rule to historical price data to measure what it would have returned, replacing a plausible narrative with a distribution of outcomes."
  - "Anticipated, calendared events are priced in advance. A stock reprices when expectations change, not when the expected event occurs, so a trade based on public knowledge of a recurring event has no informational edge."
  - "Kensho data on the hurricane trade: buying Home Depot before a large hurricane and selling five days later produced a median return of <data value=\"2.7\">2.7%</data>, while <data value=\"36\">36%</data> of such trades since <data value=\"1992\">1992</data> were negative and <data value=\"20\">20%</data> underperformed the S&P 500."
  - "A median return is not a strategy result. Hit rate, drawdown distribution, sample size, and transaction costs determine whether an edge survives implementation."
  - "The three errors that inflate backtest results are look-ahead bias, survivorship bias, and multiple testing — searching enough date pairs guarantees some will look profitable by chance."
  - "Cluenex builds its short-term and long-term prediction scores from company-level inputs — financials, valuation, moat, sentiment, insider and congressional activity — rather than from calendar rules."
layout: base.njk
permalink: /learn/technical-analysis/backtesting-seasonal-trades/
---

## Definition

<div class="def-box">
<p class="definition-text">
<dfn id="backtest-def"><strong>Backtesting</strong></dfn> is the process of applying a mechanically defined trading rule to historical market data to measure the returns, hit rate, and risk characteristics it would have produced, before the rule is deployed with capital.
</p>
<div class="def-source">Source: standard methodology in quantitative finance; see also SEC guidance on evaluating performance claims.</div>
</div>

A trading hypothesis has two forms. As a narrative — "hurricanes damage homes, damaged homes need repairs, repairs mean higher hardware retailer sales, higher sales mean a higher share price" — every link is plausible and the whole thing is unfalsifiable. As a rule — "buy the day before a Category 3 or greater landfall, sell five trading days later" — it produces a specific number for every historical instance.

The narrative and the rule frequently disagree. When they do, the rule is the evidence.

## Why Anticipated Events Are Already Priced

A share price is a claim on expected future cash flows. It moves when expectations change, not when the expected thing happens.

Atlantic hurricane season runs from June 1 to November 30 every year. NOAA publishes seasonal forecasts in May. Landfall probabilities are modeled days in advance. Every institutional participant knows that storm damage raises repair demand, and every one of them can act on that knowledge before any individual investor.

The consequence is that the price adjusts as the *expectation* forms, not when the storm arrives. By the time an event is common knowledge, positioning has already occurred. What moves the price at that point is the difference between the outcome and what was expected — and the direction of that surprise is unpredictable by construction.

This is the practical content of the efficient market hypothesis in its semi-strong form: publicly available information is already reflected in prices. The claim is not that markets price everything correctly. It is that widely known information does not, on its own, produce an edge, because acting on it requires someone to be systematically slower than you at reading the same forecast.

## What the Hurricane Data Actually Shows

The trade has been tested. Analysis by data analytics firm Kensho, reported by CNBC, examined buying Home Depot ahead of a large hurricane and selling five days later:

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Metric</th><th>Result</th><th>Interpretation</th></tr>
</thead>
<tbody>
<tr><td>Median return, 5 days</td><td>2.7%</td><td>Positive and statistically meaningful vs. baseline</td></tr>
<tr><td>Share of trades negative</td><td>36%</td><td>More than one in three lost money outright</td></tr>
<tr><td>Share underperforming S&P 500</td><td>20%</td><td>One in five lost to simply holding the index</td></tr>
<tr><td>Sample period</td><td>Since 1992</td><td>Limited to large hurricanes, so few observations per decade</td></tr>
</tbody>
</table>
</div>

The result is more interesting than either "it works" or "it doesn't." The median gain is real and statistically distinguishable from Home Depot's ordinary five-day return. A tendency exists.

The tendency does not survive translation into a strategy, for four reasons.

**Hit rate.** A 36% loss rate means the trade fails more than once in three attempts. Position sizing for a strategy that loses a third of the time requires small positions, which shrinks the absolute return the 2.7% median produces.

**Benchmark comparison.** Underperforming the S&P 500 one time in five means the relevant comparison is not "did I make money" but "did I beat doing nothing." A fifth of the time, the answer is no.

**Sample size.** Large hurricanes are infrequent. A sample built from major landfalls since 1992 contains few observations, and a median computed from few observations has wide confidence intervals. Distinguishing a genuine 2.7% edge from a noisy zero requires more data than the phenomenon generates.

**Costs.** Spread, commission where applicable, and short-term capital gains treatment at ordinary income rates all subtract from the gross figure. A 2.7% median gross return realised a handful of times per decade is a thin margin to absorb them.

Separately, the trade requires forecasting landfall severity and location correctly, in advance, better than the market — which is a second prediction problem the backtest does not measure at all.

## How to Backtest a Rule Honestly

**1. Define the rule before looking at results.** Entry condition, exit condition, position size, and universe, all specified in advance. A rule adjusted after seeing the returns is no longer being tested.

**2. Report the full distribution, not the average.** Hit rate, median, worst single outcome, and the drawdown path. An average conceals whether the return came from many small gains or one enormous outlier — and if it is the outlier, the strategy is a bet on that event recurring.

**3. Benchmark against holding the asset and holding the index.** A rule that returns 8% annually is a failure if buying and holding the same stock returned 12%. The comparison must be against the alternatives actually available.

**4. Subtract realistic costs.** Bid-ask spread, commission, slippage on the size actually traded, and the tax treatment of short holding periods. Many published edges are smaller than the round-trip cost of capturing them.

**5. Count how many rules you tested.** Testing twenty date pairs and reporting the best one is not a finding. At conventional significance thresholds, one in twenty random rules will appear to work. Report the search, not just the winner.

**6. Hold out data the rule never saw.** Fit on one period, test on another. A rule that works in-sample and fails out-of-sample was fitted to noise, and this is the most common failure in retail strategy development.

## Common Mistakes and Misconceptions

**"A logical mechanism means the trade should work."** Causal plausibility and profitability are independent. The mechanism can be entirely real — hurricanes do increase repair spending — while the price impact is anticipated and already reflected before the trade is entered.

**"The average return was positive, so the strategy works."** Averages hide the distribution. A 2.7% median with a 36% loss rate is a different proposition from a 2.7% median with a 90% hit rate. Position sizing and psychological sustainability depend on the distribution, not the central tendency.

**"More historical data makes the result more reliable."** More data helps only if the observations are independent and the rule was specified in advance. Sixteen years of a rule discovered by searching sixteen years of data is not sixteen years of evidence.

**"If it worked historically, it will keep working."** Documented patterns attract capital, and capital arbitrages the pattern away. The academic literature on calendar anomalies shows repeatedly that effects shrink or vanish after publication.

**"Backtesting is only for professionals."** The mechanical parts — specifying the rule, pulling historical prices, computing returns for each instance — require a spreadsheet and public price data. The discipline required is in not adjusting the rule after seeing results.

## Example: Rewriting the Trade as a Testable Rule

The narrative version: "Buy home improvement retailers before hurricane season."

That statement cannot be tested, because it specifies neither an entry date nor an exit date nor a condition. Making it testable requires decisions that expose the problem.

**Version A — calendar-based.** Buy June 1, sell November 30, every year. This makes no use of storm information at all. It is a six-month holding period covering roughly half the year, and its result is dominated by whatever the broad market did during those months, not by hurricanes. Any positive result is a market beta result mislabeled as a weather strategy.

**Version B — event-based.** Buy the day before a Category 3 or greater landfall is forecast, sell five trading days later. This is the Kensho formulation, and it produces the 2.7% median with the 36% loss rate. It also requires knowing landfall category and location in advance — a forecast the market has equal access to.

**Version C — surprise-based.** Buy only when actual damage exceeds the pre-storm consensus estimate. This is the version with a theoretical edge, because it trades the surprise rather than the expectation. It is also unimplementable: damage estimates are not published in a form that permits a same-day comparison, and by the time they are, the price has moved.

The progression is the useful part. The only version with a defensible mechanism is the one that cannot be executed. The executable versions either measure something other than hurricanes or produce an edge too thin and too infrequent to survive costs.

This is the general shape of "everyone knows" trades. Written precisely enough to test, they resolve into a market-return proxy, an already-priced expectation, or a rule requiring information nobody has in time.

<div class="callout callout-teal">
<div class="callout-label">Write the Rule First</div>
<p class="callout-text">Before testing any market hunch, write it as an instruction a stranger could follow with no judgment: exact entry, exact exit, exact size. If it cannot be written that way, it cannot be tested — and an untested rule is a story about the market, not a description of it.</p>
</div>

## How Cluenex Approaches Prediction

Cluenex generates short-term and long-term prediction scores for the top 1,000+ US-listed stocks from company-level inputs: financial statement data, discounted cash flow and owner earnings valuation, moat durability, sentiment, earnings timing, and insider and congressional trading activity.

The distinction from a seasonal rule is what the inputs represent. A calendar rule assumes a date carries information. Company-level inputs measure conditions that change as the business changes — a valuation gap, a margin trend, a filed insider purchase — and can update when those conditions do.

The limitation applies to both approaches equally. Any model built on historical relationships is exposed to those relationships changing, and any scoring system produces a distribution rather than a prediction. The appropriate use of a score is the same as the appropriate use of a backtest: as an input to sizing and expectation, not as a claim about a specific outcome.

## Frequently Asked Questions

- **What is backtesting?**
  Backtesting applies a mechanically defined trading rule to historical market data to measure what it would have returned. It converts a plausible narrative into a distribution of outcomes with a measurable hit rate, drawdown profile, and comparison against alternatives.

- **Does buying Home Depot before a hurricane work?**
  Partially, and not enough to trade. Kensho data found a 2.7% median return from buying before a large hurricane and selling five days later, but 36% of those trades were negative and 20% underperformed the S&P 500 since 1992. The edge is real in the median and thin relative to costs, sample size, and the forecasting required.

- **Why are widely known events already priced in?**
  Because prices reflect expected future cash flows, and expectations form before the event. Hurricane season dates and seasonal forecasts are public, so positioning occurs in advance. What moves the price at the event is the gap between outcome and expectation, and that gap is not predictable from the event's occurrence.

- **What is the difference between a median return and a strategy return?**
  A median describes the typical single outcome. A strategy return depends additionally on hit rate, position size, the worst-case path, frequency of opportunity, and costs. A positive median with a high loss rate and few annual opportunities can produce a negative net result.

- **What is data mining bias in backtesting?**
  It is the inflation of apparent results caused by testing many rules and reporting the best. At a 5% significance threshold, one in twenty random rules will appear profitable by chance. Reporting how many variants were tested is what makes a single positive result interpretable.

- **What is look-ahead bias?**
  Using information in a backtest that would not have been available at the time of the trade — such as restated financials, index constituents known only later, or a closing price used to trigger a trade executed at that same close. It systematically inflates results.

- **How many observations does a backtest need?**
  Enough that the result is distinguishable from noise, which depends on effect size and variance. A strategy triggering a few times per decade rarely accumulates enough independent observations to establish significance, regardless of how many calendar years the data spans.

- **Do seasonal patterns in stocks exist at all?**
  Some calendar effects have been documented in academic literature, including turn-of-the-month and January small-cap effects. Most have weakened substantially after publication, which is consistent with capital arbitraging documented patterns. A pattern's historical existence does not establish its persistence.

## Related Concepts

- [Volume Analysis Explained](/learn/technical-analysis/volume-analysis/) — testing whether volume confirms a price move rather than assuming it
- [Breakout vs Fakeout: How to Identify Real Breakouts](/learn/technical-analysis/breakout-vs-fakeout/) — a rule-based setup with a measurable hit rate
- [What is the Risk-Reward Ratio](/learn/portfolio-management/risk-reward-ratio/) — converting a hit rate into a position sizing decision
- [How to Trade Around FOMC Meetings: Historical Patterns and Volatility](/learn/markets/trading-fomc-meetings/) — another calendared event, and what is and is not priced
- [How to Set Stop Losses: Fixed, Trailing, and ATR-Based Methods](/learn/portfolio-management/stop-loss-methods/) — defining the exit that a testable rule requires
