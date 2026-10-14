# Original Music Skill: From One Emotion to a Complete Song

Music creation shouldn't belong only to professionals. Most people can't explain "BPM and modes" — but they can say "heartbroken yet defiant". This Agent Skill takes one emotion line and walks a complete AI music pipeline: lyrics → style prompt → MV concept → storyboard → first/last-frame video prompts. With a local Suno CLI installed, it can go further and generate the actual audio and video assets.

**GitHub**: [trumanzhongqiang/music-skill](https://github.com/trumanzhongqiang/music-skill) ｜ v1.3.0 ｜ MIT

## How it works

```
Emotion input
  → Emotional core anchoring (emotion pair / key imagery / energy curve / style anchor)
  → Lyrics (rhyming discipline + vocal arrangement + pronunciation guard)
  → Style prompt (five elements + exclude styles, 16 genre templates)
  → MV concept → storyboard → first/last-frame prompts → video prompts
  → Optional: execute generation via local tools
```

- **Emotion as input**: describe a feeling or a story — no music theory required
- **Pipeline or single stage**: run end-to-end, or ask for lyrics only / MV only — every artifact is self-contained
- **Chinese songwriting focus**: built-in rhyme library (open/closed vowel selection, chorus hook patterns); every chorus line must rhyme
- **Pronunciation guard**: before delivery, lyrics are scanned for polyphonic characters, Arabic numerals, and tricky English — the "Suno sang the wrong character" class of failure is killed at the writing stage

## Key design decisions

**Why does every stage share one "emotional core"?** Multi-stage generation without an anchor drifts: the lyrics are in the rain, the style prompt is on fire, the MV is arthouse. Stage 0 distills the emotion into four checkable fields, and the quality gate specifically hunts cross-stage contradictions.

**Why may first/last frames differ only in "action development"?** Img2video models turn frame differences into warping — flickering characters, jumping scenes. So subject, setting, lighting, and tone are byte-identical between frames, audited with a verbatim diff in the quality check.

**Why do style prompts include "exclude styles"?** Saying what you want isn't enough — omit `auto-tune` and the model may default to it. Every genre template ships with an exclude line, derived from "what processing would ruin this genre".

## See it in action

[`examples/demo-song.md`](https://github.com/trumanzhongqiang/music-skill/blob/main/examples/demo-song.md) demos the full chain from "the relief of a solo walk after summer rain" to lyrics, Suno prompt, and storyboard frame prompts. [`tests/test-cases.md`](https://github.com/trumanzhongqiang/music-skill/blob/main/tests/test-cases.md) logs a real test run — "post-holiday syndrome, no mood to work" — that passed all four quality gates; three issues found during the run were written back into the skill's rules.
