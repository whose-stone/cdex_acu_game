import config from "../../../config/levels.json";

type Props = {
  params: Promise<{ levelId: string }>;
};

export default async function PlayLevelPage({ params }: Props) {
  const { levelId } = await params;
  const level = config.levels.find((entry) => String(entry.levelId) === levelId);

  return (
    <main className="container">
      <h1>Play Level {levelId}</h1>
      <p>Slice B/C placeholder: side-scrolling shell + question/prayer loop.</p>
      <p>
        Active environment: <strong>{level?.name ?? "Unknown level"}</strong>
      </p>
    </main>
  );
}
