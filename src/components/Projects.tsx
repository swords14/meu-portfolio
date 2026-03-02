import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { profile, type Project } from "../data/profile";
import ProjectModal from "./ProjectModal";

const ALL = "Todos";

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>(ALL);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Project | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    profile.projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (selectedTag === ALL) return profile.projects;
    return profile.projects.filter((p) => p.tags.includes(selectedTag));
  }, [selectedTag]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openProject = (p: Project) => {
    setCurrent(p);
    setOpen(true);
  };

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Projetos
          </h2>
          <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
            Cards com detalhes — clique para abrir o case.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-black/5 px-3 py-2 dark:border-white/10 dark:bg-white/5">
          <Filter className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="bg-transparent text-sm text-zinc-900 outline-none dark:text-zinc-200"
          >
            {tags.map((t) => (
              <option key={t} value={t} className="bg-white dark:bg-zinc-950">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((p, idx) => (
          <motion.button
            key={p.title}
            onClick={() => openProject(p)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="group text-left rounded-3xl border border-black/10 bg-white p-5 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950/30 dark:hover:bg-zinc-950/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-zinc-900 dark:text-white">
                  {p.title}
                </div>
                <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {p.tagline}
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-black/5 px-3 py-2 text-xs text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                ver
              </div>
            </div>

            <p className="mt-4 line-clamp-3 text-sm text-zinc-700 dark:text-zinc-300">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-2xl border border-black/10 bg-black/5 px-3 py-2 text-xs text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 opacity-90">
              {p.stack.slice(0, 4).map((s) => (
                <span key={s} className="text-xs text-zinc-500 dark:text-zinc-400">
                  {s}
                </span>
              ))}
              {p.stack.length > 4 ? (
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  • +{p.stack.length - 4}
                </span>
              ) : null}
            </div>
          </motion.button>
        ))}
      </div>

      <ProjectModal open={open} onClose={() => setOpen(false)} project={current} />
    </div>
  );
}