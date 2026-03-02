// src/data/profile.ts
export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  tags: string[];
  links?: {
    repo?: string;
    live?: string;
  };
  highlights?: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const profile = {
  name: "Matheus Dias",
  headline: "Infra • Redes • Sistemas • Automação • React/React Native",
  location: "Fortaleza/CE",
  email: "mateusp7441@gmail.com",
  phone: "85989403917",
  linkedin: "www.linkedin.com/in/matheus-dias124",
  summary:
    "Atuo com infraestrutura, redes e suporte em produção, e também desenvolvo sistemas e automações. Gosto de transformar problema operacional em solução simples, rápida e rastreável — com UX boa e código limpo.",
  highlights: [
    { k: "Infra/Redes", v: "Windows, redes, troubleshooting e estabilidade" },
    { k: "Suporte", v: "N1/N2 com foco em reduzir incidentes recorrentes" },
    { k: "Dev", v: "React/TS + RN + integrações + dados (SQL/Firebird)" },
    { k: "Processo", v: "Scrum/Kanban: backlog técnico, priorização e melhoria contínua" },
  ],
  skills: [
    "Windows",
    "Redes",
    "Active Directory",
    "GPO",
    "Suporte N1/N2",
    "Segurança",
    "React",
    "TypeScript",
    "React Native",
    "Node.js",
    "SQL",
    "Firebird",
    "Git/GitHub",
    "Scrum/Kanban",
  ],
  experience: [
    {
      role: "Analista de Infraestrutura / Suporte",
      company: "Empório",
      period: "2024 — atual",
      location: "Fortaleza/CE",
      bullets: [
        "Suporte N1/N2 e troubleshooting de incidentes em ambiente produtivo.",
        "Padronização de rotinas e melhorias para reduzir recorrência de falhas.",
        "Apoio em rede/Windows/AD/GPO e integrações no dia a dia.",
      ],
    },
    {
      role: "Desenvolvedor / Automação (Projetos)",
      company: "Projetos pessoais",
      period: "2023 — atual",
      bullets: [
        "Dashboards e sistemas (ERP/gestão) com React e UX moderna.",
        "Automação com foco em reduzir trabalho manual e retrabalho.",
        "Integrações e persistência de dados (SQL/Firebird).",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "SIGE — Sistema Integrado de Gestão Empresarial",
      tagline: "Dashboard + autenticação + módulos de gestão",
      description:
        "Projeto de ERP com login e dashboard, estatísticas e gráficos, focando em navegação clara, performance e visual profissional.",
      stack: ["React", "TypeScript", "Material UI", "Charts"],
      tags: ["Sistemas", "Frontend", "Dashboard"],
      links: { repo: "" },
      highlights: ["Auth + dashboard", "Cards e gráficos", "UI consistente"],
    },
    {
      title: "ERP para Buffets e Espaços de Eventos",
      tagline: "Gestão operacional com foco em fluxo e produtividade",
      description:
        "ERP voltado para eventos/buffets. O objetivo é organizar processos e reduzir fricção no atendimento e no operacional.",
      stack: ["React (JSX)", "Node.js", "SQL"],
      tags: ["Sistemas", "Produto"],
      links: { repo: "" },
      highlights: ["Modelo de dados", "Fluxos operacionais", "Tela por módulo"],
    },
    {
      title: "Automação de Contratos",
      tagline: "Geração e edição de contratos com templates",
      description:
        "Automação para criar contratos a partir de templates e permitir edição dentro da interface antes de exportar/baixar.",
      stack: ["Python", "UI", "Templates"],
      tags: ["Automação", "Produtividade"],
      links: { repo: "" },
      highlights: ["Templates", "Edição na interface", "Exportação"],
    },
  ] as Project[],
};