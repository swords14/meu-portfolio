import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Mail, Phone, Check } from "lucide-react";
import { profile } from "../data/profile";

async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}

export default function Contact() {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const doCopy = async (type: "email" | "phone", value: string) => {
    try {
      await copyText(value);
      setCopied(type);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
        Contato
      </h2>
      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
        Bora conversar — vagas, freela, projetos ou troca de ideia.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-950/30"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-black/10 bg-black/5 p-3 dark:border-white/10 dark:bg-white/5">
                <Mail className="h-5 w-5 text-zinc-900 dark:text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Email
                </div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  {profile.email}
                </div>
              </div>
            </div>

            <button
              onClick={() => doCopy("email", profile.email)}
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-zinc-900 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {copied === "email" ? (
                <>
                  <Check className="h-4 w-4" /> Copiado
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copiar
                </>
              )}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-950/30"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-black/10 bg-black/5 p-3 dark:border-white/10 dark:bg-white/5">
                <Phone className="h-5 w-5 text-zinc-900 dark:text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Telefone
                </div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  {profile.phone}
                </div>
              </div>
            </div>

            <button
              onClick={() => doCopy("phone", profile.phone)}
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-zinc-900 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {copied === "phone" ? (
                <>
                  <Check className="h-4 w-4" /> Copiado
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copiar
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 rounded-3xl border border-black/10 bg-black/5 p-5 text-sm text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
        LinkedIn:{" "}
        <a
          className="font-semibold text-zinc-950 underline decoration-black/20 underline-offset-4 hover:decoration-black/40 dark:text-white dark:decoration-white/30 dark:hover:decoration-white"
          href={`https://${profile.linkedin}`}
          target="_blank"
          rel="noreferrer"
        >
          {profile.linkedin}
        </a>
      </div>
    </div>
  );
}