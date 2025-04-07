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

export default function HowAsign() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Como protegemos seus dados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-6 hover:border-green-500 transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
