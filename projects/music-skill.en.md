# Original Music Skill: from one emotion to lyrics, a style prompt, and a storyboard

Music creation shouldn't belong only to professionals. Most people can't explain "BPM and modes" — but they can say "heartbroken yet defiant". This Agent Skill takes one emotion line and walks a complete AI music pipeline: lyrics → style prompt → MV concept → storyboard → first/last-frame video prompts. A local Suno CLI can generate audio and video. The published run did not; it stops at text.

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

## A real run: back-to-work blues

On 2026-10-13 the only input was "after National Day I cannot face going back to work." The run produced an emotion brief, lyrics, a Suno style prompt, an MV concept, and a storyboard. **No audio file was generated**, so this is not yet a song you can hear.

Chorus:

> 我不想上班 不想上班
> 灵魂还在泸沽湖的船
> 身体在格子间假装在线
> 等下一个假期 再活一遍

The six text files are in [`examples/song-假期综合征/`](https://github.com/trumanzhongqiang/music-skill/tree/main/examples/song-%E5%81%87%E6%9C%9F%E7%BB%BC%E5%90%88%E5%BE%81). [`tests/test-cases.md`](https://github.com/trumanzhongqiang/music-skill/blob/main/tests/test-cases.md) still lists nine scenes that have not been run.

Three rules were written back from this run: when the mood can go several ways, ask before defaulting; deliver first/last frames in batches of at most ten shots; do not replace real details when the user supplied a true story.

Two gaps from the first pass are filled in. There is still no audio:

- The style prompt now excludes auto-tune, EDM drops, and trap 808s.
- Pronunciation is pinned in three places: 还 is hái, not huán; 泸沽湖 stays one place name; 续 is xù.

No Suno CLI is available on this machine, so no mp3 was rendered. The text package is in [`examples/song-假期综合征/`](https://github.com/trumanzhongqiang/music-skill/tree/main/examples/song-%E5%81%87%E6%9C%9F%E7%BB%BC%E5%90%88%E5%BE%81).
