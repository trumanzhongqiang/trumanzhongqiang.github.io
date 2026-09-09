# My Home Cuisine: Designing a Family Menu That's Truly Your Own

"What's for dinner today?" is a daily dilemma. This Agent Skill doesn't chase viral recipes — it helps every family build a home menu that truly belongs to them.

## How It Works

- **Family profile**: Records each family member's taste preferences, dietary restrictions, allergies, kitchen equipment, and cooking skill level
- **Menu design**: Generates weekly home-cooking menus that balance nutrition, ingredient variety, and cooking time — quick weekday dishes and weekend feasts are automatically distinguished
- **Ingredient planning**: Automatically generates a shopping list from the menu, merging overlapping ingredients to reduce waste
- **Continuous evolution**: Feedback like "too salty" / "the kids didn't like it" / "want this again" makes the menu understand your family's stomach better over time

## Design Considerations

- **Home cooking first**: Recommends dishes with common ingredients and replicable steps — not "save-and-forget" recipes requiring ten special seasonings
- **The user is in charge**: AI provides options and rationale, but the final call belongs to the family chef
- **Everyday realism**: Considers contextual continuity like "had chicken yesterday, let's switch it up today"

## Technical Implementation

Built on the Agent Skill architecture: family preference memory + constrained planning (nutrition, time, budget) + iterative feedback learning.
