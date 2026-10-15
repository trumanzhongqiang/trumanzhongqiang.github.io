# Biography Skill: Helping Ordinary People Write Their Own Life Story

Everyone deserves to be remembered, but biography writing has too high a barrier for ordinary people. This Agent Skill turns "writing a biography" into a natural conversation: the AI acts as a professional biographer-interviewer, guiding you through memories, organizing scattered recollections into a timeline, and finally drafting coherent, warm chapters.

**GitHub**: [trumanzhongqiang/biography-skill](https://github.com/trumanzhongqiang/biography-skill) ｜ v1.2.0 ｜ MIT

## How it works

```
Chat memories → Interview-style collection (guided questions, verbatim quotes)
             → Structured archive (timeline + characters + conflict confirmation)
             → Book blueprint (chapter plan, confirmed with you)
             → Chapter drafting (each chapter reviewed, resumable forever)
```

- **Interview, not questionnaire**: one question at a time, detail-driven follow-ups. Never "was your childhood happy" — instead "what was the first thing you did after school?"
- **Structured archive**: memories land in local files in real time — timeline, character table, open questions. Contradictions are confirmed with you on the spot, never silently resolved
- **Chapter drafting**: an eight-chapter structure that preserves your own catchphrases and tone; 2,000–4,000 characters per chapter, reviewed by you before finalization
- **Photos & illustrations**: the AI asks for old photos at natural moments; if none exist, it offers clearly-labeled AI-generated illustrations after delivery — never passed off as real photos

## Key design decisions

**Why keep verbatim quotes?** The biography's first reader is the subject. Polish away their dialect and catchphrases, and they won't recognize their own voice. The skill's red line: polish grammar only, never the tone.

**Why confront contradictions immediately?** Silently recording two versions buries the contradiction in the final draft — discovered only at proofreading, forcing a full chapter rewrite. So conflicts go into an open-questions list and get a gentle "which one is right?" on the spot.

**Why a four-point quality check?** Biographies are written in sessions; individually fine chapters often fail as a book. Before any chapter ships: traceable facts (every hard fact points back to source material), consistent voice (any two chapters read as one pen), clean prose (AI clichés deleted on sight), balanced pacing (chapter openings alone should tell the whole life's arc).

## Privacy & boundaries

All materials stay in your local workspace — nothing is uploaded. Sensitive topics are never probed; if you share, the AI listens without dramatizing, and you decide what stays in the book.

## A fictional walkthrough

This is not a real person's biography. The repo's [`examples/demo-interview.md`](https://github.com/trumanzhongqiang/biography-skill/blob/main/examples/demo-interview.md) walks through a full (fictional) demo: interview dialogue → material archive → chapter opening → the four-point quality check.

## A sample chapter (fiction, written to the skill rules)

There is no published biography by this author with a subject's permission in public sources. This is not a user case. It only shows the prose rule: facts point back to words already said, and the speaker's phrasing stays.

> I went into the brickworks at sixteen. Not because I wanted to. The wheat had failed, and my dad said if we waited any longer we would run out of food.
> 
> The first day, the master did not teach me the work. He took me to the accounts room. My name on the tag was misspelled. My ma later kept saying, "They cannot even write the name straight." I did not fix it. Fixing it meant finding the team leader, and he was not there. No leader, no job.
> 
> My dad did not talk much. After the sweet-potato business he said four words I still remember. He did not give me any other speeches.

The paragraph uses only three things already in the demo interview. It does not invent a wage, a year, or the master's name.
