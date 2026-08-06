---
title: "Pension or Lump Sum: How to Run the Break-Even Math"
description: "Dividing a lump sum offer by the annual pension payment gives the break-even horizon in years. Interest rates, not employer generosity, decide how large the offer is."
excerpt: "A pension annuity transfers longevity and market risk to the plan sponsor; a lump sum transfers both to the retiree. Dividing the lump sum by the annual pension payment produces a rough break-even horizon in years, and lump sum size moves inversely with interest rates because future payments are discounted to present value."
keywords:
  - pension vs lump sum
  - defined benefit plan
  - lump sum break-even
  - sequence of returns risk
  - PBGC guarantee
  - present value discount rate
  - retirement income
  - annuity option
category: "Portfolio Management"
breadcrumbs:
  - "Education"
author: "Cluenex"
date: 2026-08-05
dateModified: 2026-08-05
readingTime: 9
keyTakeaways:
  - "A <strong>defined benefit pension</strong> pays a fixed monthly amount for life; a <strong>lump sum</strong> is the present value of those future payments, paid once, after which the retiree carries all investment and longevity risk."
  - "Break-even horizon = lump sum ÷ annual pension payment. A <data value=\"350000\">$350,000</data> offer against a <data value=\"24000\">$24,000</data> annual pension breaks even at roughly <data value=\"14.6\">14.6</data> years before any investment return."
  - "Lump sum size moves <strong>inversely</strong> with interest rates. Higher discount rates shrink the present value of future payments, so identical pensions produce smaller offers when rates rise."
  - "<strong>Sequence of returns risk</strong> means two retirees can earn the same average return over 20 years and end with very different outcomes depending on whether the bad years came first."
  - "The PBGC insures private single-employer plans up to a statutory cap. For plans failing in 2026, the maximum at age <data value=\"65\">65</data> is <data value=\"7789.77\">$7,789.77</data> per month as a straight-life annuity — about <data value=\"93477\">$93,477</data> a year."
  - "Cluenex AI evaluates financial health, valuation and moat across the top 1,000+ US-listed stocks, relevant to anyone who takes the lump sum and becomes their own portfolio manager."
layout: base.njk
permalink: /learn/portfolio-management/pension-vs-lump-sum/
---

## Definition

<div class="def-box">
<p class="definition-text">
The <dfn id="pension-lump-sum-def"><strong>pension-versus-lump-sum decision</strong></dfn> is the choice a defined benefit plan participant makes between a guaranteed monthly payment for life and a single present-value payout, and it is fundamentally a decision about who carries longevity risk and investment risk — the plan sponsor or the retiree.
</p>
<div class="def-source">Source: Pension Benefit Guaranty Corporation; IRC §417(e)(3) (applicable interest rate and mortality assumptions for lump sum calculation).</div>
</div>

The annuity option keeps the risk with the plan. If markets fall the year after retirement, that is the sponsor's problem. If the retiree lives to 98, the checks keep arriving. The lump sum reverses both: the retiree becomes the fund manager and bears the consequence of outliving the money.

## How the Lump Sum Is Calculated

The lump sum is not an arbitrary number and it is not a measure of employer generosity. It is the **present value** of the stream of future monthly payments — the amount that, invested at an assumed rate of return, would fund those payments over the participant's expected lifetime.

Two inputs drive it: an **applicable interest rate** used to discount future payments to today's dollars, and a **mortality table** governing how long payments are assumed to continue. Both are prescribed under IRC §417(e)(3) for qualified plans.

The interest rate relationship is the part most retirees miss:

- **Rates rise → lump sums shrink.** A higher discount rate means less money is needed today to produce the same future stream.
- **Rates fall → lump sums grow.** A lower discount rate means more money is needed today to produce the same stream.

This is why the same pension can generate materially different offers in different years with no change in the employer's finances or the participant's service record. The movement is a bond-market phenomenon.

<div class="callout callout-teal">
<div class="callout-label">The question to ask the administrator</div>
<p class="callout-text">Request the specific interest rate assumption and mortality table used to calculate your offer, in writing. Compare that rate to current long-term bond yields. A lump sum calculated at a high discount rate is a smaller payout for the same underlying benefit.</p>
</div>

## The Break-Even Calculation

The arithmetic that reframes the decision takes one division.

```
Break-even years = Lump sum offer ÷ Annual pension payment
```

A $350,000 offer against a $2,000 monthly pension ($24,000 a year) gives 14.6 years. Past roughly age 80 for someone retiring at 65, the annuity has paid out more in nominal dollars than the lump sum — assuming the plan keeps its promise.

