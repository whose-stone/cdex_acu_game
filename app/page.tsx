import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="container">
      <span className="badge">Final Time — Slice A Entry</span>
      <h1>Final Time</h1>
      <p>
        This deployment follows the execution plan in <code>docs/IMPLEMENTATION_PLAN.md</code>.
        Start from sign-in/character selection, then continue into playable slices.
      </p>

      <section>
        <h2>Planned Route Shells</h2>
        <div className="links">
          <Link href="/character-select">Character Select</Link>
          <Link href="/play/1">Play Level 1</Link>
          <Link href="/results/1">Results Level 1</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/admin/questions">Admin Questions</Link>
          <Link href="/admin/players">Admin Players</Link>
          <Link href="/admin/settings">Admin Settings</Link>
        </div>
      </section>
    </main>
  );
}
