"use client";

import { LayoutDashboard, BookOpen, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Courses",
    icon: BookOpen,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">
          LearnX
        </h1>
      </header>

      <nav>
        <ul className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <button
                  onClick={() => setActive(item.label)}
                  className="relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-left"
                >
                  {active === item.label && (
                    <motion.span
                      layoutId="sidebar-highlight"
                      className="absolute inset-0 rounded-xl bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}

                  <Icon className="relative z-10 h-5 w-5" />

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}