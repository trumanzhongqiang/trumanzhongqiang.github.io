# Medical comic video: one lab result, one hundred seconds

Two numbers on a lab sheet, one normal and one flagged, and most people cannot tell which to trust. This project turns each topic into a 3:4 vertical paper-cut short of about a hundred seconds: three ideas per episode, the mechanism performed by the objects on screen instead of a caption card, and no AI-generated art.

**WeChat account**: 医学科普漫画 · 7 films, from 1:40 to 3:56
**GitHub**: [trumanzhongqiang/medical-comic](https://github.com/trumanzhongqiang/medical-comic) · scripts, cue sheets, per-line narration tracks and the render components

## The films

![Stills from six episodes: blood sugar, blood pressure, gout, fatty liver](medical-comic/stills-grid.jpg)

| Episode | Topic | Length |
|---|---|---|
| 2 | Two numbers on a lab sheet | 1:40 |
| 3 | Why blood pressure has two numbers | 1:43 |
| 1 | Diabetes: is it just eating sugar | 1:56 |
| 6 | How uric acid becomes a needle | 2:11 |
| 4 | Why cholesterol has a good and a bad side | 2:36 |
| 5 | Where the fat in the liver comes from | 2:47 |
| 7 | Hyperthyroidism and hypothyroidism | 3:56 |

Only episodes 2 and 3 follow the method described below. The other five are earlier versions and are queued for a rewrite. Episode 2 was 3:57 and episode 3 was 2:52 before — not sped up, cut down. Fewer points, each one explained properly.

## How one line of narration becomes a frame

![Five steps](medical-comic/pipeline.svg)

Every line of narration gets its own audio file. Cue timings are computed from the real audio length, then converted into beats. Scene components cut on beats, and elements enter and leave at named times. Sound effects are planned per action — which beat, which gesture, how loud — then re-pinned against the beats after composition and measured for drift.

Every object, gesture and colour is drawn in code: paper layers come from same-hue shading and three to eight pixels of offset. No stock library. The cost is that changing one line means re-recording it, re-timing the cues and re-rendering those beats, about ten minutes per episode.

## The writing was harder than the rendering

Six rounds of rework went into the script, not the pipeline. Four rules now apply before anything gets written:

- **List the points first, then write.** Three per episode, four or five sentences each, about five seconds a sentence. Three minutes of material does not fit into ninety seconds; forcing it is what makes a film incomprehensible.
- **Explain the term where it appears.** Half a clause of plain language in the same sentence that names it, not a separate beat later.
- **Unpack abstract nouns into who did what.** Not "the average gets pushed up" but "add those numbers up and divide, and it goes up".
- **No metaphor that needs its own model first.** One draft called glycation "a ledger". The viewer had to understand bookkeeping before understanding blood sugar. Deleted.
- **Decide what the derivation looks like on screen before writing the line.** The average line and the circled recent days were visuals first, sentences second.

## Numbers from the linter

Every script goes through a checker for clause density, sentence-length rhythm, abstract subjects, unexplained terms, polyphonic characters and inconsistent units:

| | Episode 2 | Episode 3 |
|---|---|---|
| Sentences / beats | 16 / 9 | 19 / 12 |
| Length | 1:40 | 1:43 |
| Mean sentence | 21.9 chars | 17.3 chars |
| Std. deviation | 4.1 | 5.6 |
| Hard findings | 1 | 0 |

A standard deviation under 5 means a flat line: every sentence the same length, and attention drops about ten sentences in. Episode 3 deliberately places an eight-character sentence to land on.

## What broke along the way

**Voice cache.** The TTS tool skips files that already exist, so after an edit the subtitles changed while the audio still read the old draft. Now the old file is moved out before a rewrite, and the whole narration track is transcribed and checked line by line before delivery.

**Frame naming.** The renderer emits `element-00001.jpeg` while the compositor only reads `frame_000001.jpg`. A mismatch silently drops half the frames and the film comes out short. The pipeline now renames on the way out.

**Animation timing.** The second argument of the timing helper is an end point, not a duration. `(0.72, 0.14)` yields a negative length and the element never appears.

**Loudness.** When linear normalisation is blocked by true peaks, a nominal −14 LUFS lands at −15.2. The pipeline now measures the render and trims by the difference.

## Still open

One 31-character sentence with four clauses in episode 2 has not been split yet, and episodes 1, 4, 5, 6 and 7 have not been rewritten to this standard.
