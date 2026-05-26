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
      <section className="grid gap-6 lg:grid-cols-[240px_1fr]">

        <Sidebar />

        <section className="grid auto-rows-[180px] gap-6 md:grid-cols-2 xl:grid-cols-3">

          <MotionWrapper delay={0.1}>
            <HeroTile />
          </MotionWrapper>

          {courses?.map((course, index) => (
            <MotionWrapper
              key={course.id}
              delay={0.2 + index * 0.1}
            >
              <CourseCard course={course} />
            </MotionWrapper>
          ))}

          <MotionWrapper delay={0.6}>
            <ActivityTile />
          </MotionWrapper>

        </section>
      </section>
    </main>
  );
}