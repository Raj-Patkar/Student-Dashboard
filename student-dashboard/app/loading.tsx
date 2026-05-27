export default function Loading() {
  return (
    <main className="min-h-screen p-4 lg:p-6">

      <section className="grid gap-6 md:grid-cols-[90px_1fr] lg:grid-cols-[240px_1fr]">

        <aside className="hidden min-h-[calc(100vh-48px)] rounded-[30px] border border-white/10 bg-white/5 md:block animate-pulse" />

        <section className="space-y-5">

          <section className="grid auto-rows-[320px] grid-cols-1 gap-5 xl:grid-cols-[0.9fr_1.1fr]">

            <article className="relative overflow-hidden rounded-[30px] border border-cyan-400/10 bg-white/[0.03] p-7 animate-pulse">

              <div className="h-5 w-28 rounded-md bg-white/10" />

              <div className="mt-6 h-16 w-40 rounded-xl bg-white/10" />

              <div className="mt-10 flex w-[240px] items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4">

                <div className="h-12 w-12 rounded-full bg-white/10" />

                <div className="flex-1 space-y-3">
                  <div className="h-4 w-28 rounded bg-white/10" />
                  <div className="h-6 w-20 rounded bg-white/10" />
                </div>

              </div>
            </article>

            <article className="relative overflow-hidden rounded-[30px] border border-cyan-400/10 bg-white/[0.03] p-6 animate-pulse">

              <div className="flex items-start justify-between">

                <div>
                  <div className="h-10 w-40 rounded-lg bg-white/10" />
                  <div className="mt-3 h-4 w-52 rounded bg-white/10" />
                </div>

                <div className="h-10 w-14 rounded-2xl bg-white/10" />

              </div>

              <div className="mt-10 space-y-2">

                {Array.from({ length: 7 }).map((_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex items-center"
                  >
                    {Array.from({ length: 28 }).map((_, cellIndex) => (
                      <span
                        key={cellIndex}
                        className={`h-4 w-4 rounded-[4px] bg-white/10 ${
                          (cellIndex + 1) % 4 === 0
                            ? "mr-6"
                            : "mr-1.5"
                        }`}
                      />
                    ))}
                  </div>
                ))}

              </div>

            </article>

          </section>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

            {Array.from({ length: 4 }).map((_, index) => (
              <article
                key={index}
                className="rounded-[28px] border border-cyan-400/10 bg-white/[0.03] p-5 animate-pulse"
              >

                <div className="flex items-start justify-between">

                  <div className="h-12 w-12 rounded-2xl bg-white/10" />

                  <div className="h-5 w-10 rounded bg-white/10" />

                </div>

                <div className="mt-10 space-y-4">

                  <div className="h-8 w-52 rounded-lg bg-white/10" />

                  <div className="h-4 w-24 rounded bg-white/10" />

                  <div className="mt-6 h-2 w-full rounded-full bg-white/10" />

                </div>

              </article>
            ))}

          </section>

        </section>

      </section>

    </main>
  );
}