// app/components/CallToAction.tsx
"use client";

import { MessageCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-20 px-4 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comece agora sua jornada em cibersegurança
        </h2>
        <p className="text-lg md:text-xl mb-10">
          Acelere sua carreira com proteção digital de ponta e nunca pare de evoluir.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            PLANOS E CONDIÇÕES
          </button>

          <div className="flex items-center gap-2">
            <MessageCircle size={20} />
            <div className="text-sm text-white">
              <p className="opacity-70 leading-none">TEM ALGUMA DÚVIDA?</p>
              <a href="#" target="_blank" className=" font-semibold">
                FALE COM NOSSO TIME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
