---
title: How Books Come Alive in the Pyragogy Library
published: 2025-07-01
description: A living library, orchestrated by dialogical intelligences, where AI becomes a companion in exploration and co-learning.
author: Fabrizio Terzi
category: Announcements
tags: [ Peeragogy, RAG]
bannerImage: /banner/library-viva.webp
cover: /banner/2.webp 
draft: false
---



## From a Single Voice to a Peeragogical Dialogue

A few months ago, we created a chatbot interface for the [peeragogy.org](https://peeragogy.org) community — our inspirational root. We began experimenting with RAG systems (Retrieval-Augmented Generation), and it felt natural to start with a chatbot that could draw from the full context of *The Peeragogy Handbook V3*. The idea was simple: embed a chatbot on the site that could answer users’ questions with contextual awareness, enhanced by the generative capabilities of LLMs.

The response was enthusiastic. Even Howard Rheingold, founder of the Peeragogy project, appreciated the experiment ([see here](https://www.patreon.com/posts/peeragogy-126381651)).

The project, [Peeragogy ChatBot](https://github.com/Peeragogy/Peeragogy_ChatBot), soon sparked curiosity. Then came a playful idea: what if we let two chatbots collaborate *peeragogically*?

That’s when the real fun began.

We created a dedicated GPT called [Pyria](https://chatgpt.com/g/g-67f8d648e9308191bf3fc0d6397fc8c6-pyria-ai-for-co-learning), based on the handbook, and connected it to the Peeragogy ChatBot. Now the bot could query Pyria when deeper understanding was needed — tapping into a meta-layer of reflection and synthesis.

But then we hit a snag: the bot was running on a personal API key with no guardrails, effectively becoming a free, unlimited ChatGPT. Great for users. Unsustainable for us.

We explored adding conversational filters and usage limits. The user experience suffered. Ultimately, we paused the deployment. The full interface — just one HTML file — remains in the repo for anyone curious.

## Introducing: The Pyragogy Library

Now, we’ve taken a leap forward.

Enter the [Pyragogy Library](https://library.pyragogy.org/) — a prototype that is already operational. This is not just a knowledge archive; it’s a living interface for dialogue. Books don’t just sit on shelves — they speak.

Our new chatbot has *diversified personalities*, each one tuned to a different mode of engagement:

- 🎓 **Academic** — rigorous, evidence-based, and methodical
- 💡 **Explainer** — accessible, practical, and engaging
- 🧠 **Critical** — probing, analytical, and questioning
- 🤔 **Socratic** — reflective, guided by questions

Once again, we started from *The Peeragogy Handbook*. But this time, we’re building an orchestration architecture that could support many voices, many intelligences — dialoguing with each other, and with us.

Multiple LLMs? Yes. That’s already in the pipeline. But that’s a story for another day.

<p align="center">
  <img src="/images/libreria.webp" alt="App Piragogica" />
</p>


## A Living Laboratory for Open Knowledge

The Pyragogy Library is a prototyping space. We’re testing conversational UX, agent orchestration, and multi-modal reasoning over texts. But more than that, it’s an invitation.

To listen. To dialogue. To learn together.

Curious minds, welcome. 🚀

## What’s Next?

We are designing features like:
- Quadriphonic Dialogues: multiple personas responding to the same question.
- Human-in-the-loop annotations and reflection journals.
- Dynamic text overlays and conceptual maps.

We invite contributors, designers, educators, and fellow co-learners to shape this space with us. Have ideas? Want to experiment with new prompts, workflows, or books? Get in touch or fork the repo.

This is not a tool. It’s a garden.
Let’s cultivate it together.

→ [https://library.pyragogy.org/](https://library.pyragogy.org/)
