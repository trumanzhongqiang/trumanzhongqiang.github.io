# Product Reconstruction Notes in the Era of Agentic AI

Over the past decade of my internet product career, I was used to drawing prototypes, writing documents, and tracking progress. Back then, software was **deterministic**: input A, and it inevitably outputs B. If it outputs C, that’s a bug that needs fixing.

But in the last two years, as I dived headfirst into the wave of Large Language Models (LLMs)—from independently developing "AI Assistants" to designing the implementation of enterprise-level "AI Coaches"—I’ve realized the rules of the game have completely changed. We are no longer designing a "tool"; we are hiring and managing a team of "silicon-based employees."

This is the trend Andrew Ng has recently been emphasizing: **Agentic Workflow**.

Today, I want to talk about this "new worldview" from the perspective of a product manager in this new era.

![Image](https://res.cloudinary.com/dtv7s0fyt/image/upload/v1768068691/blog/1leRtortKv1NA9aqPBplUSCXQYkbh_5SWsdqHDeu9eIo/image_1.png)

### 1. Don't Treat AI as a Search Engine; Treat It as an "Intern"

Many people find AI difficult to use because they are still using **"search engine"** logic—throwing in a keyword and expecting a perfect answer. In the AI field, this is known as **Zero-shot**.

If you directly ask an AI to "play a picky customer to help a salesperson practice," it usually performs like a robot reading a script. But if you change your approach and treat it as a **"smart intern"** who just joined:

**Give Context (Persona):** "You are a customer who cares deeply about value for money but is also a bit vain."

**Give Process (SOP):** "Listen to the salesperson first. If they don't mention 'prestige,' deliberately make things difficult for them."

**Give Feedback (Reflection):** "After this round, reflect on your performance. Were you too easy to talk to? Be stricter in the next round."

This is the essence of an **Agentic Workflow**.

This process can be summarized as the **PAR Model (Plan-Act-Reflect)**:

**Plan:** Like leading a team, set goals and break down tasks first.

**Act:** Let the AI execute and call tools (e.g., checking inventory, sending emails).

**Reflect:** This is the most critical step. Let the AI check its own "homework," or introduce another "AI Inspector" to find flaws.

In actual business scenarios, through this "self-adversarial" mechanism, we have seen AI performance jump from "mediocre" to "stunning." Product managers are no longer just definers of features; they are the **"Deans of Students"** for AI.

### 2. Accept the "Unreliability Tax" and Be the "Night's Watch" of the System

Traditional software pursues extreme low latency and high concurrency, but in the Agent era, we must learn to coexist with **"slowness"** and **"errors."**

There is a concept in the industry called the **"Unreliability Tax."** AI is inherently a probabilistic model; it will make mistakes and "hallucinate" with total confidence.

In previous traditional projects, I was used to chasing 99.9% accuracy. But with AI products, I’ve learned a different mindset: **Fault-tolerant design.**

**Thinking Budget:** If a user asks "What's the weather today?", we don't need the AI to think; we just call an API (fast). But if a user asks "How do I develop a quarterly sales strategy?", we need to allow the AI to "stare blankly" for dozens of seconds or even minutes. Behind the scenes, it might be researching data, drafting outlines, and self-correcting. As a product manager, you don't need to eliminate waiting time; the key is to demonstrate the **value of the designed wait**—the stunning result. Tell the user: "Hang on, the AI is thinking deeply for you."

**Circuit Breaking:** Just like an electrical fuse. When an AI gets stuck in a dead loop (e.g., repeatedly trying to call a broken tool), we need to design a forced shutdown mechanism for human intervention.

Now, I view AI product architecture like a **kitchen assembly line**: you can't have one head chef (LLM) do everything from chopping vegetables to plating, as that is slow and error-prone. We break tasks down: the prep cook (Retrieval Agent) finds materials, the head chef (Reasoning Agent) handles the cooking, and the taster (Evaluation Agent) ensures quality.

### 3. Vibe Coding: The Product Manager's "Magic Wand"

In the past, the gap between having an idea and seeing a demo was filled with long PRD reviews, scheduling, development, and testing. This cycle was measured in "weeks."

Now, with the help of **Vibe Coding**, this cycle has been compressed into "hours."

When exploring independent development, I am not a professional programmer, but I can "command" AI to write code using natural language. This is not just an efficiency boost; it is a **breaking of cognitive boundaries.**

**Before:** I would write "Because... therefore..." in a document, and a developer would say "This logic can't be implemented."

**Now:** I write the business logic directly as pseudo-code, or even run a working prototype myself to show the developer: "Look, this is the effect I want."

This has made me realize deeply: the core capability of a "super individual" in the future is not "writing code," but **"defining the problem"** and **"verifying the results."** Product managers are evolving from "people who draw blueprints" to "people who build houses."

### 4. Conclusion: From "Connection" to "Empowerment"

I have always believed that technology should not just be a tool for showing off; it should solve real pain points. The era of Agentic AI has just begun. We no longer need to adapt to cold machine instructions as we did before. Instead, machines are learning how to adapt to us at an unprecedented speed.
