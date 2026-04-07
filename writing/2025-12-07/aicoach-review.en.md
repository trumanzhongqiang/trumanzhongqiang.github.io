# Three Things I Learned Building an AI Coach Product

Last year, I took over an enterprise training product.

The client was a sales company with thousands of salespeople. Their pain point was straightforward: training didn't work.

What do I mean by "didn't work"? Training was done, exams were passed, scores were decent. But on the front lines, salespeople still couldn't talk.

I looked at their training system. Typical traditional model: video courses, question banks, exams. Watch videos, do questions, take exams, get certificates. High completion rate, high pass rate.

What's the problem?

I asked a salesperson: What did you learn in your last training?

He thought for a while: Something about sales techniques... I don't remember the specifics.

I asked again: When a customer gives you a hard time, what do you do?

He said: I just wing it.

That's the problem with traditional training. It teaches you to "know," not to "be able." It focuses on "did they learn," not "can they do."

Practice and feedback are disconnected. Nobody watches you while you practice. Only after you're done does someone tell you what you did wrong. By next time, you've forgotten why you said it that way.

---

How to solve this?

At first, the team thought: let's add AI features to the existing system. AI to grade assignments, AI to generate questions.

I stopped them. This isn't about adding features. We need to rethink: if there's AI, what should a training product look like?

We used a term internally: AI-Native.

What does that mean? It's not about using AI. It's about assuming from the start: AI is the system's intelligent core. Not a tool, not a plugin.

Traditional products have dead systems. Processes are preset, users follow steps. AI in there is at most an assistant.

AI-Native products have living systems. Processes can be dynamically generated. AI participates in judgment and feedback at every step.

From "course delivery system" to "capability-building system."

What does this transformation mean?

Before, the training unit was "a course." You finish a course, the system records it as complete.

After, the training unit is "one effective practice." You practice once, AI gives feedback, you adjust, capability changes.

Before, interaction was "clicking." Watch videos, do questions, take exams.

After, interaction is "dialogue." You practice with AI, AI gives real-time feedback.

Before, feedback was "post-evaluation." Only after practice do you know what was wrong.

After, feedback is "in-process feedback." During practice, AI tells you: that sentence could be phrased better this way.

---

Direction clear, time to build.

We did several things.

**Real-time assistance.**

In traditional mode, learners practice in isolation. The script book is there, but by the time you flip to it, it's too late. The AI coach is nearby, but only comments after practice is done.

We changed this. When learners practice with an AI customer, AI can give real-time hints: You're in the needs discovery phase now, try asking more open-ended questions; the customer just mentioned price, you could respond this way.

Not speaking for the learner, but giving them "handholds."

**Conversational course creation.**

In traditional LMS, creating courses is specialized work. Many fields to fill, many rules to configure. Only training department staff can operate it. Front-line business experts can't participate at all.

We switched approaches: Let trainers talk to AI, describe what kind of course they want, what kind of customer role, what scenarios. AI automatically generates course structure, trainers adjust.

Turning "configuration behavior" into "expression behavior."

**Learner-created practice.**

In real business, the most valuable cases often come from the front lines. A customer said something strange, a scenario not in any textbook. Traditional systems can't capture this content.

We built a feature: Learners can create their own AI customers to practice against their specific challenges. Created cases, after review, can become organization-shared courses.

Letting content shift from "top-down distribution" to "bottom-up emergence."

**Closed-loop feedback.**

Practice done, AI scores and comments. But that's not all.

We automatically extract "golden scripts" from high-scoring practices and recommend them to other learners. After viewing the score report, learners can continue asking AI about specific deduction points: What did I say wrong? How should I have said it?

Turning evaluation into fuel for system evolution.

---

Enough about the good stuff, let's talk about the dilemmas.

**First dilemma: Should AI proactively interrupt?**

At first, we made AI very active. Every sentence the learner said, AI would jump in with suggestions.

Learner feedback: Too annoying. Practicing and getting constantly interrupted, can't concentrate at all.

We discussed for a long time. Some felt AI should be real-time, otherwise where's the value. Others felt learning needs trial-and-error space, AI shouldn't over-intervene.

Finally we set a principle: Only intervene at key decision points.

What's a key decision point? Like when a learner is stuck, hasn't spoken for ten seconds. Or when a learner says something clearly inappropriate.

Other times, AI stays quiet, lets learners practice on their own.

Learning isn't being replaced, it's being amplified.

**Second dilemma: How comprehensive should features be?**

In product design, everyone has impulses: This feature has value, that feature has value. Should we do presentation training? Script memorization? Exams?

If we don't, will customers think the product is too simple?

My judgment: Features can be many, but the core can't be scattered.

We set three principles: Minimize interface interaction, make dialogue central; Make AI coach intelligence central; Make AI coach everywhere, getting smarter with use.

Every new feature gets asked: Does it fit these three? If not, don't do it.

---

Looking back, I think we got a few things right.

Didn't treat AI as a feature, but as the system brain.

Many products add AI at the edges. AI generation here, AI analysis there. AI is just decoration.

We put AI at the center. The entire product logic is designed around AI.

Used dialogue to reconstruct the relationship between people and systems.

Traditional training systems have users passively receiving. System pushes whatever course, users take whatever course.

Dialogue-based interaction changed this relationship. Users actively express, system responds. Users aren't "using" the system, they're "collaborating with" it.

Made organizational capability capable of self-evolution.

Traditional training has dead content. Whatever courses the training department produces, everyone learns.

UGC mechanism lets front-line experience flow back. AI automatically extracts scripts, letting best practices flow. Organizational experience can be systematically accumulated and reused for the first time.

---

What's my biggest takeaway from building this product?

Technology isn't the hardest part.

Large language models are powerful enough. Having them play customers, give feedback, extract scripts—none of this is hard.

The hard part is thinking clearly: What exactly do you want it to do?

What's the purpose of training? Not "teaching done," but "change happening."

Can AI help change happen? Yes. But the prerequisite is defining clearly: What kind of change, in what scenarios, how to judge that change happened.

AI can't answer these questions. Only people can.

A product manager's value isn't in technology, it's in defining problems.