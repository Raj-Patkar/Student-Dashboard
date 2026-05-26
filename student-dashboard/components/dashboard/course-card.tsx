"use client";

import { motion } from "framer-motion";
import { Course } from "../../types/course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_40%)]" />

      <header className="relative">
        <p className="text-sm text-white/60">
          Active Course
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {course.title}
        </h3>
      </header>

      <section className="relative mt-6">
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${course.progress}%`,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
            }}
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          />
        </div>

        <p className="mt-3 text-sm text-white/60">
          {course.progress}% completed
        </p>
      </section>
    </article>
  );
}