// src/components/Footer.tsx
import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 pb-10">
      <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-zinc-700 dark:text-zinc-300">
            © {year}{" "}
            <span className="font-semibold text-zinc-900 dark:text-white">
              {profile.name}
            </span>
          </div>

          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Feito com React + TS + Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}