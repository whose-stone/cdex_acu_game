import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="container">
      <h1>Admin Dashboard</h1>
      <p>Slice G placeholder: high-level admin controls and summaries.</p>
      <div className="links">
        <Link href="/admin/questions">Questions</Link>
        <Link href="/admin/players">Players</Link>
        <Link href="/admin/settings">Settings</Link>
      </div>
    </main>
  );
}
