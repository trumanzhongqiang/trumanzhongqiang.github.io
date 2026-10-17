# Line-level LRC: keep the original lyrics, borrow only the timestamps

Suno's downloads do not include an LRC file. Saving a Whisper transcript as the lyric sheet changes the song. This Agent Skill splits the job: local whisper.cpp supplies timestamps, and every line written to the file stays the user's original text.

**GitHub:** [trumanzhongqiang/lyrics-align-lrc](https://github.com/trumanzhongqiang/lyrics-align-lrc) · v1.0.0 · MIT

## How it works

```
audio + one lyric line per row
  → whisper.cpp (ggml-small, lyrics are not used as the prompt)
  → segment start when there are enough segments; token start when one segment swallowed several lines
  → monotonic alignment against the original lines
  → write a line-level LRC only if coverage reaches 75%
```

Blank lines are ignored. A bracket-only section label such as `[Verse]` is omitted unless the user asks to keep it, in which case it shares the next line's timestamp. The file is UTF-8 with BOM and a `[ti]` tag. `[length]` is written when ffmpeg or ffprobe can read the duration.

## Why the lyrics are not fed back as a prompt

On 17 October 2026, a Chinese song of about 119 seconds repeats its verse. Passing the lyrics as the initial prompt, and carrying that prompt into every window, made the repeat disappear from the transcript. Coverage fell to 65% and the script refused to write a file. Without the prompt, 46 of 48 lines matched. The skill therefore does not send a prompt.

## What was checked

Both songs already had a hand-timed LRC. That file was used only to compare timestamps.

- About 63 seconds: 16/16 lines. Median absolute difference 0.12 seconds, maximum 0.24 seconds.
- About 119 seconds: 46/48 lines. Median 0.21 seconds, maximum 1.12 seconds. The two weak lines are the same repeated lyric, which the transcript barely caught.

The timestamps are line starts, not word-level karaoke. The repository does not ship the whisper.cpp binary or the model. The traditional-to-simplified table used before comparison comes from OpenCC.
