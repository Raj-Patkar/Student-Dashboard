"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Database,
  Rocket,
} from "lucide-react";

import { Course } from "../../types/course";

interface CourseCardProps {
  course: Course;
}

const icons: Record<string, any> = {
  Code2,
  Sparkles,
  Database,
  Rocket,
};

export default function CourseCard({
  course,
}: CourseCardProps) {
  const Icon =
    icons[course.icon_name] || Code2;

  return (
    <article className="group relative h-full overflow-hidden rounded-[28px] border border-cyan-400/10 bg-[#0B1120]/90 p-5 backdrop-blur-2xl xl:row-start-2">

      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_40%)]" />

      <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/20" />

      <header className="relative z-10 flex items-start justify-between">

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>

        <p className="text-sm text-white/50">
          {course.progress}%
        </p>
      </header>

      <section className="relative z-10 mt-6">
        <h3 className="min-h-[72px] max-w-[220px] text-2xl font-semibold leading-snug">
          {course.title}
        </h3>

        <p className="mt-5 text-sm text-white/50">
          Progress bar
        </p>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${course.progress}%`,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500"
          />
        </div>
      </section>
    </article>
  );
}