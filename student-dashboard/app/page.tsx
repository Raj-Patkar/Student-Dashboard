import { supabase } from "../lib/supabase";

import Sidebar from "../components/layout/sidebar";

import HeroTile from "../components/dashboard/hero-tile";
import ActivityTile from "../components/dashboard/activity-tile";
import CourseCard from "../components/dashboard/course-card";

import MotionWrapper from "../components/ui/motion-wrapper";

export default async function Home() {
  
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1>Failed to load dashboard</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4 lg:p-6">
      <section className="grid gap-6 md:grid-cols-[90px_1fr] lg:grid-cols-[240px_1fr]">

        <Sidebar />

        <section className="space-y-5">

          <section className="grid auto-rows-[320px] grid-cols-1 gap-5 xl:grid-cols-[0.9fr_1.1fr]">

            <MotionWrapper delay={0.1}>
              <HeroTile />
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <ActivityTile />
            </MotionWrapper>

          </section>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

            {courses?.map((course, index) => (
              <MotionWrapper
                key={course.id}
                delay={0.3 + index * 0.1}
              >
                <CourseCard course={course} />
              </MotionWrapper>
            ))}

          </section>

        </section>
      </section>
    </main>
  );
}