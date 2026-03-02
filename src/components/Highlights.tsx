import { motion } from "framer-motion";
import { Shield, Network, LayoutDashboard, Zap } from "lucide-react";

const items = [
  {
    title: "Infra & Redes",
    desc: "Troubleshooting, estabilidade e organização de ambiente.",
    icon: Network,
  },
  {
    title: "Suporte N1/N2",
    desc: "Resolução rápida + prevenção de recorrência e documentação.",
    icon: Shield,
  },
  {
    title: "Sistemas & UX",
    desc: "Interfaces modernas e fluxos claros com foco em produtividade.",
    icon: LayoutDashboard,
  },
  {
    title: "Automação",
    desc: "Reduz trabalho manual e acelera o operacional.",
    icon: Zap,
  },
];

export default function Highlights() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((it, idx) => {
        const Icon = it.icon;
        return (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-black/10 bg-black/5 p-3 dark:border-white/10 dark:bg-white/5">
                <Icon className="h-5 w-5 text-zinc-900 dark:text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {it.title}
                </div>
                <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {it.desc}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}