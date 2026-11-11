---
title: "The Day Humanity Was Supposed to Become Infinite"
published: 2026-11-13
draft: true
description: "From a 1960 demographic prediction to a Pyragogy hypothesis"
tags: [Pyragogy, Demography, Cybernetics, Adaptive Knowledge, Human-AI Collaboration]
category: Research
author: Fabrizio Terzi
bannerImage: /banner/2.webp
cover: /banner/21.webp
---

<!-- Editorial note: the source portrait was placed at public/images/Heinz_von_Foerster.jpeg by the author; converted copy at public/images/heinz-von-foerster.webp. Verify license and attribution before publication. Banner/cover are still provisional. -->

## 1. The original 1960 study


<style>
  .pyr-figure { margin: 2.35rem 0; }
  .pyr-figure .pyr-scroll { overflow-x: auto; border: 1px solid var(--primary-color-lighten); border-radius: 14px; padding: clamp(12px, 2vw, 24px); color: var(--text-color); background: var(--card-color); }
  .pyr-figure svg { display: block; width: 100%; min-width: 620px; height: auto; color: var(--text-color); overflow: visible; }
  .pyr-figure figcaption { margin-top: 0.75rem; font-size: .85rem; line-height: 1.55; color: var(--text-color); opacity: .82; }
  .pyr-figure .pyr-kicker { font: 650 12px/1.2 system-ui, sans-serif; letter-spacing: .13em; fill: var(--primary-color); }
  .pyr-figure .pyr-title { font: 650 26px/1.1 system-ui, sans-serif; fill: currentColor; }
  .pyr-figure .pyr-body { font: 450 16px/1.4 system-ui, sans-serif; fill: currentColor; }
  .pyr-figure .pyr-small { font: 450 13px/1.35 system-ui, sans-serif; fill: currentColor; opacity: .79; }
  .pyr-figure .pyr-label { font: 650 15px/1.3 system-ui, sans-serif; fill: currentColor; }
  .pyr-figure .pyr-rule { stroke: currentColor; stroke-opacity: .17; }
  .pyr-figure .pyr-accent { stroke: var(--primary-color); fill: none; }
  .pyr-figure .pyr-accent-fill { fill: var(--primary-color); }
  .pyr-figure .pyr-panel { fill: currentColor; fill-opacity: .035; stroke: currentColor; stroke-opacity: .12; }
  .pyr-math-explainer { margin: 2.15rem 0; padding: clamp(18px,3vw,30px); border: 1px solid var(--primary-color-lighten); border-left: 3px solid var(--primary-color); border-radius: 12px; background: var(--card-color); }
  .pyr-math-explainer .math-label { color: var(--primary-color); font-size: .76rem; letter-spacing: .12em; text-transform: uppercase; font-weight: 750; }
  .pyr-math-explainer + .katex-display { font-size: 1.55em; }
  .pyr-formula-shell { margin: 1.8rem 0 0; padding: 1.35rem 1rem; background: var(--card-color); border: 1px solid var(--primary-color-lighten); border-radius: 12px; }
  .pyr-formula-shell .katex-display { font-size: clamp(1.3rem,3vw,2rem); margin: .35em 0; }
  .pyr-legend { margin: .75rem 0 1.55rem; padding: .6rem 0 .6rem 1.25rem; border-left: 2px solid var(--primary-color); }
  .pyr-legend p { margin: .45rem 0; }
  @media (max-width: 640px) {
    .pyr-biblio { grid-template-columns: 1fr !important; }
    .pyr-biblio figure { max-width: 320px; }
    .pyr-figure .pyr-scroll { padding: 12px; }
    .pyr-figure svg { min-width: 610px; }
    .pyr-figure figcaption { font-size: .82rem; }
  }
</style>

<small><strong>SCIENCE · 4 NOVEMBER 1960</strong></small>

