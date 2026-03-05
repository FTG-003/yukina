---
title: 🎸 He Stopped Asking AI to Agree With Him
published: 2026-03-05
description: Fabrizio Terzi just launched Open Review — a live multi-agent orchestra that doesn't summarize the Peeragogy Handbook. It dismantles it.
author: BergamoHub
category: Announcements
tags: [Pyragogy, Automation, n8n, MultiAgent, OpenReview]
bannerImage: /banner/forum-square.webp
cover: /images/orchestra.webp
draft: false
---

For a few weeks now, Fabrizio had been talking about it — this idea of doing something *practical*. Stopping the theory. Building something that actually runs.

We'd heard versions of the same thought before: that AI tools were becoming mirrors, reflecting back whatever you already believed. That asking a language model to "improve" a text you wrote was just a more expensive way to agree with yourself.

Then last week, he shipped it.

---

## Meet the Orchestra

[open-review.pyragogy.org](https://open-review.pyragogy.org) is not a chatbot. It's a four-agent pipeline built on n8n, running models via OpenRouter, designed to do one thing: put the [Peeragogy Handbook](https://peeragogy.org) under pressure.

Each agent carries a distinct epistemic posture — not a role, but a *mode of attention*:

**🌍 The Researcher** scans peer-learning trends from 2024 to 2026. It doesn't ask what the text says. It asks what the world has become since the text was written — and where the tensions are.

**📚 The Resonance** acts as the Handbook's memory. It checks internal coherence, vocabulary fidelity, what must be preserved unconditionally.

**🎸 The Perturbator** is the lead guitar. At intensity level 1, it nudges. At level 5, it demolishes. In a recent test on the *Co-working* chapter, it reframed the Wikipedia/PlanetMath contribution model as *digital sharecropping* — unpaid labor romantically rebranded as community contribution.

**✍️ The Complicit Editor** listens to all three and writes the truth. It doesn't resolve the contradiction between them. It names it. That friction *is* the document.

---

## Why "Complicit"?

Because Fabrizio is inside the experiment too.

He built this to pressure-test texts he cares about. If the Orchestra finds a structural fault in the Peeragogy Handbook, that fault implicates him as well — he's been writing and teaching from it for years.

There's something deliberately uncomfortable about that. Which is the point.

> *"If the AI just gives you back your own ideas with better grammar, it's not a cognitive extension. It's an ego amplifier."*

---

## The Stack, for Those Who Want to Get Their Hands Dirty

The pipeline runs entirely on **n8n** with models served via **OpenRouter**. No data is stored server-side. Your API key lives only in the request. The revision document belongs entirely to you.

The lab is open. You bring the chapter. The Orchestra does the rest.

You can tune the disruption level from *Gentle* to *Demolition* — and watch in real time as three agents analyze in parallel before the Editor synthesizes their tensions into a single structured document.

---

## What Comes Out

Not a summary. Not a list of suggestions.

A revision document that names what doesn't hold — structurally, philosophically, contextually. With at least one open question at the end that only a human can answer.

That last part matters to Fabrizio. The Orchestra isn't meant to replace editorial judgment. It's meant to sharpen it.

---

## The Lab Is Open

If you work with the Peeragogy Handbook — or any living document that deserves honest scrutiny — this tool was built for you.

Go to **[open-review.pyragogy.org](https://open-review.pyragogy.org)**, select a chapter, set your intensity, and run the Orchestra.

If the output makes you uncomfortable, that's not a bug.

*Interference welcome.*

![Dance of minds - cognitive rhythm visualization](/images/orchestra.webp)