This is a floor, not a complete answer. It ignores investment returns on the lump sum, which push the break-even point later, and it ignores inflation, which erodes an unindexed monthly payment and pushes the break-even point earlier. Most private-sector defined benefit pensions in the US are not indexed to inflation, which means a fixed $2,000 monthly payment buys measurably less after 20 years.

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Factor</th><th>Favors the annuity</th><th>Favors the lump sum</th></tr>
</thead>
<tbody>
<tr><td>Life expectancy</td><td>Family longevity, good health</td><td>Health conditions shortening expected lifespan</td></tr>
<tr><td>Other assets</td><td>Little else to fall back on</td><td>Substantial 401(k), IRA or taxable savings already in place</td></tr>
<tr><td>Interest rate environment</td><td>Rates high — offers are compressed</td><td>Rates low — offers are inflated</td></tr>
<tr><td>Inflation protection</td><td>Plan provides a COLA</td><td>No COLA; fixed payment erodes over decades</td></tr>
<tr><td>Estate goals</td><td>Not a priority</td><td>Leaving remaining balance to heirs matters</td></tr>
<tr><td>Plan security</td><td>Well-funded plan, benefit within PBGC cap</td><td>Benefit exceeds the PBGC guarantee limit</td></tr>
<tr><td>Risk tolerance</td><td>Low — wants certainty</td><td>High — comfortable managing a portfolio for 25+ years</td></tr>
</tbody>
</table>
</div>

## Sequence of Returns Risk

Taking the lump sum introduces a risk that averages conceal.

Two retirees invest identical amounts and earn identical *average* annual returns over 20 years while withdrawing the same income each year. The one who experiences a large decline in years one and two can run out of money while the one who experiences the same decline in year 18 does not. Withdrawals during a drawdown sell more shares to produce the same income, permanently reducing the base that must recover.

The pension option removes this risk from the individual entirely — but does not eliminate it. It transfers it to the plan sponsor and, if the sponsor fails, to the **Pension Benefit Guaranty Corporation**. PBGC coverage of private single-employer plans is real but capped. For plans terminating in 2026, the maximum guarantee at age 65 is $7,789.77 per month as a straight-life annuity — roughly $93,477 annually — and $7,010.79 monthly under a joint-and-50%-survivor annuity. The 2026 limits are 4.82% above the 2025 figures. Guarantees are reduced for benefits starting before age 65 and for certain benefit types.

For a participant whose promised benefit sits comfortably below the cap, sponsor failure is a manageable risk. For one whose benefit exceeds it, the gap is uninsured.

## How to Decide in Practice

**1. Run the break-even division before any meeting.** Lump sum divided by annual pension payment. Knowing that number changes what questions get asked.

**2. Get the discount rate and mortality assumptions in writing.** These determine the size of the offer. Compare the rate to prevailing long-term bond yields at the time of the offer.

**3. Look up your PBGC coverage against your actual benefit.** Compare your promised monthly amount to the 2026 maximum guarantee table for your starting age and benefit form. Determine how much of the benefit is uninsured.

**4. Test the lump sum against a realistic withdrawal.** Ask what annual return a conservative stock-and-bond mix would need to match the pension's monthly payment across 20, 25 and 30 years without depleting the balance. If the required return is unrealistic for a portfolio of that risk level, the annuity is doing work the lump sum cannot replicate.

**5. Check whether the plan offers a partial election.** Some plans permit taking part of the benefit as an annuity and part as a lump sum, which hedges rather than choosing.

**6. Use a fee-only advisor.** An advisor compensated by assets under management has a direct financial interest in the lump sum outcome. Fee-only, flat-rate advice removes that conflict.

**7. Confirm the rollover mechanics if taking the lump sum.** A lump sum should move by direct trustee-to-trustee rollover into an IRA. Taking possession personally triggers mandatory 20% federal withholding on eligible rollover distributions from a qualified plan.

## Common Mistakes and Misconceptions

**"A bigger lump sum offer means the company is being generous."** The offer size is driven mechanically by the discount rate and mortality assumptions prescribed under IRC §417(e)(3). An unusually large or small offer usually reflects where interest rates sat when the calculation was run.

**"The lump sum is obviously better because I can invest it."** That assumes the portfolio earns enough, consistently enough, across a retirement of unknown length. Sequence of returns risk means the average return is not sufficient information — the order matters.

**"The pension is guaranteed, so it's risk-free."** It carries sponsor risk. PBGC insurance backstops private single-employer plans, but only up to the statutory maximum, which for 2026 is $7,789.77 monthly at age 65 as a straight-life annuity. Benefits above that are not fully protected.

**"I'll decide when I retire."** Lump sum windows are typically time-limited, frequently around 60 days, and the offer is recalculated when rates move. The decision often has a deadline and no reversal.

**"Inflation doesn't matter — the payment is guaranteed."** A guaranteed nominal payment is not a guaranteed real one. Most private-sector US pensions have no cost-of-living adjustment, so a fixed monthly payment loses purchasing power every year of a retirement that may last three decades.

## Example: $350,000 or $2,000 a Month

A 65-year-old is offered $350,000 or $2,000 monthly for life. The pension has no cost-of-living adjustment.

