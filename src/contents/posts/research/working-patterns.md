---
title: "Working Patterns — What Helps Groups Work Together?"
published: 2026-09-14
description: "From practitioner wisdom to evidence, counterevidence, boundary conditions — and a new research track for human–AI groups."
tags:
  ["WorkingPatterns", "OrganisationalPatterns", "OpenResearch", "CollectiveIntelligence", "Pyragogy"]
category: "Research"
author: "Fabrizio Terzi"
cover: "/banner/19.webp"
draft: false
---

# Working Patterns — What Helps Groups Work Together?

I started with a simple question.

Which organisational patterns actually work?

Not theories of collaboration. Not another manifesto about decentralisation. Patterns that people have used to solve recurring problems — power concentrating, decisions stalling, care work falling on the same people, conflict turning personal, groups repeating mistakes.

Then package the strongest ones into something useful. A handbook. Something a group could consult when it gets stuck.

It sounded straightforward.

It wasn't.

## The seed

The starting point was Richard D. Bartlett's *Patterns for Decentralised Organising* — a small CC0 collection from Enspiral, Loomio, and other decentralised groups.

The patterns are recognisable.

Make norms explicit. Distribute care work. Keep talking about power. Make decisions asynchronously.

They don't read like management theory. They read like things people learned because something hurt.

But a practitioner saying a pattern helped is evidence of experience. It is not evidence the pattern will work *somewhere else*.

So the question had to change:

> **Which patterns appear to work, for which problems, through which mechanisms, under which conditions — and where do they stop working?**

That sentence became Working Patterns.

## What broke first

"Consensus works" is almost meaningless.

Which consensus? For what decision? Who is allowed to object? What counts as a legitimate objection? What happens when somebody stays silent — is that consent or exhaustion?

Consent, full consensus and lazy consensus are not the same intervention.

Same with conflict.

"Conflict is healthy" collapses several different phenomena. Disagreement about a proposal is not interpersonal hostility. Authentic dissent is not the same as assigning someone to play devil's advocate.

When we separated those things, the evidence stopped telling a simple story.

That is useful.

## The unit changed

We stopped treating the pattern name as the unit of evaluation. The unit became:

**problem → intervention → implementation → outcome → evidence → conditions**

This sounds small.

It isn't.

Saying an organisation "uses retrospectives" tells us nothing. Was there a structured review? Were intentions compared with outcomes? Did somebody check whether the action happened next week?

And which outcome are we talking about? Performance? Learning? Participation? Power distribution? Burnout?

A practice can improve one while making another worse.

Working Patterns refuses to compress all of that into a single score.

## Seven patterns under pressure

The first deep cycle examined seven areas: explicit norms, structured retrospectives, care work distribution, informal power, consensus models, async decision-making, and conflict.

Structured debriefing had the strongest support across contexts. The rest were context-limited or had evidence the *problem* exists but much weaker evidence the intervention solves it.

The idea that "more conflict improves decisions" did not survive intact.

That is what I want this project to do.

Not confirm an ideology. Reduce the number of things we can say carelessly.

## Two distinctions that matter

**Evidence for the problem is not evidence for the solution.**

Research shows invisible work is distributed unequally. That does not prove rotating care roles fixes it. Perhaps compensation works better. Perhaps forced rotation damages trust-based relationships.

Same with power. Informal oligarchies emerge in open communities — but elections and term limits do not guarantee those oligarchies disappear. Formal authority and effective power are different objects. Who owns the credentials? Who controls access? Who can be replaced?

**Adoption is not implementation.**

"We use sociocracy" describes adoption. Who received the proposal? How much time did they have? Whose objections changed the decision? What happened when the procedure became inconvenient? Did retrospective actions survive the next week?

The name of a method is not evidence the method happened.

## Counterevidence belongs in the product

I want Working Patterns to become messier as it matures. Every useful pattern should carry its own reasons not to trust it blindly — not as a disclaimer, as part of the pattern itself.

> **Here is the problem. Here is the intervention. Here is what supports it. Here is what complicates it. Here are the costs. Here is where implementation diverges from the ideal. Here is what we still don't know.**

That is more useful to me than "best practice".

## When AI enters the group

This became unavoidable.

If we are building patterns for how humans organise, what happens when an AI becomes part of the group? Not a tool — an agent that searches, synthesises, recommends, remembers, coordinates.

Human–AI collaboration creates old problems in unfamiliar forms. Authority becomes implicit. Provenance disappears behind fluent language. A summary erases the minority position. "Human in the loop" can mean meaningful authority — or clicking approve after the real decision was already made.

Working Patterns now has a second research track with candidate patterns:

**Friction Before Delegation** — a checkpoint before consequential AI delegation.

**Provenance Before Persuasion** — inspectable evidence before fluency substitutes for support.

**Bounded AI Mandate** — specify what an AI may decide, recommend, execute, and escalate.

**Reversible Automation** — interventions must be inspectable, rollbackable, safely interruptible.

**Preserve Dissent Through Synthesis** — don't let AI summarisation erase minority positions.

**Independence Before Multi-Agent Consensus** — three agreeing agents are not three independent confirmations.

None of these are validated truths. They are research candidates. Pyragogy gives us reasons to ask the questions. It does not get to supply the answers.

## The repository as laboratory

The project now has a public structured corpus. Patterns have persistent IDs. Claims are separated from sources. Evidence can support, complicate, or contradict a specific claim. Genealogical dependencies are recorded — five papers from the same dataset are not five independent confirmations.

There is an integrity gate, and it already did something useful.

The validator found a discrepancy: a report claimed 33 registered claims; the registry contained 32. The easiest response would have been to create a missing record and make the number green.

We did the opposite.

The corpus was treated as authoritative. The discrepancy was recorded as an erratum. The count was corrected.

A tiny event.

But perhaps the most important pattern in the whole project:

> **When infrastructure disagrees with the story we are telling about our research, investigate the disagreement instead of forcing the infrastructure to agree.**

## Where this goes

The obvious output is a handbook. But I no longer think the handbook is the project. The project is the corpus.

Eventually there may be an evidence-aware organisational advisor.

Not an AI that says: "You should use lazy consensus."

One that asks: *What decision is this? Is it reversible? Who is excluded? What does silence mean in your group? Who has the authority to close the decision?*

Only then: here are patterns worth considering, here is what supports them, here is where the evidence is weak, here are failure modes, and here is what you should observe if you try one.

That is closer to Pyragogy.

Not AI that supplies agreement. AI that helps a group expose the assumptions inside its own way of working.

---

The corpus is early, incomplete, deliberately contestable.

If you have a failed implementation, counterexample, abandoned practice, or evidence that one of our claims is wrong — that may be more useful than another success story.

**Use it. Test it. Contradict it.**

Repository: **pyragogy/working-patterns**