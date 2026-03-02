import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

type NavItem = { id: string; label: string };

const ITEMS: NavItem[] = [
  { id: "home", label: "Início" },
  { id: "highlights", label: "Destaques" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experiência" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [elevated, setElevated] = useState(false);

  const sections = useMemo(
    () =>
      ITEMS.map((i) => ({
        id: i.id,
        el: typeof window !== "undefined" ? document.getElementById(i.id) : null,
      })),
    []
  );

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;
      let current = "home";

      for (const item of ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (y >= top && y < top + height) current = item.id;
      }
      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={[
            "flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl",
            elevated
              ? "border-black/10 bg-white/70 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.20)] dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.80)]"
              : "border-black/10 bg-white/50 dark:border-white/10 dark:bg-zinc-950/40",
          ].join(" ")}
        >
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-zinc-900/70 group-hover:bg-zinc-900 dark:bg-white/70 dark:group-hover:bg-white" />
            <span className="text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white">
              Meu portfolio
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {ITEMS.map((item) => {
              const isActive = item.id === active;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={[
                    "relative rounded-xl px-3 py-2 text-sm transition",
                    isActive
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
                  ].join(" ")}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navpill"
                      className="absolute inset-0 -z-10 rounded-xl bg-black/5 dark:bg-white/10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("projects");
              }}
              className="hidden rounded-xl border border-black/10 bg-black/5 px-3 py-2 text-sm text-zinc-800 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 md:inline-block"
            >
              Ver projetos
            </a>
            <ThemeToggle />
          </div>
        </motion.div>
      </div>
    </header>
  );
}