**The break-even division.** $350,000 ÷ $24,000 = 14.6 years, reached at age 79.6. Nominal payments beyond that point favor the annuity.

**Adjusting for investment return.** If the lump sum is invested and earns a real return after inflation, the break-even point extends. If it earns nothing in real terms — the outcome if it sits in cash — 14.6 years is the answer.

**Adjusting for inflation.** At 2.5% annual inflation, $2,000 a month in year one buys roughly $1,220 of year-one goods by year 25. The annuity's later payments are worth materially less than its early ones, which moves the effective break-even earlier than the raw division suggests.

**Adjusting for PBGC coverage.** A $2,000 monthly benefit sits far below the 2026 maximum guarantee of $7,789.77 at age 65, so sponsor failure risk is largely insured. That materially strengthens the annuity case for this specific participant.

**The decision this points to.** For a retiree in good health with family longevity, no other guaranteed income beyond Social Security, and a benefit fully inside the PBGC cap, the annuity carries the stronger case. For a retiree with health conditions shortening expected lifespan, substantial other retirement assets, and a goal of leaving something to heirs, the lump sum does. The arithmetic does not choose; it defines what is actually being traded.

## How Cluenex Uses This

Cluenex does not offer pension advice or actuarial calculations. The connection is what happens after a lump sum is taken.

A retiree who elects the lump sum becomes responsible for managing 25 or more years of income from a portfolio, which makes holding quality a far higher-stakes question than it was during accumulation. Cluenex AI evaluates financial health, valuation — including discounted cash flow and owner earnings estimates — moat characteristics, sentiment, and dividend context across the top 1,000+ US-listed stocks.

For a portfolio expected to produce income through an entire retirement, the relevant screen is durability rather than upside: whether a holding's cash generation supports its distribution, and whether its competitive position is intact. That is the analysis a monthly pension check makes unnecessary and a lump sum makes essential.

## Frequently Asked Questions

- **How do I calculate the break-even point on a pension lump sum?**
  Divide the lump sum offer by the annual pension payment. A $350,000 offer against $24,000 a year produces 14.6 years. That figure ignores investment returns, which extend it, and inflation erosion of an unindexed payment, which shortens it — but it establishes the baseline the rest of the analysis adjusts.

- **Why did my lump sum offer change from last year?**
  Lump sums are the present value of future payments, discounted using an applicable interest rate prescribed under IRC §417(e)(3). When rates rise, less money is needed today to fund the same future stream, so offers shrink. When rates fall, offers grow. The change usually reflects the bond market rather than any decision by the employer.

- **What happens to my pension if my former employer goes bankrupt?**
  For a private single-employer plan, the Pension Benefit Guaranty Corporation takes over payments up to a statutory maximum. For plans failing in 2026, that maximum at age 65 is $7,789.77 monthly as a straight-life annuity. Guarantees are lower for benefits starting before 65 and for certain benefit forms, and any promised benefit above the cap is not fully protected.

- **Is the lump sum taxable when I receive it?**
  It is taxable as ordinary income if taken as cash, and eligible rollover distributions from a qualified plan paid directly to the participant are subject to mandatory 20% federal withholding. Moving it by direct trustee-to-trustee rollover into an IRA avoids both the immediate tax and the withholding.

- **What is sequence of returns risk?**
  It is the risk that the order of investment returns, rather than their average, determines whether a portfolio survives. Two retirees earning identical average returns over 20 years while withdrawing income can end with very different balances if one experiences a large decline early. Withdrawals during a drawdown sell more shares for the same income, permanently shrinking the base that must recover.

- **Can I take part as a pension and part as a lump sum?**
  Some plans permit a partial election, which splits the risk rather than concentrating it. Whether it is available depends entirely on the plan document, so it is worth asking the administrator directly rather than assuming the choice is binary.

- **Does my health change the right answer?**
  Materially. The break-even calculation is a bet on lifespan. A participant with a condition that shortens life expectancy is unlikely to reach a 15-year break-even point, which strengthens the lump sum case and preserves the remaining balance for heirs. A participant with strong family longevity faces the opposite calculation.

## Related Concepts

- [Early Retirement Math: Savings Rate, Compounding, and the 4% Rule](/learn/portfolio-management/early-retirement-math/) — sustainable withdrawal rates for a self-managed lump sum
- [How to Consolidate Old 401(k) Accounts](/learn/portfolio-management/consolidating-old-401k-accounts/) — the direct rollover mechanics a lump sum election requires
- [What is a Drawdown: How to Calculate Maximum Drawdown of a Portfolio](/learn/portfolio-management/drawdown-maximum-drawdown/) — measuring the risk sequence of returns creates
- [How to Preserve Capital When Markets Get Scary](/learn/portfolio-management/capital-preservation-strategies/) — and what capital preservation costs in return
- [Dividend Stocks: Can They Really Build Wealth Quietly Over Time?](/learn/portfolio-management/dividend-investing-compounding/) — building income from a portfolio rather than a promise
