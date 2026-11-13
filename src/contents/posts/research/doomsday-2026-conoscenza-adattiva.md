---
title: "The Day Humanity Was Supposed to Become Infinite"
published: 2026-11-13
draft: false
description: "From a 1960 demographic prediction to a Pyragogy hypothesis"
tags: [Pyragogy, Demography, Cybernetics, Adaptive Knowledge, Human-AI Collaboration]
category: Research
author: Fabrizio Terzi
bannerImage: /banner/2.webp
cover: /banner/21.webp
---

<!-- Editorial note: the source portrait was placed at public/images/Heinz_von_Foerster.jpeg by the author; converted copy at public/images/heinz-von-foerster.webp. Verify license and attribution before publication. Banner/cover are still provisional. -->

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
  .article .katex-display { font-size: clamp(1.3rem,3vw,2rem); margin: 1.8rem 0 1.2rem; padding: 1.35rem .8rem; border: 1px solid var(--primary-color-lighten); border-radius: 12px; background: var(--card-color); }
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

## Friday the 13th, with a wink

Heinz von Foerster was born on 13 November 1911. He scheduled the end of the world for his 115th birthday — Friday, 13 November, A.D. 2026.

<small><strong>SCIENCE · 4 NOVEMBER 1960</strong></small>

<div class="pyr-biblio" style="display:grid;grid-template-columns: minmax(0,0.85fr) minmax(0,1.15fr);gap:clamp(1rem,3vw,2rem);align-items:start;margin:1.25rem 0 2rem">
  <figure style="margin:0">
    <img src="/images/heinz-von-foerster.webp" alt="Historical portrait of Heinz von Foerster" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;object-fit:contain;border-radius:0.65rem" />
    <figcaption style="font-size:0.85rem;line-height:1.45;opacity:0.8;margin-top:0.55rem">Heinz von Foerster (1911–2002), physicist and pioneer of cybernetics. <em>Photo credit and license to be confirmed.</em></figcaption>
  </figure>
  <div>
    <h3 style="margin:0 0 1.1rem;font-size:clamp(1.35rem,2.8vw,1.85rem);line-height:1.25">Doomsday: Friday, 13 November, A.D. 2026</h3>
    <p style="opacity:.78;font-size:.94em"><em>“At this date human population will approach infinity if it grows as it has grown in the last two millenia.”</em></p>
    <p><strong>Authors:</strong> Heinz von Foerster, Patricia M. Mora, and Lawrence W. Amiot.</p>
    <p><strong>Journal:</strong> <em>Science</em>, vol. 132, no. 3436, pp. 1291–1295.</p>
    <p><strong>Published:</strong> 4 November 1960.</p>
    <p><strong>DOI:</strong> <a href="https://doi.org/10.1126/science.132.3436.1291">10.1126/science.132.3436.1291</a></p>
    <p><strong>PubMed:</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/13782058/">PMID 13782058</a></p>
  </div>
</div>

On 4 November 1960, *Science* published a paper with a title that has aged like a dare: “Doomsday: Friday, 13 November, A.D. 2026.” The subtitle — the fine print — was the whole story: “At this date human population will approach infinity *if* it grows as it has grown in the last two millenia.” [1]

Nobody claimed infinity was physically on offer. Von Foerster, Mora and Amiot took two thousand years of population estimates, fitted a hyperbola, and followed it to its logical end: a date when the number of humans stops being a number. And the date — that was a wink. Von Foerster's 115th birthday. Commentators read it as a deliberate joke. So do I.

Here is the simplified version:

$$
N(t)=\frac{C}{t_0-t}
$$

<div class="pyr-legend">
  <p><strong>N(t)</strong> — population predicted at time <em>t</em>.</p>
  <p><strong>C</strong> — a constant fitted to the historical estimates.</p>
  <p><strong>t₀</strong> — the mathematical singularity date (13 November 2026 in the extrapolation).</p>
  <p><strong>t → t₀</strong> — the denominator tends toward zero, so the modeled population grows without bound.</p>
</div>

