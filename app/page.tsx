import rawConfig from "../config/levels.json";

type BossConfig = {
  requiredPrayerHits: number;
  projectile: string;
};

type Level = {
  levelId: number;
  name: string;
  questionCount: number;
  gargoyleCount: number;
  pointsPerQuestion: number;
  limitedLivesEnabled: boolean;
  bossEnabled: boolean;
  boss?: BossConfig;
};

type GameConfig = {
  levels: Level[];
};

function isLevel(value: unknown): value is Level {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.levelId === "number" &&
    typeof candidate.name === "string" &&
    typeof candidate.questionCount === "number" &&
    typeof candidate.gargoyleCount === "number" &&
    typeof candidate.pointsPerQuestion === "number" &&
    typeof candidate.limitedLivesEnabled === "boolean" &&
    typeof candidate.bossEnabled === "boolean"
  );
}

function parseGameConfig(value: unknown): GameConfig {
  if (!value || typeof value !== "object") {
    return { levels: [] };
  }

  const candidate = value as Record<string, unknown>;
  const levels = Array.isArray(candidate.levels)
    ? candidate.levels.filter(isLevel)
    : [];

  return { levels };
}

const gameConfig = parseGameConfig(rawConfig);

export default function Home() {
  return (
    <main className="container">
      <span className="badge">Vercel-ready Next.js app</span>
      <h1>Final Time</h1>
      <p>
        This project now deploys on Vercel as a real Next.js application instead
        of a static fallback page.
      </p>

      <section>
        <h2>Worlds from config</h2>
        <ul>
          {gameConfig.levels.map((level) => (
            <li key={level.levelId}>
              <strong>{level.name}</strong> — {level.gargoyleCount} gargoyles,{" "}
              {level.questionCount} questions
              {level.bossEnabled ? " (boss level)" : ""}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Project docs</h2>
        <div className="links">
          <a href="./README.md">README</a>
          <a href="./docs/IMPLEMENTATION_PLAN.md">Implementation plan</a>
          <a href="./docs/FIREBASE_SCHEMA.md">Firebase schema</a>
          <a href="./config/levels.json">Level config</a>
        </div>
      </section>
    </main>
  );
}
