// app/components/CallToAction.tsx
"use client";

import React from 'react'
import Link from 'next/link'
import { MessageCircle } from "lucide-react";

// import Componenents
import Button from '@/components/Forms/Button'

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-16 px-4 text-white relative overflow-hidden rounded-full">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Garanta o melhor plano para si
        </h2>
        <p className="text-lg md:text-xl mb-10">
          Com a nossa solucacao a seguranca da sua empresa e a nossa prioridade
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button className={`border border-zinc-300 text-green-700 font-semibold px-6 py-3 rounded-full`}>
            PLANOS E CONDIÇÕES
          </Button>

          <div className="flex items-center gap-2">
            <MessageCircle size={20} />
            <div className="text-sm text-white">
              <p className="opacity-70 leading-none">TEM ALGUMA DÚVIDA?</p>
              <Link href="/" target="_blank" className=" font-semibold">
                FALE COM NOSSO TIME
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