Population $N(t)$ blows up as the date $t$ approaches the singularity $t_0$, because the denominator heads for zero. $C$ is fitted to the historical estimates, and $t_0$ came out as 13 November 2026.

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

## The curve lost its nerve first

The model had held for two millennia. It gave up almost exactly when the paper went to press: global growth peaked in the early 1960s and has been falling since. Fertility dropped, schooling spread, cities happened. The demographic transition took another road, and the hyperbola — not being consulted — carried on without us.

So here we are, and humanity is not infinite. The UN's medium-variant estimate for mid-2026 is about 8.3 billion [3][4]. Strictly speaking that is a model output too: it comes from the 2024 revision, and the next full one has been pushed to July 2027 [4]. The same revision sees a peak near 10.3 billion in the mid-2080s, then a slow decline [3]. A forecast, with its own *if*.

It would be easy to file all this under “funny old mistakes.” We'd lose the better question.

## A map that ends at the edge of the page

A prediction is not a glimpse of the future. It is a relationship between data, assumptions, methods and conditions — and relationships can break. The math never became wrong. What failed was the assumption that a regularity would go on forever, which is the assumption every extrapolation makes on its way to a cliff. *At this rate.*

Demographers know this and live with it in public. The UN's 2022 revision put the peak at about 10.4 billion around 2086; two years later it moved to 2084 and just under 10.3 billion, with roughly an 80% chance of peaking this century [5]. In January 2026 the same office noticed that Togo had about a million fewer people than its tables said. Censuses are rude like that [6]. And independent models disagree more: the IHME forecast in *The Lancet* peaks in the 2060s, below 10 billion [7].

Which leaves three practical questions. What do we do when knowledge that served us for decades stops explaining the world? How fast do we notice? And where do we keep the reasons we changed our minds?

Here the argument shifts. We are not talking about updating a number. We are talking about a community that keeps studying the same problem for years, and preserves both what it understood and what it got wrong.

## A group chat with receipts

Imagine 1960 went differently. The paper comes out, and instead of becoming a citation it becomes a place: statisticians, demographers, epidemiologists and a few stubborn amateurs keep working on the same question. New censuses arrive. Someone proposes regional curves. Someone else blames fertility. Predictions are compared with reality, and the misses stay in the record — instead of being quietly overwritten. Picture a group chat where nobody can delete messages, and where that is the feature.

Twenty years later, a newcomer can read the questions that were asked, the variables that were ignored, the objections and the reasons for each revision. We can't know whether this crowd would have predicted better — claiming it would be a prediction of its own, with no data behind it. What we can separate is a paper from a process that remembers.

So the question: can we design communities that keep learning about one domain for years, and keep the receipts?

## What already exists (so we don't reinvent it, badly)

A fair amount, and it's worth saying so before claiming anything. Living systematic reviews update their conclusions as evidence arrives [8]. The UN Population Division publishes numbered editions and interim corrections. Forecasting platforms such as Metaculus and Good Judgment keep timestamped, scored predictions, and ForecastBench now puts humans and AI systems on the same questions [9]. Online learning and concept-drift monitoring are standard tools.

So the claim can't be “revisions exist.” It has to be narrower. Platforms keep the prediction and the score; revisions keep the new number and a release note. What nobody keeps well is the reasoning: the objections, the dropped variables, the dissent — who argued what and why they lost.

Provisionally, let's call the idea **Active and Adaptive Domain Knowledge** (AADK):

* **Active** — it supports new questions and verification.
* **Adaptive** — it changes in light of evidence.
* **Persistent** — it keeps the reasoning when people and models change.
* **Contestable** — it hides neither alternatives nor dissent.

The property holding it together is **epistemic continuity**: being able to reconstruct how and why a community reached a conclusion. Whether that adds anything measurable over existing practice is exactly what has to be tested — and section 8 says how.

