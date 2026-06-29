---
title: From a Dense Map to a Living \\ Knowledge Base
published: 2026-06-21
description: Turning a dense map of AI-augmented thinking into an open, structured syllabus for humans and agents.
author: Fabry
category: Announcements
tags: [Pyragogy, Syllabus, Obsidian, Quartz, AI]
bannerImage: /banner/13.webp
cover: /banner/13.webp
draft: false
---

I read Howard Rheingold’s post, [**“AI-Augmented Human Thinking Pedagogy”**](https://www.patreon.com/howardrheingold/posts/ai-augmented-161265351?utm_campaign=patron_engagement&utm_source=post_link&post_id=161265351&utm_id=fb55925c-096e-4337-b726-21e234500f9d&utm_medium=email).

It stayed with me.

Not because it offered another neat answer about AI and education, but because it pointed toward a problem I keep returning to: if AI systems are becoming part of how we learn, write, think, and make decisions, then we need better maps of the cognitive risks involved.

Not an opinion.

Not another manifesto.

A map.

The post included a dense conceptual drawing — the kind of map that makes sense when you are close to the problem, but becomes difficult to enter from the outside.

<p align="center">
  <img src="/images/howard.webp" alt="Dense conceptual map about AI-Augmented Human Thinking Pedagogy" />
</p>

Dense maps are strange objects.

They may be useful to the person who drew them, but opaque to almost everyone else. The more connections you add, the more they risk becoming private diagrams: visual memory aids for the already initiated.

Still, the idea seemed worth pursuing.

So I asked my AI peer to help me turn that dense map into something more usable: a structured syllabus that could serve human readers, and eventually be parsed by AI agents.


The first working draft is now online:


https://syllabus.pyragogy.org/

The public repository is here:

https://github.com/pyragogy/ai-pedagogy


<p align="center">
  <img src="/banner/13-b.webp" alt="Syllabus of AI-Augmented Human Thinking Pedagogy" />
</p>

The project started in **Obsidian**. I did not want a long article that would become static the moment it was published. I wanted a map that could grow.

Every node had to become a small epistemic unit: readable by a person, linked to other concepts, and structured enough for a machine to inspect.

We organized the map around three axes:

* where the learner is in their development;
* how much active reasoning they are forced to perform;
* and the ability to think without asking permission.

Then the AI proposed using **Quartz v5**.

I did not know Quartz.

I had never built a static site with it.

I had never deployed anything through Cloudflare Pages.

So we built it.

The AI suggested the structure, configured files, generated paths, and helped debug the build. I had to slow down, inspect what it was doing, understand why things broke, and learn enough to decide whether its answers made sense.

The syllabus became more than a text about learning with AI.

It became the experiment itself.

I had to study what we had planned, what we had actually built, why the deployment failed, how the graph was generated, why the homepage was wrong, how the nodes were structured, and how a static knowledge base could become both a public website and a machine-readable resource.

That part matters.

> The point of Pyragogy is not to make things easy. The point is that the machine becomes a peer when it creates enough friction to make you think — and understand what you are doing.

But let’s be careful.

Putting this syllabus online does not mean the map is suddenly easy to read.

It proves something narrower: that a private mess of concepts, links, risks, and protocols can be turned into a structured, open resource.

That is the first step.

The rest is still untested.

A better container does not make the content clear. We still need to see how readers, developers, educators, and agents actually enter the map. Where they get stuck. Where they lose the thread. Which nodes help them recover orientation.

For now, the easiest entry point is to pick a risk.

Automation bias.

Cognitive debt.

Performative understanding.

Epistemia.

Then follow the mitigations: evidence demand, assumption reversal, reasoning trails, or friction escalation.

Do not read it like a book.

Use it like a diagnostic instrument.

Every node has the same anatomy: a definition, a use case, the human role, the AI role, the friction mechanism, the risk if skipped, and the observable markers that show if you are actually doing the work.

Usable for humans who want to think with a machine without surrendering.

Usable for educators who want to design learning environments where AI does not erase effort.

Usable for developers who want to build agents that do not just optimize for speed and cheap agreement.

And, eventually, usable for agents that can read the map, critique it, extend it, and help maintain it.

That last part is a direction, not a promise.

The repository is public because the map needs pressure.

Use it.

Fork it.

Connect your agents to it.

Stress-test it.

Show where the logic fails.

The code is public at [github.com/pyragogy/ai-pedagogy](https://github.com/pyragogy/ai-pedagogy), and the first draft of the site is at [syllabus.pyragogy.org](https://syllabus.pyragogy.org/).

The original post that started this path is here:

[AI-Augmented Human Thinking Pedagogy](https://www.patreon.com/howardrheingold/posts/ai-augmented-161265351)

It is not finished.

It should not be.

Just a map for a landscape that is still shifting under our feet.

We will see if it holds.