<div class="pyr-biblio" style="display:grid;grid-template-columns: minmax(0,0.85fr) minmax(0,1.15fr);gap:clamp(1rem,3vw,2rem);align-items:start;margin:1.25rem 0 2rem">
  <figure style="margin:0">
    <img src="/images/heinz-von-foerster.webp" alt="Historical portrait of Heinz von Foerster" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;object-fit:contain;border-radius:0.65rem" />
    <figcaption style="font-size:0.85rem;line-height:1.45;opacity:0.8;margin-top:0.55rem">Heinz von Foerster (1911–2002), physicist and pioneer of cybernetics. <em>Photo credit and license to be confirmed.</em></figcaption>
  </figure>
  <div>
    <h3 style="margin:0 0 1.1rem;font-size:clamp(1.35rem,2.8vw,1.85rem);line-height:1.25">Doomsday: Friday, 13 November, A.D. 2026</h3>
    <p style="opacity:.78;font-size:.94em"><em>“Judgment Day: Friday, 13 November 2026”</em></p>
    <p><strong>Authors:</strong> Heinz von Foerster, Patricia M. Mora, and Lawrence W. Amiot.</p>
    <p><strong>Journal:</strong> <em>Science</em>, vol. 132, no. 3436, pp. 1291–1295.</p>
    <p><strong>Published:</strong> 4 November 1960.</p>
    <p><strong>DOI:</strong> <a href="https://doi.org/10.1126/science.132.3436.1291">10.1126/science.132.3436.1291</a></p>
    <p><strong>PubMed:</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/13782058/">PMID 13782058</a></p>
  </div>
</div>

The paper's full title included a crucial condition: <em>“At this date human population will approach infinity if it grows as it has grown in the last two millenia.”</em> The word <strong>if</strong> matters: the singularity was a consequence of extending a historical trend, not a claim that an infinite population was physically possible.

A few days ago I checked the date. Friday, November 13, 2026. Sixty-six years earlier, three researchers had published in *Science* a title still hard to forget.

They weren't writing science fiction. They took two thousand years of censuses, fitted a hyperbolic curve, and found a singularity: a date when the human population — if everything had kept going as before — would have become infinite.

A simplified version of that pattern:

<div class="pyr-formula-shell">

$$
N(t)=\\frac{C}{t_0-t}
$$

</div>

<div class="pyr-legend">
  <p><strong>N(t)</strong> — population predicted at time <em>t</em>.</p>
  <p><strong>C</strong> — a constant fitted to the historical estimates.</p>
  <p><strong>t₀</strong> — the mathematical singularity date (13 November 2026 in the extrapolation).</p>
  <p><strong>t → t₀</strong> — the denominator tends toward zero, so the modeled population grows without bound.</p>
</div>

<figure class="pyr-figure">
  <div class="pyr-scroll">
    <svg viewBox="0 0 920 400" role="img" aria-labelledby="hyper-title hyper-desc" xmlns="http://www.w3.org/2000/svg">
      <title id="hyper-title">A hyperbolic extrapolation approaching a finite-time singularity</title>
      <desc id="hyper-desc">Conceptual mathematical illustration. A curve bends sharply upward as it approaches a dashed vertical boundary labelled 13 November 2026. These are not measured population data.</desc>
      <text x="24" y="28" class="pyr-kicker">01 / THE MATHEMATICAL LIMIT</text>
      <text x="24" y="65" class="pyr-title">A trend is not a law of nature.</text>
      <text x="24" y="93" class="pyr-small">Illustrative trajectory: reciprocal growth as time approaches t₀</text>
      <path d="M80 124V333H846" class="pyr-rule" fill="none" stroke-width="1.5"/>
      <path d="M80 287H846M80 242H846M80 197H846M80 152H846" class="pyr-rule" fill="none" stroke-width="1" stroke-dasharray="3 7"/>
      <path d="M738 122V334" class="pyr-accent" stroke-width="1.6" stroke-dasharray="6 6"/>
      <text x="738" y="358" text-anchor="middle" class="pyr-label">13 NOV 2026</text>
      <text x="738" y="376" text-anchor="middle" class="pyr-small">t₀ · model boundary</text>
      <path d="M80 325C200 322 345 318 460 307C560 296 624 272 661 240C698 209 718 168 730 125" class="pyr-accent" stroke-width="4" stroke-linecap="round" fill="none"/>
      <circle cx="460" cy="307" r="5" class="pyr-accent-fill"/>
      <circle cx="661" cy="240" r="5" class="pyr-accent-fill"/>
      <text x="463" y="289" class="pyr-small">Acceleration</text>
      <path d="M766 156H888" class="pyr-accent" stroke-width="1.5"/>
      <text x="766" y="178" class="pyr-label">Asymptote</text>
      <text x="766" y="200" class="pyr-small">not a physical event</text>
      <text x="80" y="357" class="pyr-small">Earlier t</text>
      <text x="840" y="357" class="pyr-small" text-anchor="end">Time →</text>
      <text x="44" y="228" class="pyr-small" transform="rotate(-90 44 228)" text-anchor="middle">Model output (arbitrary units)</text>
    </svg>
  </div>
  <figcaption>Conceptual reconstruction of the equation, not a chart of historical population or an exact reproduction of the 1960 fit. The vertical line marks where the mathematical model ceases to give a finite prediction.</figcaption>
