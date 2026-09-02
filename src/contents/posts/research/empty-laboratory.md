---
title: "The Empty Laboratory"
published: 2026-09-02
author: Fabrizio Terzi
description: "When nobody answers, the experiment changes."
category: Research
tags: [UnPeeragogy, Pyragogy, Evidence, Cognitive Interview, Research]
draft: false
cover: "/banner/17.webp"
bannerImage: "/banner/17.webp"
---

# The Empty Laboratory

### When nobody answers, the experiment changes.

There is an empty laboratory.

I built **UnPeeragogy** because I wanted to invite people into it.

The idea was quite simple: take Peeragogy seriously enough to examine what happens when its patterns leave the Handbook and meet actual people, actual groups, actual constraints, and actual life.

I still believe in the basic idea of peer learning.

I still believe that people can learn together, build knowledge together, and create things that none of them could have produced alone.

That is precisely why I wanted to look more closely.

After many years around Peeragogy, one question kept coming back to me:

> **What happens when Peeragogy patterns meet conditions they don't explicitly describe?**

Not because I wanted to prove that the patterns were wrong.

Quite the opposite.

I wanted to know where they work, where they become difficult, what conditions seem to matter, what happens when expectations collide with reality, and what we might have missed.

So I built UnPeeragogy as an open research experiment.

The methodology is deliberately modest. It uses an adapted Critical Incident Technique, separates observations from interpretations, distinguishes evidence from hypotheses, explicitly looks for counter-evidence, and preserves revisions rather than hiding them.

And importantly, it looks for positive cases too.

If a pattern works beautifully under certain conditions, that is evidence worth understanding.

If it fails somewhere else, that is evidence too.

The point is not to collect failures.

The point is to make the relationship between **theory and experience** more visible.

## Then something unexpected happened.

The laboratory stayed almost empty.

People did not rush in with stories.

There were no flood of critical incidents waiting to be analysed.

And I have to be careful here.

I don't know why.

Maybe people are busy.

Maybe the project is unfamiliar.

Maybe the invitation wasn't clear enough.

Maybe nobody felt they had anything useful to contribute.

Maybe there are other reasons I haven't considered.

**The silence itself became an observation. I don't know yet what it means.**

But it created a practical problem.

The original experiment depended on something I could not manufacture:

**other people's experience.**

I could not simply generate that experience myself.

And I did not want to turn the absence of participation into an accusation.

So I started thinking about another possibility.

What if the laboratory could have a second branch?

---

# A second laboratory

This is where the **Pyragogy Engine** comes in.

The first version was originally designed as a kind of AI perturbator: give a theoretical pattern to several models, ask them to find ways it might break, and analyse the resulting objections.

But there was a problem with that design.

If an LLM invents a convincing scenario, and another LLM says that the scenario is plausible, we haven't discovered much.

We have created a plausible story.

That isn't what I want.

So I changed the architecture around a much stricter principle:

> **The model may propose. The evidence must dispose.**

The Engine is therefore no longer primarily an incident generator.

It is an **evidence-seeking system**.

For each theoretical node, the agents first try to understand what the theory actually says.

Then they use their parametric knowledge to identify phenomena, cases, research, and situations that may be relevant.

But there is a crucial distinction:

> **Parametric memory ≠ evidence.**

An LLM does not have a searchable copy of its training data sitting behind the interface.

It cannot legitimately say, "I remember this from paper X, therefore it is true."

Its internal knowledge can generate a lead.

It can suggest what to look for.

It can surface a phenomenon that a researcher might otherwise overlook.

But the candidate still has to go through a **Grounding Gate**.

If a claim cannot be connected to a real source, an empirical case, or an explicitly documented piece of evidence, it does not become evidence simply because the model produced it confidently.

It gets rejected.

---

# From contradiction to evidence

This also changed what the Engine is looking for.

It doesn't search only for things that contradict a theory.

A case can be:

* **supporting**
* **complicating**
* **contradicting**
* **ambiguous**

That distinction matters.

Imagine a pattern about cooperation.

The interesting result may not be:

> "Cooperation fails."

It may instead be:

> "Cooperation appears to work reliably when contribution is visible, groups are small, and coordination costs remain low — but behaves differently when those conditions disappear."

That is a much more useful result.

The question becomes less:

**Does the theory work?**

and more:

**Under what conditions does the theory work?**

That is the kind of tension I want the Engine to discover.

---

# An AI research swarm

The current Engine uses five specialised agents.

Not five agents arguing with each other for the sake of argument.

Five different functions in an evidence pipeline.

One interprets the theoretical claim.

One acts as an **Evidence Hunter**, using both its parametric knowledge and available sources to identify candidate evidence and possible verification paths.

