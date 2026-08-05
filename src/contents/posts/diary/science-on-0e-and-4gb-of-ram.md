---
title: Science on 0€ and 4 GB of RAM
published: 2026-08-05
description: What happens when you try to do research without a lab, without a budget, and with an orchestra of AIs
author: Fabrizio Terzi
category: Diary
tags: [Pyragogy, Entangletronica, AI, Open Science]
draft: true
---

It all started almost by accident.

I was trying to better understand some physics content I'd come across in a YouTube video. I started collecting concepts, asking questions, comparing explanations.

Then what often happens when you leave a question open long enough happened:

**the question started producing others.**

At some point I no longer just wanted to understand what I was reading.

I wanted to know whether an intuition could be turned into something formalizable, simulable and, above all, criticizable by others.

The problem was obvious.

I'm not a physicist.

I don't have a lab.

I don't have a workstation.

I don't have a research group.

And I had no budget.

But I had an old laptop with **4 GB of RAM**, access to AI models available for free, and a probably excessive amount of curiosity.

So I decided to try.

Not to prove that AI can replace a scientist. That would have been a ridiculous conclusion to assume before even starting.

I wanted to try something different:

**how ambitious can a research process become when one person orchestrates multiple AI systems as specialized cognitive tools?**

---

## Not a chatbot. A small research environment.

The first decision was crucial.

I would not use a single model to ask:

> "Do scientific research for me."

Instead, I started distributing the work.

One model could help me explore an idea.

Another to turn it into a formal model.

Another one to write or analyze code.

Another had the most important job: **try to break what the others had built.**

I held it all together.

I decided which questions to pass from one model to another, which answers to accept provisionally, which to verify, which to compare and which to reject.

It wasn't a chain of prompts.

It was a cycle:

$$
\text{idea} \rightarrow \text{AI} \rightarrow \text{critique} \rightarrow \text{verification} \rightarrow \text{new question} \rightarrow \text{AI}
$$

And it was exactly this cycle that turned an initial curiosity into a project.

---

## The question wasn't "is the AI right?"

It was:

**how do I know when the AI is wrong?**

This was probably the most important question of the whole experiment.

Models are extraordinarily good at producing something that *looks* right.

An explanation can be elegant.

An equation can be perfectly formatted.

A chart can look convincing.

A number can look exactly like the number we'd expect.

And none of that means it's true.

At some point we found an error.

A numerical result produced during the work wasn't consistent with the model it was supposed to derive from. It wasn't a small typo: it was an internal contradiction.

And this is where the experiment changed nature.

It was no longer about seeing how fast AI could produce scientific material.

It was about seeing whether we could build a process capable of **noticing that the material was wrong**.

We stopped the flow.

We isolated the problem.

We re-did the steps.

We compared interpretations.

Then I corrected the result.

And above all we left a trace of the error.

We didn't delete it from the history to make the final result prettier.

---

## Then something even more interesting happened

Once we had a first numerical result, the next question wasn't:

> "Can we publish it?"

It was:

> **"How much can we trust it?"**

And this question generated more questions.

Is the model stable?

Does the result depend on the numerical parameters?

Are we observing something that really belongs to the model, or something we introduced ourselves in the way we measure it?

When an answer doesn't seem to converge, is the problem in the simulation or in the way we decided to read it?

Every time an answer emerged, we looked for the next question that could destroy it.

This was the part that interested me the most.

AI was no longer just a tool for **generating answers**.

It had become a tool for **generating objections**.

And I was forced to do something much less spectacular but much more important:

deciding which objections deserved to be taken seriously.

---

## The result isn't just Entangletronica

In the end we produced a numerical study of a possible electron interference architecture.

But honestly, that's not the thing I find most interesting.

The real result of the experiment is the process that was left behind.

We turned a sequence of conversations with AI models into a public artifact:

* source code;
* simulations;
* tests;
* results;
* documentation;
* figures;
* revisions;
* corrections;
* commit history;
* frozen versions;
* a persistent scientific record.

Everything is public.

The repository doesn't only contain the final result.

It also contains the history of how we got there.

For me this is **Open Science** in a very concrete sense.

Not just:

> "here's our result, trust us."

But:

> "here's what we did. Here's what we got wrong. Here's what we corrected. Here's the code. Here's the data. Here's the version we froze. Try to break it."

---

## 0€ doesn't mean 0 cost

This point has to be stated clearly.

I don't want to tell the fairy tale of the genius with an old computer replacing a university lab.

It's not like that.

The economic cost of the experiment was almost zero.

The cognitive cost wasn't.

It took hours. Many.

And above all it took learning enough to understand when an answer made no sense, even when I wasn't able to know the correct answer immediately.

This is where I think the discourse on AI is often approached from the wrong side.

The value isn't simply in having a machine that "knows" more than we do.

It's in the possibility of building **work systems in which AI capabilities and human capabilities compensate for each other's weaknesses.**

AI can explore enormous spaces of possibility.

The human still has to decide which possibilities deserve attention.

AI can produce code.

The human has to ask whether that code is really computing what they believe.

AI can find a solution.

The human has to decide which question is worth asking next.

---

## And this is the point of Pyragogy

Pyragogy isn't born to teach people to "use ChatGPT".

That's too small a skill for what's going on.

The question I care about is more radical:

**how do learning, research and the production of knowledge change when human intelligence can be continuously augmented, contradicted and put to the test by artificial systems?**

For me, Entangletronica was a small experiment on this question.

I didn't need to prove that a person without academic training can suddenly become a physicist.

They can't.

I needed to understand whether that person could **get far enough to formulate an interesting question, build a model, find their own errors, submit it to critique and leave behind an artifact that others could examine.**

This possibility seems much more important to me.

Because democratizing research doesn't mean promising that everyone can do everything.

It means lowering the cost needed to get to the point where a good question can finally be taken seriously.

---

## Don't ask me if it's a discovery

I don't know.

And that's not the point.

Entangletronica is an **openly published numerical study**, not an experimental demonstration and not a discovery I'm asking the community to accept on faith.

The scientific record is on Zenodo.

The repository is on GitHub.

The project's history is in the commits.

And the work is there so it can be criticized.

### [Entangletronica — GitHub](https://github.com/FTG-003/entangletronica)

### [Entangletronica — Zenodo](https://zenodo.org/records/21802416)

The PDF, to read it right here:

<iframe
  src="/entangletronica/EQLI_PhaseGate_Benchmark_2026.pdf"
  title="EQLI_PhaseGate_Benchmark_2026.pdf — Entangletronica numerical study"
  loading="lazy"
  style="width:100%; height:72vh; border:1px solid #d1d5db; border-radius:6px; background:#fff;"
></iframe>

<small>If the viewer doesn't start, [download it](/entangletronica/EQLI_PhaseGate_Benchmark_2026.pdf) — it's the same file as the Zenodo record.</small>

If you're a physicist, an engineer, a programmer, a researcher, or simply curious enough to want to understand what happens when a human orchestrates multiple AIs around a hard question:

**don't believe me.**

Go look.

Try to find the error we didn't find.

Try to break the model.

Try to challenge our assumptions.

Because maybe this is the most important part of the experiment.

We didn't build a system to prove we were right.

We built a system in which **we could discover we were wrong without having to hide the evidence.**

And if this is one of the forms research can take in the age of AI, then I think it's worth continuing to experiment.