</figure>
It wasn't a demonstration that infinite population was materially possible. It was the mathematical consequence of a model pushed beyond any sustainable limit. The title caught attention; the subtitle stated the condition: *if* growth continued as before.

For decades the curve stayed surprisingly close to reality. Then fertility declined, education expanded, cities transformed. The demographic transition took another path.

Today the world population stands at **8.3 billion** people — not infinite. The UN's 2024 projections speak of **10.3 billion around the mid-2080s**, then a slight decline [2]. That too is a conditional prediction, not a certainty.

It would be easy to dismiss the story as a curiosity. A missed prediction, an interesting mistake. But we'd lose the question worth asking.

## The model is not the world

A prediction is not a glimpse of the future. It's a relationship between data, assumptions, methods, and conditions. A model can describe the past well and lose predictive power when the phenomenon changes.

The math didn't become wrong the day the curve slowed. What failed was the assumption that a historical regularity would continue forever.

What do we do when a body of knowledge — useful for decades — stops explaining reality? How quickly do we recognize the error? Where do we keep the reasons we changed our mind?

Science already has tools for these questions: replications, peer review, new models, meta-analyses. Publications freeze versions that can be cited, examined, and challenged. But the process stays fragmented. A model gets updated in one place, the rebuttal appears in a different journal, the methodological discussion gets lost in an archive. Knowledge evolves — and the story of its transformations is hard to reconstruct.

> This is where the argument shifts.
>
> We're not talking about updating a number. We're talking about a community that keeps studying the same problem for years, and preserves both what it understood and what it got wrong.

## What if that study had stayed alive

Imagine an alternative scenario.

It's 1960. The demographic study is published. But its result doesn't remain just an article. Around the question a persistent community forms: researchers, statisticians, demographers — people with different expertise — who keep working on data, hypotheses, and explanations.

Years pass. New censuses arrive. Someone challenges the global model and proposes regional trajectories. Others study fertility, health, education. Predictions are compared to reality. Mistakes stay documented — they become part of the work's history.

Someone joining after twenty years can reconstruct not just the latest estimate, but the initial questions, the variables that were ignored, the objections, the reasons for revision.

We can't know whether this community would have predicted better. It wouldn't be honest to claim a success we cannot verify.

But we can distinguish two things: **a published scientific paper** and **a collective process that preserves its own history**.

From here a question arises: *can we design communities that keep learning about the same domain for years, preserving what they understood and what they got wrong?*

## Not just an AI that updates the numbers

Continuous forecast updating is nothing new. Online learning, updateable probabilistic models, concept drift monitoring, *living systematic reviews* [3] — they all exist.

What we're proposing is different.

We're not imagining an AI model that recalculates a prediction. We're imagining **researchers, domain experts, human participants, and AI systems studying the same problem together, over time**.

A community that builds a shared repository — sources, hypotheses, evidence, errors, interpretations, predictions, revisions. Experts define methods and criteria. Others bring observations and questions. AI systems help compare literature, flag inconsistencies, examine data, suggest directions.

Collaboration doesn't mean everyone has the same competence. A result generated by AI is not evidence because it's plausible. A convergence of agents is not an independent confirmation. A consensus does not make a hypothesis true.

Let's call this perspective, provisionally, **Active and Adaptive Domain Knowledge** (AADK).

Active — because it supports new questions and verification.  
Adaptive — because it changes in light of evidence.  
Persistent — because it keeps the reasoning behind decisions when people and models change.  
Contestable — because it doesn't hide alternatives and dissent.

The property that holds all this together is **epistemic continuity**: the ability to reconstruct *how* and *why* a community arrived at a particular conclusion.

