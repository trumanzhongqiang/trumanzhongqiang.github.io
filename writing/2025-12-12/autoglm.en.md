# I Let AI Take Over My Phone

One night, I typed a sentence on my computer:

"Open WeChat, send a message to someone."

Then I watched my phone move on its own.

The screen lit up. WeChat opened. The contact was found. The message was typed. Sent.

The whole time, I didn't touch my phone once.

That was the first time I truly felt: my phone might no longer need me to operate it.

---

Many people's first reaction to this kind of demo is about the same:

"Isn't this just an automation script?"

I thought so too at first. Write a script, record a flow, the phone executes step by step. What's so special?

But after running it, I found it's not that simple.

What is traditional automation? You tell it: click coordinate (100,200), then click (300,400), type "xxx", enter. This is a fixed assembly line. Change the UI a bit, the flow breaks.

AutoGLM is different. It doesn't memorize coordinates. It "looks at" the interface. You give it a sentence, it understands your intent, then decides what to do at each step.

You tell it "order food", it figures out: which app to open, what to search, how to filter, how to order. If a button moves, it adjusts.

This isn't a script. This is an "intern who can read screens."

From a product perspective, what does this shift mean?

We used to design products assuming users would operate step by step. Where buttons go, how flows work—all designed so people can understand, remember, execute.

In the future? Users might not "operate" anymore. They just say one sentence, and AI handles the rest.

Is UI still designed for humans? Or also for AI?

---

Honestly, AutoGLM is quite hard to use right now.

You need to install Python, configure ADB, enable USB debugging, install a special keyboard. When errors happen, you don't know what went wrong. Most people can't get it running.

But it's not a product. It's a prototype.

It's more like the multi-touch Demo before iPhone launched, not a mature App Store application.

Its value isn't in being "easy to use"—it's in validating a few things:

Natural language can drive continuous operations. You say one sentence, AI understands and executes a whole sequence of actions.

Visual understanding plus behavioral decisions can form a closed loop. AI doesn't just "see" the screen—it can make decisions based on what it sees.

Users are willing to hand execution rights to AI. This is actually important. Many people worry about safety, but when you actually run it, you find the "loss of control" feeling isn't that scary.

Once these three points are established, the rest is just engineering.

---

I've been doing AI products for a few years. What's my biggest takeaway?

Technology is less and less the bottleneck. The real bottleneck is: what exactly do you want it to do?

AutoGLM is the same. It can open any app, execute any operation. But you have to figure out what it should do.

This makes me rethink "product."

Before, the core of product work was designing interactions. Where buttons go, how flows work, how users operate—this was the product manager's main battleground.

In the future? Interactions might not matter as much. Users don't operate; AI operates. What product managers need to do becomes defining "what AI should do."

That's harder than designing interactions.

Another insight: whoever controls the operation layer controls the main battlefield of AI Agents.

Why does AutoGLM only support Android? Not a technical capability issue—a permissions issue. Android allows deeper system control; iOS doesn't.

Long term, whoever opens up more operation permissions to AI will have the advantage in the Agent era. This isn't a competition of model parameters—it's a competition of operation entry points.

---

Enough about the good stuff. Let's talk about problems.

AutoGLM's biggest issue right now isn't itself—it's that the entire mobile operating system isn't ready for AI Agents.

Can't unlock the lock screen, permissions need manual confirmation, don't know how to handle popups. These aren't things AutoGLM can solve—they're system-level issues.

If AI is truly going to take over phones, what's needed isn't smarter models—it's more open systems.

Android is ahead. iOS's security model makes it hard to follow. This could become a key variable in future competition.

One more thing: security trust. When you completely hand your phone to AI, what are you worried about?

Not that it will do something wrong—but that you don't know what it will do. This uncertainty is a harder barrier to overcome than technology.

---

After running AutoGLM, I have a strong feeling.

UI might really be changing.

For so many years, we've been used to "tap, swipe, type" as the way to interact. Phones are extensions of our fingers.

In the future? Phones might be extensions of AI. We just talk; AI operates.

AI isn't using tools with us—AI is using tools for us.

When this change will happen, I don't know. But the direction is clear.