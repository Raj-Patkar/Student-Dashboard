export default function HeroTile() {
  return (
    <article className="relative overflow-hidden rounded-[30px] border border-cyan-400/10 bg-[#0B1120]/90 p-7 backdrop-blur-2xl xl:col-span-2 xl:min-h-[320px]">

      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%)]" />

      <span className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

      <header className="relative z-10">
        <p className="text-sm font-medium text-white/50">
          Welcome back
        </p>

        <h2 className="mt-3 max-w-[320px] text-5xl font-bold leading-tight tracking-tight">
          Raj 👋
        </h2>
      </header>

      <section className="relative z-10 mt-8 flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        
        <span className="text-3xl">
          🔥
        </span>

        <div>
          <p className="text-sm text-white/50">
            Daily Learning Streak
          </p>

          <h3 className="mt-1 text-3xl font-bold">
            12 Days
          </h3>
        </div>
      </section>
    </article>
  );
}