<figure class="pyr-figure">
  <div class="pyr-scroll">
    <svg viewBox="0 0 920 490" role="img" aria-labelledby="continuity-title continuity-desc" xmlns="http://www.w3.org/2000/svg">
      <title id="continuity-title">Epistemic continuity: knowledge evolves without erasing its earlier states</title>
      <desc id="continuity-desc">A timeline has three versions of a hypothesis, each connected to new evidence and recorded objections. The older versions remain visible, and a line labelled persistent memory connects them.</desc>
      <text x="24" y="29" class="pyr-kicker">02 / EPISTEMIC CONTINUITY</text>
      <text x="24" y="67" class="pyr-title">Revision without erasure.</text>
      <text x="24" y="95" class="pyr-small">A domain keeps the history of why its claims changed.</text>
      <line x1="125" y1="159" x2="797" y2="159" class="pyr-accent" stroke-width="2"/>
      <path d="M789 153L802 159L789 165" class="pyr-accent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="126" y="142" class="pyr-label">1960</text>
      <text x="433" y="142" class="pyr-label" text-anchor="middle">NEW EVIDENCE</text>
      <text x="796" y="142" class="pyr-label" text-anchor="end">ONGOING</text>
      <circle cx="137" cy="159" r="7" class="pyr-accent-fill"/>
      <circle cx="459" cy="159" r="7" class="pyr-accent-fill"/>
      <circle cx="783" cy="159" r="7" class="pyr-accent-fill"/>
      <rect x="54" y="187" width="249" height="127" rx="10" class="pyr-panel"/>
      <rect x="334" y="187" width="249" height="127" rx="10" class="pyr-panel"/>
      <rect x="614" y="187" width="249" height="127" rx="10" class="pyr-panel"/>
      <text x="75" y="216" class="pyr-kicker">CLAIM / VERSION 01</text>
      <text x="75" y="246" class="pyr-label">Historical extrapolation</text>
      <text x="75" y="273" class="pyr-small">Assumptions documented</text>
      <text x="75" y="293" class="pyr-small">Prediction preserved</text>
      <text x="355" y="216" class="pyr-kicker">CLAIM / VERSION 02</text>
      <text x="355" y="246" class="pyr-label">Revision after evidence</text>
      <text x="355" y="273" class="pyr-small">New demographic signals</text>
      <text x="355" y="293" class="pyr-small">Reasons recorded</text>
      <text x="635" y="216" class="pyr-kicker">CLAIM / VERSION 03</text>
      <text x="635" y="246" class="pyr-label">Current interpretation</text>
      <text x="635" y="273" class="pyr-small">Uncertainty retained</text>
      <text x="635" y="293" class="pyr-small">Questions remain open</text>
      <path d="M303 245H334M583 245H614" class="pyr-accent" stroke-width="2" stroke-dasharray="4 4"/>
      <path d="M178 322V361H740V322" class="pyr-accent" stroke-width="1.6" stroke-opacity=".75"/>
      <path d="M458 322V361" class="pyr-accent" stroke-width="1.6" stroke-opacity=".75"/>
      <rect x="257" y="341" width="405" height="47" rx="23.5" fill="var(--card-color)" stroke="var(--primary-color)" stroke-width="1.5"/>
      <text x="460" y="370" text-anchor="middle" class="pyr-label">PERSISTENT, TRACEABLE MEMORY</text>
      <text x="81" y="431" class="pyr-small">Sources  ·  decisions  ·  dissent  ·  errors  ·  model versions</text>
      <line x1="80" y1="448" x2="839" y2="448" class="pyr-rule" stroke-width="1"/>
      <text x="81" y="475" class="pyr-small">The previous model is not overwritten; its provenance stays inspectable.</text>
    </svg>
  </div>
  <figcaption>Proposed design principle—not an existing validated AADK implementation. Each revision must preserve the original claim, its sources, the reason for change, and unresolved objections.</figcaption>
</figure>

## What we've already tried to say

We're not starting from nothing. In Pyragogy's earlier work, similar questions resurface in different forms. They're not evidence for AADK — they're precedents that help define it.

[*The Dance of Minds*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/ritmo_cognitivo.md) talks about **Cognitive Rhythm** — friction, assimilation, synchronization in the human–AI encounter. [*AI Speed and the Problem of Cognitive Impedance Mismatch*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/diary/update.md) shows the risk that generation outpaces understanding. [*HALA*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/hala-assessment.md) asks what stays with a person after working with AI — and its answer is a proposal, not a result.

[*Knowledge Patch Collision*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/knowledge-patch-collision.md) tells the dangerous moment: a perfectly coherent modification that confirms the evaluator's expectation. [*Four Agents. One Handbook. No Safe Exit*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/open-review.md) describes a review process that stresses the text instead of summarizing it. [*The Empty Laboratory*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/lab/empty-laboratory.md) recalls a severe principle: an agent can propose a lead, but only evidence supports a conclusion.

