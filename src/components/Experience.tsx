import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
        Experiência
      </h2>
      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
        Linha do tempo com foco no impacto.
      </p>

      <div className="mt-6 grid gap-4">
        {profile.experience.map((e, idx) => (
          <motion.div
            key={`${e.role}-${e.company}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="rounded-3xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-950/40"
          >
            <div className="flex justify-between">
              <div>
                <div className="text-base font-semibold text-zinc-900 dark:text-white">
                  {e.role}
                </div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  {e.company}
                </div>
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                {e.period}
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {e.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}