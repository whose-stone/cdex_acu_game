# Final Time — Implementation Plan

## 1) Product slices

### Slice A: Core auth and profile
- Firebase Auth with email/password sign in.
- Character selection screen (Firebird boy/girl).
- Create `playerProfiles` record on first login.

### Slice B: Playable level shell
- Side-scrolling map with camera follow and parallax layers.
- Player movement + jump.
- Gargoyle spawn/despawn + projectile throws.
- Collision + health/lives.

### Slice C: Question and prayer loop
- Pickups: Bible and pen-paper.
- Prompt modal (multiple choice + text input support).
- Correct answer grants prayer ammo.
- Prayer projectile can defeat gargoyle.

### Slice D: Scoring & grade system
- Points per question and enemy interactions.
- Letter grade conversion in HUD.
- End-of-level score breakdown view.

### Slice E: Checkpoints and resume
- Persist checkpoint at every answered question.
- Resume from checkpoint on re-entry.

### Slice F: Castle boss fight
- Boss AI with jump + projectile pattern.
- Defeat condition: 3 prayer hits.
- Victory animation state.

### Slice G: Admin panel
- Manage level/question settings.
- View player progress and per-level stats.
- Manual score edits and reset controls.
- PDF export endpoint.

---

## 2) Suggested app routes (Next.js App Router)

- `/` — landing/sign in
- `/character-select`
- `/play/[levelId]`
- `/results/[levelId]`
- `/admin`
- `/admin/questions`
- `/admin/players`
- `/admin/settings`

---

## 3) Domain modules (TypeScript)

- `game/engine`
  - Input handling, physics step, camera, parallax
- `game/entities`
  - Player, Gargoyle, BossTeacher, Projectile, Pickup
- `game/combat`
  - Damage, knockback, defeat effects
- `game/questions`
  - Prompt orchestration and answer validation
- `game/scoring`
  - Points + letter-grade conversion
- `game/persistence`
  - Checkpoint save/load
- `admin/services`
  - CRUD for config, questions, and player resets

---

## 4) Grade conversion (US standard)

Default conversion (configurable):
- A: 90–100
- B: 80–89
- C: 70–79
- D: 60–69
- F: 0–59

---

## 5) Data flow for a question pickup

1. Player collides with pickup.
2. Engine pauses movement and opens question prompt.
3. Player submits answer.
4. Answer is validated server-side (or against signed config snapshot).
5. If correct: add prayers and points.
6. Save checkpoint (`lastAnsweredQuestionIndex`).
7. Resume game loop.

---

## 6) Recommended milestone definition of done

### MVP DoD
- All five levels exist and are traversable.
- Minimum 5 prompts/level supported by config.
- Gargoyle enemy loop and prayer combat complete.
- End-level score page with grade + stats.
- Checkpoint resume works across sessions.
- Admin can modify questions/settings and reset player state.
- PDF export works for a selected player.

