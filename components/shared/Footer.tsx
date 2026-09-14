import Link from "next/link";
import { Activity } from "lucide-react";

const footerNav = [
  {
    title: "Experience",
    links: [
      { href: "/shift", label: "The Shift" },
      { href: "/timeline", label: "Timeline" },
      { href: "/workplace", label: "Workplace" },
      { href: "/human-ai", label: "Human + AI" },
    ],
  },
  {
    title: "Discover",
    links: [
      { href: "/roles", label: "Future Roles" },
      { href: "/skills", label: "Future Skills" },
      { href: "/simulator", label: "Career Simulator" },
      { href: "/day-in-life", label: "Day in Life" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/research", label: "Research & Signals" },
      { href: "/readiness", label: "Readiness Score" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-sm text-text-primary mb-3">
              <Activity className="w-4.5 h-4.5 text-accent" />
              ITVerse 2030+
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              Exploring the future of work in technology.
            </p>
          </div>

          {/* Navigation columns */}
          {footerNav.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-text-tertiary mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border-light">
          <p className="text-xs text-text-tertiary leading-relaxed max-w-2xl">
            This website explores possible future scenarios based on current research and industry signals.
            It does not claim to predict the future. Content is organized into evidence (observed trends),
            forecasts (industry projections), and scenarios (conceptual explorations).
          </p>
          <p className="text-xs text-text-tertiary mt-3">
            © {new Date().getFullYear()} ITVerse 2030+ — A research-backed interactive experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
