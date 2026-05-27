const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
];

const activity = Array.from({ length: 7 }, () =>
  Array.from(
    { length: 28 },
    () => Math.floor(Math.random() * 4)
  )
);

const colors = [
  "bg-white/10",
  "bg-cyan-500/30",
  "bg-cyan-400/60",
  "bg-cyan-300",
];

export default function ActivityTile() {
  return (
    <article className="relative h-full overflow-hidden rounded-[30px] border border-cyan-400/10 bg-[#0B1120]/90 p-6 backdrop-blur-2xl">

      <span className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_35%)]" />

      <header className="relative z-10 flex items-start justify-between">

        <div>
          <h3 className="text-3xl font-bold">
            Activity
          </h3>

          <p className="mt-1 text-sm text-white/40">
            Study consistency overview
          </p>
        </div>

        <span className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/60">
          86%
        </span>
      </header>

      <section className="relative z-10 mt-8 overflow-hidden">

        <div className="min-w-[720px]">

          <div className="mb-4 grid grid-cols-7 text-xs text-white/30">
            {months.map((month) => (
              <span
                key={month}
                className="text-left"
              >
                {month}
              </span>
            ))}
          </div>

          <div className="space-y-1.5">
            {activity.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex items-center"
              >
                {row.map((cell, cellIndex) => (
                  <span
                    key={cellIndex}
                    className={`
                rounded-[3px]
                transition-transform
                duration-200
                hover:scale-125
                ${colors[cell]}
                
                h-2.5 w-2.5
                md:h-3 md:w-3
                xl:h-4 xl:w-4

                ${(cellIndex + 1) % 4 === 0
                        ? "mr-3 md:mr-4 xl:mr-6"
                        : "mr-1 md:mr-1.5"
                      }
              `}
                  />
                ))}
              </div>
            ))}
          </div>

        </div>

        <footer className="mt-6 flex items-center justify-between">

          <span className="text-xs text-white/30">
            Less
          </span>

          <div className="flex gap-2">
            {colors.map((color, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-sm ${color}`}
              />
            ))}
          </div>

          <span className="text-xs text-white/30">
            More
          </span>

        </footer>
      </section>
    </article>
  );
}