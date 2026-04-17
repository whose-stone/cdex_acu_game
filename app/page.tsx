import config from "../config/levels.json";

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

const gameConfig = config as GameConfig;

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
              <strong>{level.name}</strong> — {level.gargoyleCount} gargoyles, {" "}
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
