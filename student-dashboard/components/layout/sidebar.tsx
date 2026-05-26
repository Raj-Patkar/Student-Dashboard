"use client";

import { LayoutDashboard, BookOpen, BarChart3, Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="sticky top-6 hidden h-[calc(100vh-48px)] rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:block">

        <header className="mb-8">
          <h1 className="hidden text-2xl font-bold lg:block">
            LearnX
          </h1>

          <h1 className="text-2xl font-bold lg:hidden">
            LX
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
                    className="relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3"
                  >
                    {active === item.label && (
                      <motion.span
                        layoutId="sidebar-highlight"
                        className="absolute inset-0 rounded-xl bg-white/10"
                        transition={{type: "spring",stiffness: 300,damping: 20}}
                      />
                    )}

                    <Icon className="relative z-10 h-5 w-5 shrink-0" />

                    <span className="relative z-10 hidden lg:block">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-white/10 bg-[#050816] p-6 md:hidden"
            >
              <header className="mb-10 flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                  LearnX
                </h1>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </header>

              <nav>
                <ul className="space-y-3">
                  {items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.label}>
                        <button
                          onClick={() => {
                            setActive(item.label);
                            setOpen(false);
                          }}
                          className="relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3"
                        >
                          {active === item.label && (
                            <motion.span
                              layoutId="mobile-sidebar-highlight"
                              className="absolute inset-0 rounded-xl bg-white/10"
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
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}