The Grounding Gate checks whether those candidates can actually be supported.

Another agent critically assesses what the evidence means for the theoretical claim.

Another analyses the resulting tension.

And the final agent documents the entire chain.

Every step is recorded.

Every candidate has an identifier.

Every source has a provenance trail.

Every run produces an audit trail and a reproducibility manifest.

And the Engine does not write directly into the knowledge base. Changes remain explicit and reviewable.

The objective is not to create an oracle.

It is to create a machine that can say:

> "Here is something worth looking at."

and then force itself to answer:

> "Where is the evidence?"

---

# Two laboratories

This leaves me with two different experimental branches.

The first is human.

```text
Experience
    ↓
Critical Incident
    ↓
Observation
    ↓
Interpretation
    ↓
Counter-evidence
    ↓
Revision
```

The second is machine-mediated.

```text
Theory
    ↓
Parametric Recall
    ↓
Evidence Candidates
    ↓
Grounding
    ↓
Critical Analysis
    ↓
Revision
```

They are not equivalent.

They should never be presented as equivalent.

A human field report can contain something that no model can genuinely possess:

**lived experience.**

An AI system can, however, do things that are extremely difficult for a single researcher to do manually:

search across enormous bodies of accumulated knowledge, surface connections, compare cases, challenge interpretations, and systematically revisit dozens of theoretical nodes.

That makes the second laboratory useful.

But it doesn't make it human.

Synthetic friction is not human experience.

A model has no reputation to protect, no group belonging to lose, no embarrassment after disagreeing with the room, no exhaustion after months of coordination, and no personal stake in whether a collaboration succeeds.

That is a limitation.

It is also, in a strange way, an experimental advantage.

The machine can disagree without paying a social price for disagreement.

---

# What I am actually trying to build

Perhaps this is the part I am most interested in now.

UnPeeragogy started with Peeragogy.

But the question became larger than Peeragogy.

I found myself asking what it means to do research that nobody asked for. Research that grants no credentials, earns no citations, fits no funding line, and belongs to no institution.

Open research, real open research, is supposed to be this.

But the people who celebrate it in theory are often the same ones who, in practice, have stopped asking questions they don't already know how to answer.

I remember the night sky. I remember when I could still stare at it and feel the weight of not knowing.

Most of the people I meet in research have lost that.

They have certifications. They have impact factors. They have a methodology they trust and a career they are building.

They no longer look up.

What I am trying to build is not for them.

What I am trying to build is a space where the question stays alive longer than the answer.

Not a machine that declares theories true or false.

Not an AI judge.

Not a replacement for field research.

Something more modest:

a system that continually asks what happens when an idea encounters evidence that complicates it.

The human laboratory provides experience.

The machine laboratory provides systematic perturbation and evidence search.

Neither is sufficient on its own.

But perhaps they can constrain each other.

Human evidence can correct the machine.

Machine analysis can generate questions for humans.

New evidence can challenge previous interpretations.

And revised interpretations can be tested again.

That creates a loop:

> **Theory → Evidence → Interpretation → Counter-evidence → Revision**

rather than a one-way movement from theory to doctrine.

I don't know if this will ever produce something that looks like a finished result. It probably won't. The open research I believed in was never about results. It was about a certain way of staying awake.

---

# The laboratory is still open

I haven't abandoned the original experiment.

Quite the opposite.

The human laboratory is still open.

If you have practiced Peeragogy — especially if you have actually been inside one of those situations where collaboration worked, failed, became complicated, or produced an outcome nobody expected — I still want to hear about it.

A success is useful.

A failure is useful.

A contradiction is useful.

An uncomfortable exception is probably even more useful.

The Engine cannot give me that.

It can search.

It can compare.

It can perturb.

It can help me ask better questions.

But it cannot tell me what it felt like to be there.

So there are now two experiments running in parallel.

One waits for people.

The other doesn't.

And perhaps that is what the empty laboratory has taught me.

I spent months hoping someone would walk in.

Nobody did.

I cannot tell you that I accepted this easily. I spent nights trying to understand what I was doing wrong — whether the invitation was unclear, whether the project seemed irrelevant, whether I was the wrong person to make it.

That kind of silence gets inside you.

But in the end, the silence itself became a kind of teaching.

It forced me to stop waiting for validation and to build something that did not depend on it.

That is not the same as wanting the silence. But it is not the same as resenting it either.

When an experiment doesn't produce the evidence you expected, you have at least two choices.

You can explain the absence.

Or you can change the experiment.

I chose the second.

The laboratory is still open. For now, it is almost empty.

But perhaps emptiness is exactly what a real laboratory needs — to stop performing for an audience and start listening to what is actually there.

The silence is not a failure.

The silence is the condition.

And I am still learning how to work inside it.