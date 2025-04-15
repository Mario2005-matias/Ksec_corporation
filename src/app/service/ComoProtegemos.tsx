// app/components/CyberSecurityBenefits.tsx
"use client";

import { ShieldCheck, Lock, AlertTriangle, Server } from "lucide-react";
const features = [
  {
    icon: <ShieldCheck size={32} color="green" />,
    title: "Proteção Total",
    description: "Cobertura completa contra ameaças cibernéticas 24/7."
  },
  {
    icon: <Lock size={32} color="green" />,
    title: "Criptografia Avançada",
    description: "Segurança de dados com criptografia de nível militar."
  },
  {
    icon: <AlertTriangle size={32} color="green" />,
    title: "Monitoramento de Vulnerabilidades",
    description: "Identifique e corrija falhas antes que virem ataques."
  },
  {
    icon: <Server size={32} color="green" />,
    title: "Servidores Seguros",
    description: "Infraestrutura protegida com firewall e backups diários."
  }
];

export default function ComoProtegemos() {
  return (
    <section className=" text-zinc-200 px-4">
      <div className="max-w-5xl mx-auto text-center ">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className=" p-6 flex flex-col justify-center items-start py-12 px-8 rounded-lg border border-zinc-800"
            >
              <div className="text-justify text-5xl text-[#0aa00a] mb-2">{item.icon}</div>
              <h3 className="text-xl font-semibold text-justify">{item.title}</h3>
              <p className="text-justify px-x text-sm text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
