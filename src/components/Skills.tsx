import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Skills() {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
        Skills
      </h2>
      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
        Um mix de infra, suporte e desenvolvimento.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {profile.skills.map((s, idx) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: idx * 0.02 }}
            className="rounded-2xl border border-black/10 bg-black/5 px-3 py-2 text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  );
}