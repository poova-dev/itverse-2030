"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Activity,
  Layers,
  Clock,
  Building2,
  Users,
  Briefcase,
  Target,
  Gamepad2,
  Calendar,
  BookOpen,
  BarChart3,
} from "lucide-react";

const mobileLinks = [
  { href: "/shift", label: "The Shift", icon: Layers },
  { href: "/timeline", label: "Timeline", icon: Clock },
  { href: "/workplace", label: "Workplace", icon: Building2 },
  { href: "/human-ai", label: "Human + AI", icon: Users },
  { href: "/roles", label: "Roles", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Target },
  { href: "/simulator", label: "Simulator", icon: Gamepad2 },
  { href: "/day-in-life", label: "Day in Life", icon: Calendar },
  { href: "/readiness", label: "Readiness", icon: BarChart3 },
  { href: "/research", label: "Research", icon: BookOpen },
];

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Mobile top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border h-14 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-sm text-text-primary">
          <Activity className="w-4.5 h-4.5 text-accent" />
          <span>ITVerse 2030+</span>
        </Link>
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Drawer overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 bg-gray-300 rounded-full" />
              </div>

              <nav className="px-4 pb-8 pt-2" aria-label="Mobile navigation">
                <div className="grid gap-1">
                  {mobileLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                          isActive
                            ? "bg-accent-light text-accent"
                            : "text-text-secondary hover:bg-gray-50 hover:text-text-primary"
                        }`}
                      >
                        <Icon className="w-4.5 h-4.5 shrink-0" />
                        <span className="text-sm font-medium flex-1">{link.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 px-2">
                  <Link
                    href="/readiness"
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-colors"
                  >
                    Check My Readiness
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
