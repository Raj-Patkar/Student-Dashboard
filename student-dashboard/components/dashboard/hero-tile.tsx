export default function HeroTile() {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:col-span-2">
      <header>
        <p className="text-sm text-white/60">
          Welcome back
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Raj 👋
        </h2>
      </header>

      <section className="mt-6">
        <p className="text-sm text-white/60">
          Current learning streak
        </p>

        <h3 className="mt-2 text-3xl font-semibold">
          12 Days
        </h3>
      </section>
    </article>
  );
}