Finally, [*When Words Fail*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/CRDTs-05-02-26.md) reminds us that a community can collaborate without reaching immediate consensus.

These attempts don't add up to a verified architecture. But they point to the same tension: **how to make collaboration produce understanding, memory, and the capacity for correction — and not just more text.**

## When a prediction changes the phenomenon

There's a subtler problem.

Predictions about human systems don't just observe. They can change the decisions of the people who receive them. Contemporary research calls this *performative prediction*: when a prediction influences behavior, the data distribution on which the model is evaluated shifts [4].

Von Foerster knew this. His work in cybernetics had already raised the problem of the relationship between observer and observed system.

We can't conclude that the 1960 article caused the change in world fertility. That claim would require specific evidence. But we can ask: **how should a research community work when its own predictions enter the system it is studying?**

An adaptive body of knowledge should be able — at least in principle — to examine these effects too.

And there's another risk.

Continuity doesn't guarantee truth. Quite the opposite: it can consolidate error. If a community systematically approves only hypotheses compatible with its own worldview, it will build an increasingly coherent — and potentially less reliable — narrative. Multiple AI systems trained on similar sources amplify the same flaw.

Research that continuously updates its conclusions, overwriting past ones, becomes impossible to evaluate. Every wrong prediction disappears behind the new one.

This is why the proposal would need operational guarantees: dated and immutable predictions. Linked successive versions. Identifiable sources. Explicit uncertainty. Preserved dissent. Holdout tests with data not used in model construction. Accountability for human and artificial contributions.

A community should not be rewarded for always reaching agreement. It should be evaluated for **how well it recognizes when it is wrong**.

<figure class="pyr-figure">
  <div class="pyr-scroll">
    <svg viewBox="0 0 920 445" role="img" aria-labelledby="gate-title gate-desc" xmlns="http://www.w3.org/2000/svg">
      <title id="gate-title">The critical difference between agreement and evidence</title>
      <desc id="gate-desc">Two contrasting paths. A closed feedback loop reinforces the same assumption. An evidence-gated path requires independent observations, recorded counterevidence and accountable revision before a claim is accepted.</desc>
      <text x="24" y="29" class="pyr-kicker">03 / THE EVIDENCE GATE</text>
      <text x="24" y="67" class="pyr-title">Agreement is not validation.</text>
      <text x="24" y="94" class="pyr-small">Persistent collaboration needs an escape route from shared bias.</text>
      <rect x="24" y="116" width="420" height="267" rx="13" class="pyr-panel"/>
      <rect x="475" y="116" width="420" height="267" rx="13" class="pyr-panel"/>
      <text x="46" y="151" class="pyr-label">A · CLOSED LOOP</text>
      <text x="497" y="151" class="pyr-label">B · EVIDENCE-GATED REVISION</text>
      <rect x="64" y="181" width="150" height="56" rx="8" class="pyr-panel"/>
      <rect x="258" y="181" width="150" height="56" rx="8" class="pyr-panel"/>
      <text x="139" y="204" text-anchor="middle" class="pyr-label">Assumption</text>
      <text x="139" y="224" text-anchor="middle" class="pyr-small">“This must be true”</text>
      <text x="333" y="204" text-anchor="middle" class="pyr-label">AI agreement</text>
      <text x="333" y="224" text-anchor="middle" class="pyr-small">Same sources / bias</text>
      <path d="M214 209H258M333 237V293H139V237" class="pyr-accent" stroke-width="2" stroke-dasharray="4 5"/>
      <path d="M247 204l11 5-11 5M144 250l-5-13-5 13" class="pyr-accent" stroke-width="2"/>
      <text x="235" y="323" text-anchor="middle" class="pyr-label">More coherence ≠ more truth</text>
      <text x="235" y="347" text-anchor="middle" class="pyr-small">The loop only confirms itself.</text>
      <rect x="499" y="182" width="108" height="65" rx="8" class="pyr-panel"/>
      <rect x="632" y="173" width="112" height="83" rx="8" fill="var(--card-color)" stroke="var(--primary-color)" stroke-width="2"/>
      <rect x="768" y="182" width="104" height="65" rx="8" class="pyr-panel"/>
      <text x="553" y="208" text-anchor="middle" class="pyr-label">Hypothesis</text>
      <text x="553" y="228" text-anchor="middle" class="pyr-small">Human / AI</text>
      <text x="688" y="200" text-anchor="middle" class="pyr-kicker">GATE</text>
      <text x="688" y="226" text-anchor="middle" class="pyr-label">Evidence</text>
      <text x="688" y="242" text-anchor="middle" class="pyr-small">independent</text>
      <text x="820" y="208" text-anchor="middle" class="pyr-label">Revision</text>
      <text x="820" y="228" text-anchor="middle" class="pyr-small">or rejection</text>
      <path d="M607 214H632M744 214H768" class="pyr-accent" stroke-width="2"/>
      <path d="M623 209l9 5-9 5M759 209l9 5-9 5" class="pyr-accent" stroke-width="2"/>
      <text x="684" y="297" text-anchor="middle" class="pyr-label">Counterevidence is retained.</text>
      <text x="684" y="323" text-anchor="middle" class="pyr-small">Responsibility and provenance remain explicit.</text>
      <text x="684" y="348" text-anchor="middle" class="pyr-small">An AI-generated claim is never its own proof.</text>
      <line x1="24" y1="403" x2="895" y2="403" class="pyr-rule" stroke-width="1"/>
      <text x="24" y="430" class="pyr-small">Design comparison · schematic, not an experimental result</text>
    </svg>
  </div>
  <figcaption>Two governance patterns for human–AI inquiry: recursive agreement versus independent evidence and accountable revision. The diagram describes the proposed safeguard, not a measured outcome.</figcaption>
