# Don't Treat AI Like a Search Engine

A while back, I was working on an AI coach product. In a meeting, a colleague from the product team suggested: let AI play a picky customer to help salespeople practice.

My first thought: how hard can that be? Get a large model, write a few prompts, tell it to "play a picky customer." Done.

So I did exactly that. The result? That AI customer acted like a robot reciting lines. Whatever you said, it accepted, then moved on to the next line. No sense of being "picky," no rhythm of real customers who "intentionally create friction."

I sat there looking at the screen, and suddenly realized something:

I had been treating AI like a search engine.

Throw a question in, expect an answer out. In AI terms, this is called Zero-shot. Zero-sample prompting. Sounds fancy, but it basically means: you give nothing and expect AI to figure it out on its own.

Here's the problem.

AI isn't a search engine. It's more like a fresh intern.

---

Think about it. If a new intern joined your company and you told them to "play a picky customer for sales practice," how would they react?

They'd probably freeze: Boss, what does a picky customer look like? What points should I challenge? How should I respond when the salesperson says something? Should I adjust after each round?

You have to tell them. Give context, give process, give feedback.

Give context: You're a customer who cares about value but also has a bit of vanity.
Give process: Listen first. If they don't mention "premium feel," deliberately push back.
Give feedback: After this round, reflect—were you too soft? Be tougher next time.

These three things—product managers do them every day. Leading teams, setting goals, giving feedback.

Only now, the recipient is AI.

Some call this Agentic Workflow. I find that term too academic. Simply put: don't expect AI to figure it out alone. Teach it. If one round isn't enough, teach it again.

---

Later, I summarized this into a model called PAR.

Plan. Think clearly about what you want AI to do. Break it into steps.
Act. Let AI execute—search, write, use tools.
Reflect. This is the key step. Let AI check its own "homework," or get another AI to be the quality inspector.

In real work, I tried letting two AIs "spar with each other." One plays the customer, one acts as judge. The judge watches and says: You were too polite this round. Next round, be more specific with your challenges.

After just a few rounds, that "robot reciting lines" suddenly developed some texture.

The product manager's role shifted too.

Previously: defining features. Now: more like AI's "dean of studies."

---

But there's another thing that took me a long time to adapt to.

I spent ten years in traditional software. I was used to certainty. Input A, output definitely B. If output was C, that's a bug—fix it.

AI is different.

AI is a probabilistic model. It will make mistakes. It will confidently say nonsense. The industry calls this "hallucination."

There's a concept called "unreliability tax." Meaning: you have to accept that AI isn't reliable, and treat that as a cost.

When I first started doing AI products, I still chased 99.9% accuracy. Later I realized: you can't chase that.

So what to do?

I thought about it for a long time and realized: not every question needs AI to think slowly.

User asks "what's the weather today"—no need for AI to think. Just call an API. Fast.

User asks "how to plan quarterly sales strategy"—this is worth letting AI "stare blankly" for a bit. In the backend, it might be researching, drafting outlines, self-correcting. Tens of seconds, even minutes.

The key is: let users know. AI is thinking deeply for you. The wait is valuable.

Another thing: circuit breaker.

Like a fuse in electrical wiring. Sometimes AI gets stuck in a loop, repeatedly trying some wrong operation. You need to force a stop and let a human intervene.

Now when I look at AI product architecture, it's like looking at a kitchen.

Can't let one chef do everything from chopping to plating. Too slow, too prone to errors.

Must divide the work. Prep cook finds ingredients, head chef cooks, taster checks results.

Retrieval Agent finds information. Reasoning Agent makes decisions. Evaluation Agent checks outcomes.

---

There's one more thing that completely changed how I build products.

Before: from idea to demo meant PRD review, scheduling, development, testing. Cycle measured in weeks.

Now?

I write business logic directly as pseudocode, throw it to AI. A few hours later, a runnable prototype appears.

I throw the prototype to developers: See, this is the effect I want.

Developer looks and says: Can do.

This is so-called Vibe Coding. I can't write real code, but I can use natural language to direct AI to write it.

The significance isn't just efficiency. It's breaking cognitive boundaries.

Before, if a developer said "this logic can't be implemented," I could only revise the document.

Now I can directly verify: is it truly unimplementable, or just that the developer doesn't want to do it?

Product managers are shifting from "people who draw blueprints" to "people who build houses."

---

Speaking of this, I want to summarize a few points.

For the past decade, I made "connection" products. Connecting people to information, people to services, people to people.

These past two years, I've been making "empowerment" products. Letting AI understand people, help people do things, amplify human capabilities.

I think this is where it gets interesting.

Machines are learning to adapt to us, instead of us learning to adapt to machines.

This isn't a victory of technology. It's a victory of humans.