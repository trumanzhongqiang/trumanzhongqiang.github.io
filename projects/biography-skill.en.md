# Biography Skill: An Agent That Helps Ordinary People Write Their Life Stories

Everyone deserves to be recorded, but biography writing has a high barrier for ordinary people. This Agent Skill turns "writing a biography" into a natural conversation — users simply chat about their lives, and AI handles the rest.

## How It Works

- **Interview-style collection**: Like a professional biographer, it guides users to recall important moments, key people, and turning points through a series of warm, thoughtful questions
- **Structured organization**: Automatically archives scattered memories along a timeline, identifies thematic threads, and fills in dates, places, and relationships
- **Chapter-based writing**: Organizes material into coherent chapters, preserving the user's own voice and emotional color — not a dry chronology

## Design Considerations

- **Low barrier**: No writing skills required — if you can chat, you can write your biography
- **Incremental**: Supports multiple sessions and continuation. Life is long; a biography can be written slowly
- **Privacy**: All material stays local, and users control any sensitive content

## Technical Implementation

Built on the Agent Skill architecture: interview strategy orchestration + memory management + long-form writing constraints. Key challenges solved include material consistency over long contexts (proactively confirming with users when details conflict) and maintaining a unified writing voice.
