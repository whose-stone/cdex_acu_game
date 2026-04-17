# Final Time (ACU Classroom Game)

A retro 2D side-scrolling educational game concept for Arizona Christian University classrooms.

## Core Vision

**Final Time** blends classic platforming with Bible-learning checkpoints:

- Students sign in with teacher-provided email/password credentials.
- Players choose one Firebird-branded character (boy or girl).
- Players progress through 5 worlds:
  1. Beach
  2. Desert
  3. Forest
  4. Arctic
  5. Castle (boss stage)
- Players collect Bible-themed power-ups and answer trivia to earn offensive abilities.

## Gameplay Rules (MVP)

### Movement & combat
- Retro 2D side-scroller physics with left/right/jump movement.
- Player can jump; standard gargoyle enemies cannot jump.
- Teacher boss can jump.
- Parallax scrolling background for depth.

### Enemies and attacks
- Small gargoyles throw temptations:
  - Beer cans
  - Game controllers
- Prayer attack is unlocked through trivia rewards.
- Prayer projectiles are rendered as **golden prayer hands**.
- On gargoyle defeat:
  - Stone-break explosion animation.
  - Floating text: **AMEN**.

### Pickups and question flow
- Floating Bible pickup grants trivia interaction.
- Floating pen-and-paper pickup opens configured question prompt.
- Each level has a configurable number of questions (default 5).
- Correct answer gives **+3 prayers**.

### Boss fight (Castle)
- Boss is a bearded teacher figure with glasses.
- Throws paper airplanes (homework projectiles).
- Player must hit boss with prayer attack **3 times**.
- On defeat: boss sits, drinks diet mountain dew, and appears happy.

## UI / HUD Requirements

Player toolbar displays:
- Current letter grade (A/B/C/D/F, standard US scale)
- Prayer count
- Level number
- Next question number
- Lives remaining

## Persistence & Progress

- Save checkpoint at the **last answered question**.
- Resume loads player state at latest checkpoint for current level.

## Tech Stack

- **Frontend:** Next.js + TypeScript
- **Backend/Data:** Firebase (Authentication + Firestore + Storage)
- **Admin:** Web admin panel in Next.js
- **Exports:** PDF summary from admin dashboard

## Admin Feature Set

Admin users can:
- Log in to an admin dashboard.
- Configure:
  - Questions
  - Questions per level
  - Gargoyles per level
  - Whether lives are limited
  - Point value per question
  - Question type (multiple choice or text response)
- Retrieve and review student scores.
- Edit/override player scores.
- Reset a player's game status.
- Download player or class summary as PDF.

## Files Added in This Repository

- `docs/IMPLEMENTATION_PLAN.md` — phased build plan and architecture.
- `docs/FIREBASE_SCHEMA.md` — suggested Firestore model and security direction.
- `config/levels.json` — starter level and gameplay configuration.
- `firebase/rtdb.rules.json` — Firebase Realtime Database security rules (email-auth users + Gmail-gated admin subtree).
- `docs/RTDB_RULES.md` — rule behavior and deployment notes.
