# Medical comic video: one lab result, one hundred seconds

Two numbers on a lab sheet, one normal and one flagged, and most people cannot tell which to trust. This project turns each topic into a 3:4 vertical paper-cut short of about a hundred seconds: three ideas per episode, the mechanism performed by the objects on screen instead of a caption card, and no AI-generated art.

**GitHub**: [trumanzhongqiang/medical-comic-pipeline](https://github.com/trumanzhongqiang/medical-comic-pipeline) · The method is open, the assets are not: the writing manual, the checkers, the render components and seven real scripts are in the repo; the per-line narration, the music and the avatar are not. `README.md` is enough to run one episode.

## What is open, what is not

The valuable part is how to write and how to check: six writing techniques, a cue-timing algorithm, twenty-three checkers, and a retrospective that records why six rounds of rework happened. The picture is code, too — `remotion/src/art/` holds one file per condition, with the vector shapes, easing curves and palette inside — so it counts as method and is published.

Three kinds of asset stay out: the per-line narration (my voice), the music (third-party licence), the avatar photo. None of them enter git, and the repo licence does not cover them.

Splitting container from content means **you can use your own assets, or none at all**:

- To try the method: clone and render. A missing narration line becomes silence, a missing track becomes a silent bed of the same length — picture, pacing and sound-effect placement stay correct, only the voice is gone.
- To actually make an episode: drop your own recording in as `voice/v000.wav`, your music as `bgm.mp3`, your portrait in place of the mark — **no code changes**. Paths and filenames are the interface; the rules are in `pipeline/ASSETS.md`.

This is not tidiness for its own sake. Once a voice lands in a public repo it cannot be taken back. And a repo that needs a full asset set before it will run gives nobody a reason to trust it first.

## The films

![Stills from six episodes: blood sugar, blood pressure, gout, fatty liver](medical-comic/stills-grid.jpg)

| Episode | Topic | Length |
|---|---|---|
| 1 | Diabetes: is it just eating sugar | 1:56 |
| 2 | Two numbers on a lab sheet | 1:40 |
| 3 | Why blood pressure has two numbers | 1:47 |
| 4 | How to read a lipid panel | 2:19 |
| 5 | Where the fat in the liver comes from | 2:47 |
| 6 | How uric acid becomes a needle | 2:11 |
| 7 | Hyperthyroidism and hypothyroidism | 3:56 |

Copy the writing from episodes 2, 3 and 4. Those three were redone against `pipeline/WRITING.md`. Episodes 1, 5, 6 and 7 are earlier cuts with a different structure; do not use them as the template. Episode 2 was 3:57 and episode 3 was 2:52 before — not sped up, cut down. Fewer points, each one explained properly.

## Running one episode

There is one place to edit copy: `episodes/<slug>/voice/text.txt`, one sentence per line. Subtitles, cue timings and narration are all derived from it. Do not revise the script anywhere else.

```bash
python3 pipeline/new_episode.py ep008-xxx "标题"
python3 pipeline/lint_narration.py ep008-xxx
# Narration is not in this repo: write voice/NNN.wav per line, then time the cues
python3 pipeline/build_cues.py episodes/ep008-xxx --lead 1.2 --gap 0.70
python3 pipeline/import_cues.py episodes/ep008-xxx
node remotion/scripts/check_wrap.mjs episodes/ep008-xxx
python3 pipeline/render_remotion.py episodes/ep008-xxx --concurrency 6
python3 pipeline/compose.py episodes/ep008-xxx
python3 pipeline/qacheck.py episodes/ep008-xxx
```

A one-beat fix does not need a full render: `render_remotion.py <ep> --from 12 --to 20` rerenders that range, then run compose again.

Rendering goes through Remotion (brings its own Chromium, or point `CHROME_PATH` at a local one); compositing uses ffmpeg. Picture components live in `remotion/`, one file per condition. A medical claim goes through `pipeline/factcheck.md` before it is written into the script.

## How one line of narration becomes a frame

![Five steps](medical-comic/pipeline.svg)

Every line of narration gets its own audio file. Cue timings are computed from the real audio length, then converted into beats. Scene components cut on beats, and elements enter and leave at named times. Sound effects are planned per action — which beat, which gesture, how loud — then re-pinned against the beats after composition and measured for drift.

Every object, gesture and colour is drawn in code: paper layers come from same-hue shading and three to eight pixels of offset. No stock library. The cost is that changing one line means re-recording it, re-timing the cues and re-rendering those beats, about ten minutes per episode.

## The writing was harder than the rendering

Six rounds of rework went into the script, not the pipeline. Settle these before writing a line:

- **List the points first, then write.** Three per episode, four or five sentences each, about five seconds a sentence. Three minutes of material does not fit into ninety seconds; forcing it is what makes a film incomprehensible.
- **Explain the term where it appears.** Half a clause of plain language in the same sentence that names it, not a separate beat later.
- **Unpack abstract nouns into who did what.** Not "the average gets pushed up" but "add those numbers up and divide, and it goes up".
- **No metaphor that needs its own model first.** One draft called glycation "a ledger". The viewer had to understand bookkeeping before understanding blood sugar. Deleted.
- **Decide what the derivation looks like on screen before writing the line.** The average line and the circled recent days were visuals first, sentences second.

## Numbers from the linter

Every script goes through a checker for clause density, sentence-length rhythm, abstract subjects, unexplained terms, polyphonic characters and inconsistent units:

| | Episode 2 | Episode 3 |
|---|---|---|
| Sentences / beats | 16 / 9 | 20 / 13 |
| Mean sentence | 21.9 chars | 16.9 chars |
| Std. deviation | 4.1 | 4.9 |
| Hard findings | 1 | 0 |

A standard deviation under 5 means a flat line: every sentence the same length, and attention drops about ten sentences in. Episode 3 places an eight-character sentence to land on and reaches 4.9 — still just under the line, so that episode remains flat. The one hard finding in episode 2 is a 31-character sentence that still holds four clauses. Zero hard findings is the bar for calling a script done.

## What broke along the way

**Voice cache.** The narration script skips a wav that already exists, so after `voice/text.txt` changes the audio still reads the old line and the subtitle no longer matches. Move that line's old file out before re-recording it, and transcribe the whole narration track against the script before composing.

**Animation timing.** `on(a, b)` in `remotion/src/art/` treats the second argument as the end, and the window is `b - a`. `on(0.72, 0.14)` gives a negative length and the element never appears. To show it from 0.72 to 0.86, write `on(0.72, 0.86)`, not `on(0.72, 0.14)`.
