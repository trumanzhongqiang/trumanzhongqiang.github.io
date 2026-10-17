# 歌词对齐 LRC：原词不动，只借 Whisper 的时间

Suno 的下载里没有 LRC。把 Whisper 听到的字直接存成歌词，歌会变掉。这个 Agent Skill 把两件事拆开：本机 whisper.cpp 只提供时间，写进文件的每一句仍是用户给的原词。

**GitHub 仓库**：[trumanzhongqiang/lyrics-align-lrc](https://github.com/trumanzhongqiang/lyrics-align-lrc) ｜ 当前版本 v1.0.0 ｜ MIT 开源

## 它是怎么工作的

```
音频 + 按行分开的原词
  → whisper.cpp（ggml-small，不把歌词当 prompt）
  → 分段够用就取分段起点，一行被并进同一段就改用 token 起点
  → 和原词做顺序对齐
  → 覆盖率达到 75% 才写行级 LRC
```

- 空行忽略。整行是 `[Verse]` 这类段落标题时默认不写入，需要时可以保留，并与下一句共用时间
- 输出是 UTF-8 BOM 的 LRC，有 `[ti]`。有 ffmpeg 时写 `[length]`，没有就省略
- 低于门槛不写文件，也不手改时间

## 为什么默认不把歌词塞给 Whisper

2026-10-17，一首约 119 秒、主歌重复一次的中文歌。加上初始 prompt 并在每个窗口重复它之后，重复段从转写里消失，覆盖率掉到 65%，脚本拒绝出文件。去掉 prompt 之后，46/48 行能对上。所以技能默认不传 prompt。

## 实测

对照的是已经手填过的 LRC，只比时间，不改词。模型是 whisper.cpp 的 `ggml-small`。

- 约 63 秒：16/16。与手填时间的中位差 0.12 秒，最大 0.24 秒。
- 约 119 秒：46/48。中位差 0.21 秒，最大 1.12 秒。两句低分是同一句反复出现的歌词，转写几乎没听清。

这是行开始时间，不是逐字卡拉 OK。仓库不附带 whisper 可执行文件，也不附带模型。繁简转换用的字表来自 OpenCC，只参与比较。
