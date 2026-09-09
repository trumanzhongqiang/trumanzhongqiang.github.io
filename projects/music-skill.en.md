# Original Music Skill: From a Single Emotion to a Complete Song

Music creation shouldn't belong only to professional musicians. This Agent Skill takes a user's emotional description and produces a complete AI music creation pipeline: lyrics, music style, MV, storyboard, and video.

## How It Works

Users only need to describe an emotion or a story — like "the relief of walking alone after a summer night rain." The skill then generates, in sequence:

- **Lyrics**: Created from emotional imagery, with controlled rhyme and structure (verse/chorus/bridge)
- **Music style prompts**: Style prompts for music generation models like Suno (genre, tempo, instrumentation, vocals, emotional arc)
- **MV concept design**: Overall visual style, color palette, narrative thread
- **Storyboard script**: Shot-by-shot visual descriptions, framing, camera movement
- **First/last frame prompts**: Generates first-frame and last-frame image prompts for each shot (for image-to-video models)
- **Video prompts**: First/last frames + motion description, handed to video generation models for the final clips

## Design Considerations

- **Emotion as the starting point**: Ordinary people can't articulate "BPM and key signatures," but they can say "heartbroken yet stubborn" — so the input is emotional language
- **All-in-one yet stepwise**: Run the entire pipeline with one command, or generate only lyrics, only the MV design — use whatever you need
- **Style consistency**: Lyrics imagery, music style, and MV visuals share the same "emotional core," avoiding disconnected outputs

## Technical Implementation

Built on the Agent Skill architecture: emotion parsing → multi-stage generation pipeline (text → audio prompts → image prompts → video prompts), with cross-stage style anchoring and consistency constraints at its core.
