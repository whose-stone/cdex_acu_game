# Firebase Schema Proposal

## Collections

### `users/{uid}`
Student/admin identity and profile.

```ts
{
  uid: string,
  email: string,
  role: 'student' | 'admin',
  displayName: string,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### `playerProfiles/{uid}`
Gameplay profile and persistent state.

```ts
{
  uid: string,
  selectedCharacter: 'firebird_boy' | 'firebird_girl',
  currentLevel: number, // 1..5
  livesRemaining: number,
  prayers: number,
  totalScore: number,
  currentGrade: 'A'|'B'|'C'|'D'|'F',
  checkpoint: {
    levelId: number,
    lastAnsweredQuestionIndex: number,
    x: number,
    y: number
  },
  updatedAt: Timestamp
}
```

### `levels/{levelId}`
Level metadata and balancing knobs.

```ts
{
  levelId: number, // 1..5
  name: 'Beach'|'Desert'|'Forest'|'Arctic'|'Castle',
  gargoyleCount: number,
  questionCount: number,
  limitedLivesEnabled: boolean,
  pointsPerQuestion: number,
  bossEnabled: boolean,
  updatedAt: Timestamp
}
```

### `questions/{questionId}`
Question bank records.

```ts
{
  questionId: string,
  levelId: number,
  prompt: string,
  type: 'multiple_choice' | 'text',
  choices?: string[],
  answer: string,
  difficulty: 'grade3',
  active: boolean,
  createdBy: string,
  updatedAt: Timestamp
}
```

### `attempts/{attemptId}`
Each question attempt for audit and analytics.

```ts
{
  attemptId: string,
  uid: string,
  levelId: number,
  questionId: string,
  givenAnswer: string,
  isCorrect: boolean,
  pointsAwarded: number,
  prayersAwarded: number,
  createdAt: Timestamp
}
```

### `levelResults/{uid_levelId}`
Aggregated end-of-level summary for reporting.

```ts
{
  uid: string,
  levelId: number,
  correctAnswers: number,
  totalQuestions: number,
  score: number,
  grade: 'A'|'B'|'C'|'D'|'F',
  livesLeft: number,
  elapsedMs: number,
  completedAt: Timestamp
}
```

## Security model (high level)

- Student role can:
  - Read only own profile and own result docs.
  - Write own profile checkpoint updates and attempts.
- Admin role can:
  - Read/write level settings and question bank.
  - Read all students' results.
  - Trigger reset operations.
- Sensitive actions (score override/reset) should go through callable Cloud Functions.

## PDF Export approach

- Admin invokes a Next.js API route.
- Route verifies admin role and compiles:
  - Overall score
  - Level-by-level breakdown
  - Accuracy stats
  - Recent attempts
- Route renders PDF (e.g., pdf-lib / react-pdf) and streams download.

