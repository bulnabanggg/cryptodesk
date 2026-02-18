export default function LayoutGrid({
  left,
  main,
  right
}: {
  left: React.ReactNode;
  main: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-[220px_1fr_300px] gap-10">
        <aside className="space-y-8">{left}</aside>
        <main className="space-y-8">{main}</main>
        <aside className="space-y-8">{right}</aside>
      </div>
    </section>
  );
}
