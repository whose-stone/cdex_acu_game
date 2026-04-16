import levels from "../config/levels.json";

type Level = {
  id: number;
  name: string;
  environment: string;
};

const typedLevels = levels as Level[];

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
          {typedLevels.map((level) => (
            <li key={level.id}>
              <strong>{level.name}</strong> — {level.environment}
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