</figure>

## A concrete test

Start with the 1960 demographic model.

Reconstruct a series of predictions using only the data available at each point: information up to 1960, then successive updates — without retroactively introducing future knowledge.

Compare three conditions:

1. **Frozen model:** an initial prediction that stays unchanged.
2. **Updated model:** a procedure that incorporates new data according to declared rules.
3. **Persistent collaborative research:** human participants and AI discuss alternative hypotheses, document revisions, and use a shared structured memory.

It's not enough to see which one produces the number closest to observed population. We need to measure: out-of-sample error, calibration of uncertainty intervals, time needed to recognize model deterioration, ability to retrieve past decisions, quality of explanations.

We also need to control for two biases: that the third condition doesn't simply have more information or resources, and that humans aren't unconsciously using future knowledge during the retrospective simulation.

If human–AI collaboration produced better results, we'd have an initial clue worth pursuing. If it didn't, we'd still have learned something about the limits of the proposed model.

One last distinction: **more accurate predictions** is not the same as **better knowledge**. A group can improve the explanation and traceability of a phenomenon without producing a more precise numerical estimate. That would be real progress — but it needs to be measured for what it is.

## The 1960 article didn't become wrong

November 13, 2026. The human population is not infinite. The 1960 article remains what it was: a question posed at a historical moment, with the data available then, inside a model that stated its conditions.

It doesn't need to be rewritten. It needs to be reread, contextualized, and used to ask new questions.

What we're proposing today doesn't have an answer yet:

**what if the future of knowledge isn't just publishing what we've discovered, but building communities capable of continuing to discover, remember, and correct themselves together?**

For Pyragogy, this article is a starting point. The proposal is open to criticism, to revision, and — above all — to the test of facts.

---

## References

1. **von Foerster, H., Mora, P. M., & Amiot, L. W. (1960).** *Doomsday: Friday, 13 November, A.D. 2026. At this date human population will approach infinity if it grows as it has grown in the last two millenia.* *Science*, 132(3436), 1291–1295. [DOI](https://doi.org/10.1126/science.132.3436.1291) · [PubMed PMID 13782058](https://pubmed.ncbi.nlm.nih.gov/13782058/).
2. **United Nations, Department of Economic and Social Affairs, Population Division (2024).** *World Population Prospects 2024*. [Official portal](https://population.un.org/wpp/).
3. **Cochrane.** *Cochrane Handbook for Systematic Reviews of Interventions*, chapter on living systematic reviews. [Official handbook](https://training.cochrane.org/handbook/current).
4. **Perdomo, J., Zrnic, T., Mendler-Dünner, C., & Hardt, M. (2020).** *Performative Prediction*. *Proceedings of the 37th International Conference on Machine Learning*, PMLR 119, 7599–7609. [Paper and references](https://proceedings.mlr.press/v119/perdomo20a.html).

**Scientific status of the proposal.** *Active and Adaptive Domain Knowledge* (AADK) is presented here as a conceptual hypothesis to be defined and tested, not as a validated methodology. The related Pyragogy works are exploratory precedents, not evidence of the approach's superiority.