export default function Loading() {
  return (
    <main className="min-h-screen p-4 lg:p-6">
      <section className="grid gap-6 md:grid-cols-[90px_1fr] lg:grid-cols-[240px_1fr]">

        <aside className="hidden h-[calc(100vh-48px)] animate-pulse rounded-3xl border border-white/10 bg-white/5 md:block" />

        <section className="grid auto-rows-[180px] gap-6 md:grid-cols-2 xl:grid-cols-3">

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2 animate-pulse">
            <div className="h-4 w-28 rounded bg-white/10" />

            <div className="mt-4 h-10 w-52 rounded bg-white/10" />

            <div className="mt-8 h-4 w-40 rounded bg-white/10" />

            <div className="mt-4 h-8 w-32 rounded bg-white/10" />
          </article>

          {Array.from({ length: 4 }).map((_, index) => (
            <article
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 animate-pulse"
            >
              <div className="h-4 w-24 rounded bg-white/10" />

              <div className="mt-4 h-7 w-52 rounded bg-white/10" />

              <div className="mt-8 h-2 w-full rounded-full bg-white/10" />

              <div className="mt-4 h-4 w-28 rounded bg-white/10" />
            </article>
          ))}

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2 animate-pulse">
            <div className="h-7 w-48 rounded bg-white/10" />

            <section className="mt-8 flex h-[100px] items-end gap-2">
              {[40, 65, 30, 80, 55, 90, 70].map((value, index) => (
                <span
                  key={index}
                  className="w-full rounded-t-xl bg-white/10"
                  style={{
                    height: `${value}%`,
                  }}
                />
              ))}
            </section>
          </article>

        </section>
      </section>
    </main>
  );
}