Collaboration doesn't mean everyone has the same competence. An AI-generated result is not evidence because it sounds plausible. Two models agreeing is not replication — it's two students who copied from the same textbook. And consensus does not make a hypothesis true.

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
  <figcaption>Proposed design principle — not an existing validated AADK implementation. Each revision must preserve the original claim, its sources, the reason for change, and unresolved objections.</figcaption>
</figure>

## We have been circling this for a while

These are internal precedents, not evidence. [*The Dance of Minds*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/ritmo_cognitivo.md) is about Cognitive Rhythm — the friction of the human–AI encounter. [*AI Speed and the Problem of Cognitive Impedance Mismatch*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/diary/update.md) warns about generation outpacing understanding. [*HALA*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/hala-assessment.md) asks what stays with a person after working with AI. [*Knowledge Patch Collision*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/knowledge-patch-collision.md) describes a perfectly coherent edit that confirms what the evaluator expected. [*Four Agents. One Handbook. No Safe Exit*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/open-review.md) stresses a text instead of summarizing it. [*The Empty Laboratory*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/lab/empty-laboratory.md) states the rule: an agent can propose a lead, only evidence supports a conclusion. [*When Words Fail*](https://github.com/FTG-003/yukina/blob/main/src/contents/posts/research/CRDTs-05-02-26.md) shows a community collaborating without consensus.

Different angles on one tension: how to make collaboration produce understanding, memory, and the capacity to correct — and not just more text.

## When the forecast reads the forecaster

Predictions about human systems can change the people who read them. Contemporary research calls this *performative prediction*: once a forecast influences behavior, the data it will be judged on shifts [11]. We can't say the 1960 paper moved world fertility — that would need evidence nobody has shown. But a community that studies a system its own forecasts enter has a real problem, and von Foerster — who put the observer inside the system — would have recognized it at once.

Continuity also cuts the other way. A memory can preserve error as faithfully as insight. A community that approves only what fits its worldview builds an ever more coherent and ever less reliable story, and several AI systems trained on similar sources will nod along. The opposite failure is a community that overwrites its past conclusions, so every wrong prediction vanishes behind the next one.

Hence the guarantees: dated and immutable predictions, linked versions, identifiable sources, explicit uncertainty, preserved dissent, holdout data, and named accountability for human and artificial contributions.

A community should not be rewarded for agreeing. It should be judged on how well it notices it is wrong.

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

## How to lose in public

The obvious experiment is retrospective: rebuild the 1960 model, feed it only the data available at each date, see which set-up updates best. It has a problem that is hard to remove. Asking a modern language model to forecast from 1960 is like asking someone who has seen the movie to guess the ending — it will guess beautifully and tell you it reasoned. These models were trained on text that includes everything after 1960, and research on this look-ahead bias documents what it does to backtests [12][13]. Time-restricted models are being built — DatedGPT covers annual cutoffs from 2013 to 2024 — but none that I know of reaches back to 1960. So the 1960 reconstruction stays an exploratory exercise.

The primary test should look forward, which is also how forecasting organisations prefer to compare AI with humans [10]. Pre-register dozens of questions that resolve on known dates — for example what the July 2027 UN revision will report for the global peak year and size. Timestamp and publish every prediction before the answer exists. Then compare set-ups, including one identical to the AADK condition except for the shared memory, so that only the memory gets the credit or the blame.

If the persistent-memory condition does better, we have a clue worth following. If it doesn't, we've learned where the idea stops working — in public, with a timestamp.

One caution: more accurate predictions are not the same as better knowledge. A group can improve explanation and traceability without producing a better number. That would be progress — and it has to be measured as what it is.

The full protocol is in the appendix.

## The 1960 article didn't become wrong

Friday, 13 November 2026. The human population is not infinite. And the 1960 article never became wrong — it just arrived at a date that wasn't what it predicted. It remains what it was: a question asked at a particular moment, with the data of the time, inside a model that stated its conditions, and written with a smile.

It doesn't need rewriting. It needs rereading — and a few new questions.

Ours doesn't have an answer yet: what if the future of knowledge isn't only publishing what we've discovered, but building communities that keep discovering, remembering and correcting themselves — together?

That's not a program. It's a question worth testing.

## Appendix: test protocol (draft)

1. **Questions.** Dozens, not one, pre-registered, each with a known resolution date and source. Example: peak year and size in the July 2027 UN revision; country-level fertility revisions after new censuses.

2. **Timestamps.** Every prediction published, with a hash, before resolution. Nothing edited afterwards.

3. **Conditions.** A frozen model; a rule-based updated model (logistic or cohort-component, not only a hyperbola); human experts alone; AI alone; humans and AI without shared memory; humans and AI with persistent, structured memory. Only the last two differ by the memory itself.

4. **Metrics.** Out-of-sample error; calibration of uncertainty intervals; time to recognize that a model has deteriorated; ability to retrieve past decisions; explanation quality, scored blind by independent raters against a pre-declared rubric.

5. **Fairness.** Equal time, resources and people in every condition; negative results published.

6. **Limits.** One domain is not a general result, and demographic questions resolve slowly. The 1960 retrospective runs separately, as an exploratory exercise, human-only or heavily audited.

## References

1. Von Foerster, H., Mora, P. M., & Amiot, L. W. (1960). *Doomsday: Friday, 13 November, A.D. 2026. At this date human population will approach infinity if it grows as it has grown in the last two millenia.* *Science*, 132(3436), 1291–1295. [DOI](https://doi.org/10.1126/science.132.3436.1291) · [PubMed PMID 13782058](https://pubmed.ncbi.nlm.nih.gov/13782058/)

2. Heinz von Foerster. Biographical entry, *Wikipedia*. [en.wikipedia.org/wiki/Heinz_von_Foerster](https://en.wikipedia.org/wiki/Heinz_von_Foerster)

3. United Nations (2024). *UN projects world population to peak within this century* (press release on World Population Prospects 2024). [un.org](https://www.un.org/en/desa/un-projects-world-population-peak-within-century) · [UN DESA Population Division portal](https://population.un.org/wpp/)

4. PopulationPyramids.org. Methodology page, using UN WPP 2024 medium-variant figures (1 July 2026) and noting the next revision postponed to 11 July 2027. [populationpyramids.org/methodology](https://www.populationpyramids.org/methodology)

5. Nuttall, C. (2024). *World population set to peak decades sooner than previously projected*, bne IntelliNews. [intellinews.com](https://www.intellinews.com)

6. Ecofin Agency (2026). *UN revises Togo's population down to 8.13 million after 2022 census.* [ecofinagency.com](https://www.ecofinagency.com)

7. Vollset, S. E. et al. (2020). *Fertility, mortality, migration, and population scenarios for 195 countries and territories from 2017 to 2100.* *The Lancet*, 396, 1285–1306. [DOI to verify before publishing]

8. Cochrane. *Cochrane Handbook for Systematic Reviews of Interventions*, chapter on living systematic reviews. [training.cochrane.org/handbook/current](https://training.cochrane.org/handbook/current)

9. Karger, E. et al. (2024). *ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities.* arXiv:2409.19839

10. Metaculus (2026). *AI forecasting in 2026: what 11 analyses say* (on retrospective backtests vs forward-looking tournaments). [lesswrong.com](https://www.lesswrong.com)

11. Perdomo, J., Zrnic, T., Mendler-Dünner, C., & Hardt, M. (2020). *Performative Prediction.* *ICML 2020*, PMLR 119, 7599–7609. [proceedings.mlr.press](https://proceedings.mlr.press/v119/perdomo20a.html)

12. He, S., Lv, L., Manela, A., & Wu, J. (2025). *Chronologically Consistent Large Language Models.* arXiv:2502.21206

13. Yan, Y. et al. (2026). *DatedGPT: Preventing Lookahead Bias in Large Language Models with Time-Aware Pretraining.* arXiv:2603.11838

**Scientific status of the proposal.** *Active and Adaptive Domain Knowledge* (AADK) is presented here as a conceptual hypothesis to be defined and tested, not as a validated methodology. The related Pyragogy works are exploratory precedents, not evidence of the approach's superiority.
