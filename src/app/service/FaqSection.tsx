"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quais os principais riscos cibernéticos?",
    answer: "Phishing, ransomware, vazamento de dados e ataques DDoS estão entre os mais comuns."
  },
  {
    question: "Como proteger meus dados pessoais online?",
    answer: "Use autenticação de dois fatores, senhas fortes, antivírus e evite redes Wi-Fi públicas."
  },
  {
    question: "O que é um firewall e por que ele é importante?",
    answer: "Um firewall monitora e controla o tráfego de rede, bloqueando acessos não autorizados."
  },
  {
    question: "Como identificar um e-mail malicioso?",
    answer: "Verifique remetente, erros de escrita, links suspeitos e evite clicar em anexos desconhecidos."
  },
  {
    question: "Vocês oferecem suporte em caso de invasões?",
    answer: "Sim! Nossa equipe está disponível 24h para lidar com incidentes e restaurar a segurança."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-zinc-200 px-4 pt-8">
        {/* Right side */}
        <div className="mx-auto max-w-5xl">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-zinc-800 pb-4">
              <button
                className="w-full flex justify-between items-center text-left text-zinc-300"
                onClick={() => toggle(index)}
              >
                <span className="text-zinc-400 font-mono mr-2">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="flex-1 text-xl">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <p className="mt-2 text-base text-zinc-400 pl-7">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

    </section>
  );
}
