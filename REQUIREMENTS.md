# Coffee Personality Quiz — Requirements

## Overview
A personality quiz that matches users to a coffee drink based on their lifestyle and preferences.

---

## Personality Results (4 types)

| Personality | Coffee Match |
|-------------|-------------|
| The Bold Adventurer | Double Espresso |
| The Cozy Classic | Medium Roast with Cream |
| The Social Butterfly | Cappuccino |
| The Indulgent Treat | Mocha with Extra Whip |

---

## Result Display
- **Single winner**: Show one personality type with their coffee match
- Clean, shareable result card
- Include a [Share My Result] button

---

## Visual Style: Warm & Cozy
- Background: warm cream `#F5ECD7`
- Accent: espresso brown `#3C1F0E`
- Buttons: caramel `#C4813A`
- Font: rounded, friendly
- Images: emojis only (no custom illustrations)

---

## Quiz Questions (5)

**Q1: It's Saturday morning. What are you doing?**
- 🏔️ Hiking at sunrise → Bold Adventurer
- 🛏️ Still in bed, no regrets → Cozy Classic
- 🥂 Brunch with friends → Social Butterfly
- 🍞 Baking something cozy at home → Cozy Classic

**Q2: How do you take risks?**
- 🚀 I jump in headfirst → Bold Adventurer
- 📚 I research everything first → Cozy Classic
- 👯 I ask friends what they think → Social Butterfly
- 🛋️ I avoid them when possible → Indulgent Treat

**Q3: Your ideal work environment?**
- 📢 Loud, buzzy open office → Social Butterfly
- 🏠 Home office, total focus → Cozy Classic
- ☕ Coffee shop background noise → Bold Adventurer
- 🌍 Wherever I happen to land → Bold Adventurer

**Q4: What's your relationship with mornings?**
- ⚡ I own them — up before 6 → Bold Adventurer
- 😐 I tolerate them → Cozy Classic
- 😩 I actively avoid them → Indulgent Treat
- ⏰ I need at least 3 alarms → Social Butterfly

**Q5: Your phone's most-used app?**
- 🗺️ Maps — always going somewhere → Bold Adventurer
- 📝 Notes — I'm a planner → Cozy Classic
- 💬 Group chats — always connected → Social Butterfly
- 🍕 Food delivery — treat yourself → Indulgent Treat

---

## Scoring Logic
- Tally points for each personality type across all 5 questions
- Whichever type has the most points wins
- Display that personality's name, description, and coffee match

---

## Tech Stack
- Next.js (React)
- Plain CSS (no UI library needed)
- No backend required — all logic runs in the browser
