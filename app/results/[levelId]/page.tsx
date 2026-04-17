type Props = {
  params: Promise<{ levelId: string }>;
};

export default async function ResultsPage({ params }: Props) {
  const { levelId } = await params;
  return (
    <main className="container">
      <h1>Results — Level {levelId}</h1>
      <p>Slice D/E placeholder: score breakdown, grade, and checkpoint resume state.</p>
    </main>
  );
}
