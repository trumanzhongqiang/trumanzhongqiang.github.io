# Science Comic Skill: One-Click Science Comics for Content Creators

The pain of science content: text gets no readers, and most creators can't draw. This Agent Skill turns a single science topic into a publishable comic strip — factually accurate, character-consistent across panels, with clean readable text.

**GitHub**: [trumanzhongqiang/science-comic-skill](https://github.com/trumanzhongqiang/science-comic-skill) ｜ v1.1.0 ｜ MIT

## How it works

```
Topic analysis → Fact-checking (knowledge cards, traceable sources)
              → Character card anchoring (appearance/hex colors/style as an anchor prompt)
              → Storyboard (one knowledge point per panel, approved before any image)
              → Panel-by-panel generation (anchor prompt embedded verbatim)
              → Text compositing in post (the model never touches text)
```

- **Topic analysis**: core knowledge points distilled, paced as "hook → layered breakdown → takeaway"
- **Fact-checking first**: every knowledge point gets a card — one-sentence conclusion, source, visualization idea
- **Storyboard**: per-panel scene, narration, and dialogue; one knowledge point per panel; your approval before drawing
- **Panel generation**: each prompt = style descriptor + character anchor + panel scene, with anti-confusion for multi-character frames
- **Text in post**: bubbles and titles left blank, filled precisely afterward — no garbled characters, editable forever

## Key design decisions

**Why fact-check before any creation?** The prettier the comic, the wider a wrong fact spreads — plain art can be fixed, wrong science can't. Knowledge points that fail verification never enter the script; unverifiable claims are flagged by name instead of hidden behind "scientists believe".

**Why does consistency rely on verbatim anchor reuse?** Image models re-imagine with every generation — without a locked description, the protagonist in panel 3 is a stranger in panel 1, and a series collapses. The character card (appearance, exact hex colors, art style) is compressed into an anchor prompt embedded verbatim in every panel of every episode.

**Why is all text composited in post?** Image models reliably garble Chinese text, and the damage can't be patched — only redrawn. The model draws blank bubbles; text is added later — clean, editable, restylable.

## See it in action

The repo's [`examples/demo-comic.md`](https://github.com/trumanzhongqiang/science-comic-skill/blob/main/examples/demo-comic.md) demos the full chain with "why is the sky blue": knowledge cards → character anchor prompt → storyboard excerpt → a single panel's image prompt, with the discipline visible at every step.
