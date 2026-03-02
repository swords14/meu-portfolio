// src/components/ProjectModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "../data/profile";

type Props = {
  open: boolean;
  onClose: () => void;
  project: Project | null;
};

export default function ProjectModal({ open, onClose, project }: Props) {
  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pr-12">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{project.tagline}</p>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-zinc-300">
              {project.description}
            </p>

            {project.highlights?.length ? (
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Destaques
                </div>
                <ul className="mt-2 grid gap-2 text-sm text-zinc-300">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.links?.repo ? (
                <a
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10"
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" /> Repositório
                </a>
              ) : null}

              {project.links?.live ? (
                <a
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="h-4 w-4" /> Ver online
                </a>
              ) : null}

              <div className="ml-auto text-xs text-zinc-400">
                ESC para fechar
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}