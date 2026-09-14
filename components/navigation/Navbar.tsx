"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Activity } from "lucide-react";

const navLinks = [
  {
    label: "Explore",
    children: [
      { href: "/shift", label: "The Shift" },
      { href: "/timeline", label: "Timeline" },
      { href: "/workplace", label: "Workplace" },
      { href: "/human-ai", label: "Human + AI" },
    ],
  },
  { href: "/roles", label: "Roles" },
  { href: "/skills", label: "Skills" },
  { href: "/simulator", label: "Simulator" },
  { href: "/day-in-life", label: "Day in Life" },
  { href: "/research", label: "Research" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setDropdownOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-[0_1px_4px_rgba(0,0,0,0.04)] py-0"
          : "bg-white/60 backdrop-blur-sm border-b border-border/40 py-0.5"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16" aria-label="Main navigation">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-[15px] tracking-tight text-text-primary hover:text-accent transition-colors"
        >
          <Activity className="w-5 h-5 text-accent" />
          <span>ITVerse 2030+</span>
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                    dropdownOpen ? "text-accent bg-accent-light" : "text-text-secondary hover:text-text-primary hover:bg-gray-100"
                  }`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-white border border-border rounded-xl shadow-lg overflow-hidden"
                    >
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-[13px] font-medium transition-colors ${
                            pathname === child.href
                              ? "text-accent bg-accent-light"
                              : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-accent bg-accent-light"
                    : "text-text-secondary hover:text-text-primary hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            href="/readiness"
            className="ml-2 px-4 py-2 text-[13px] font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
          >
            Check My Readiness
          </Link>
        </div>
      </nav>
    </header>
  );
}
