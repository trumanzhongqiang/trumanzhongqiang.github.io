# Science Comic Agent Skill: One-Click Science Comics for Content Creators

The pain point of science communication content: plain text gets ignored, and comics require drawing skills. This Agent Skill lets creators produce a full set of publishable comic images from just a topic.

## How It Works

- **Topic understanding**: Takes a topic or a piece of science copy, extracts core knowledge points, and plans a narrative arc of "hook → step-by-step breakdown → takeaway"
- **Script & storyboard**: Generates a panel-by-panel comic script, with visual descriptions, narration, and speech bubbles for each panel
- **Style & character design**: Locks down character appearance (looks, color palette, style keywords) first, so the protagonist looks consistent across panels
- **Image generation**: Produces comic images panel by panel, handling multi-character composition, expressions, and body language
- **Smart text strategy**: Image models render Chinese text unreliably, so the skill reserves blank bubbles and title areas, then fills text precisely in post-production

## Design Considerations

- **Scientific accuracy first**: Knowledge points are verified via retrieval before scripting, avoiding "great-looking comics with wrong facts"
- **Character consistency is the lifeline**: Cross-panel consistency relies on the "character card" mechanism — character descriptors act as an anchor embedded in every shot's prompt
- **Batch serialization**: The same character card can be reused across an entire series, keeping the style stable for serialized accounts

## Technical Implementation

Built on the Agent Skill architecture: topic analysis → fact-checking → storyboard scripting → character-card anchoring → panel-by-panel image generation → bubble text compositing.
