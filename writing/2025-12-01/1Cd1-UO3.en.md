# I Killed a Bamboo Plant, Then Built an AI

I killed a bamboo plant.

Bought it bright green, put it on the balcony, watered it every day. Two weeks later, leaves turned yellow. Another week, dead.

I still don't know why. Too much water? Too little? Too much sun? Not enough fertilizer?

I thought, if something could tell me "what's wrong with this plant," "what to do," "when to water"—maybe it would've survived.

So I built a small project: PlantCare.

Simple function: snap a photo, identify the plant, tell you what it is, how to care for it, whether something's wrong.

---

Feature clear, what to build it with?

I looked at two things: Dify and n8n.

At first I thought they were competitors. Use Dify, no need for n8n. Use n8n, no need for Dify.

After looking around, I found that's not the case.

They're not the same kind of thing at all.

What's Dify? An AI application development platform. You connect a model, it handles conversation, memory, knowledge base, tool calls. Core is "make AI easier to use."

What's n8n? An automation platform. You set triggers, it runs workflows, connects systems, passes data. Core is "make things run automatically."

Analogy: Dify is the brain, n8n is the limbs.

What did I need?

Identify plants, answer questions, give care advice—that's AI territory, Dify's strength.

Scheduled watering reminders, push care tips—that's automation, n8n's strength.

---

I used Dify first.

Why? Because the core function is AI conversation, and Dify works out of the box.

**Conversation memory**: User asks "what flower is this," AI says "this is a pothos." User follows up "is it poisonous," AI needs to know the previous mention was pothos.

In Dify this is default. Start a conversation, context is automatically remembered.

In n8n? You have to set up a database to store chat history yourself, pull history every request to feed the model. For beginners, that's a hassle.

**Knowledge base**: I wanted AI to know common plant care knowledge. Upload a few care guides, articles—Dify automatically chunks, vectorizes, retrieves.

In n8n, you have to connect a vector database yourself, write retrieval logic. Not impossible, just too much trouble.

**Image recognition**: Snap a photo, identify what plant. Dify supports multimodal, connect a vision model.

I spent two days with Dify, core features were running.

---

But some things Dify couldn't do.

**Scheduled reminders**: I wanted to push a "daily care tip" every morning at 8—weather, whether to water, any pest warnings.

Dify is passive. User asks, it answers. It doesn't proactively reach out.

n8n has a built-in scheduler. Set a cron, runs at 8 AM daily, calls weather API, checks plant status, generates content, pushes to WeChat.

Dify can't do this.

**External system integration**: If I wanted to sync data to Notion, or connect to an e-commerce backend to send coupons—n8n has thousands of built-in integrations. Drag a few nodes, done.

Dify can call external APIs too, but not as rich as n8n.

---

In the end, my architecture became this:

Dify as the brain. Handles conversation, identifies plants, answers questions, searches knowledge base.

n8n as the limbs. Scheduled reminders, push notifications, external system connections.

Dify receives a request, processes it, sends results to n8n via API. n8n runs the subsequent automation.

Not either-or, but a combo.

If you're building similar personal projects:

Core is AI conversation, need memory and knowledge base → start with Dify
Need scheduled tasks, external system connections → add n8n
Need both → use them together