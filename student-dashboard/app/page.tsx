import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <section className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">
          <h1 className="text-2xl font-semibold text-red-400">
            Failed to load dashboard
          </h1>

          <p className="mt-2 text-sm text-red-300/80">
            Unable to connect to Supabase.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4 lg:p-6">
      <section className="grid gap-6 lg:grid-cols-[240px_1fr]">
        
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <header className="mb-8">
            <h1 className="text-xl font-bold tracking-wide">
              LearnX
            </h1>
          </header>

          <nav>
            <ul className="space-y-2">
              <li>
                <button className="w-full rounded-xl bg-white/10 px-4 py-3 text-left transition hover:bg-white/15">
                  Dashboard
                </button>
              </li>

              <li>
                <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-white/10">
                  Courses
                </button>
              </li>

              <li>
                <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-white/10">
                  Analytics
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="grid auto-rows-[180px] gap-6 md:grid-cols-2 xl:grid-cols-3">

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

          {courses?.map((course) => (
            <article
              key={course.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <header>
                <p className="text-sm text-white/60">
                  Active Course
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {course.title}
                </h3>
              </header>

              <section className="mt-6">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />
                </div>

                <p className="mt-3 text-sm text-white/60">
                  {course.progress}% completed
                </p>
              </section>
            </article>
          ))}

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

        </section>
      </section>
    </main>
  );
}