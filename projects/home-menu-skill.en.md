# Home Menu Skill: A Weekly Menu That Truly Belongs to Your Family

"What should we eat today?" is a daily dilemma. This Agent Skill doesn't push trendy recipes — it helps each family build their own private menu that gets smarter with every meal.

**GitHub**: [trumanzhongqiang/home-menu-skill](https://github.com/trumanzhongqiang/home-menu-skill) ｜ v1.1.1 ｜ MIT

## How it works

```
Chat out a family profile (tastes / restrictions / equipment / cooking skill)
    → Weekly menu (quick weekday dishes vs weekend feasts, no repeats back-to-back)
    → Shopping list (merged ingredients, pantry deduction, two-way reconciliation)
    → Feedback loop ("too salty" recalibrates; "want it again" enters signature dishes)
```

- **Family profile**: every member's tastes, dislikes, allergies, kitchen equipment, and cooking skill — the foundation of every recommendation
- **Menu design**: weekly home-cooking menus with one-line rationale per dish, so the home chef judges instead of blindly following
- **Shopping list**: auto-merged ingredients with pantry deduction; every item annotated with "used in which dish on which day"
- **Continuous evolution**: feedback like "too salty" or "the kid won't eat peppers" is persisted on the spot, and next week's menu visibly changes

## Key design decisions

**Why zero tolerance for allergies?** The cost of "a little should be fine" is trust gone instantly — or worse, someone in hospital. Uncertain ingredients (e.g. sauces containing wheat) are flagged and asked about, never silently allowed.

**Why two-way reconciliation?** A menu listing steamed fish while the shopping list has no fish leaves the cook stranded in the supermarket. Every item on the list must point back to a dish; every ingredient in the menu must appear on the list — otherwise the menu goes back for rework.

**Why must feedback be persisted?** Saying "noted for next time" while recording nothing means the same dish is too salty again next week — and the user concludes "feedback is pointless". So every piece of feedback lands in local records and updates the profile, with an immediate explanation of what will change.

## Privacy & boundaries

All data stays in your local workspace — nothing is uploaded. The skill avoids ingredients at the taste level (less sugar, less oil) but makes no nutritional or medical claims; consult a doctor or dietitian for special health needs.

## See it in action

The repo's [`examples/demo-week.md`](https://github.com/trumanzhongqiang/home-menu-skill/blob/main/examples/demo-week.md) walks a full (fictional) loop: family profile → weekly menu → shopping list → how one "too salty" changes next week.
