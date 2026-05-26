export default function ActivityTile() {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:col-span-2">
      <header>
        <h3 className="text-xl font-semibold">
          Activity Overview
        </h3>
      </header>

      <section className="mt-6 flex h-[100px] items-end gap-2">
        {[40, 65, 30, 80, 55, 90, 70].map((value, index) => (
          <span
            key={index}
            className="w-full rounded-t-xl bg-gradient-to-t from-indigo-500 to-purple-400"
            style={{
              height: `${value}%`,
            }}
          />
        ))}
      </section>
    </article>
  );
}