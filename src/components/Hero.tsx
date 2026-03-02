import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-6 md:p-10 dark:border-white/10 dark:bg-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.14),transparent_40%),radial-gradient(circle_at_40%_100%,rgba(34,211,238,0.10),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.18),transparent_40%),radial-gradient(circle_at_40%_100%,rgba(34,211,238,0.14),transparent_45%)]" />

      <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-sm text-zinc-700 dark:text-zinc-300"
          >
            {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-3 text-base text-zinc-800 md:text-lg dark:text-zinc-200"
          >
            <span className="text-zinc-950 dark:text-white">{profile.headline}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            {/* Primary */}
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              Ver projetos <ArrowDown className="h-4 w-4" />
            </button>

            {/* Secondary */}
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              download
            >
              Baixar CV <Download className="h-4 w-4" />
            </a>

            {/* Social */}
            <div className="flex items-center gap-2">
              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-zinc-950 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-zinc-950 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-zinc-950 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                href={`mailto:${profile.email}`}
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Seu teste — pode deixar aqui por enquanto */}
          <div className="mt-4 rounded-2xl bg-white p-4 text-black dark:bg-zinc-900 dark:text-white">
            Se eu mudar com o toggle, dark mode está OK ✅
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 dark:border-white/10 dark:bg-zinc-950/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Snapshot
            </p>

            <div className="mt-4 grid gap-3">
              {profile.highlights.map((h) => (
                <div
                  key={h.k}
                  className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                    {h.k}
                  </div>
                  <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                    {h.v}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              <span className="font-semibold text-zinc-950 dark:text-white">
                Contato:
              </span>{" "}
              {profile.email} • {profile.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}