import PaymentToggle from "@/components/Forms/PaymentToggle";
import CardPlanos from "@/components/Planos/CardPlano";
import React from "react";

export default function OurServices() {
  return (
    <>
      <section className="Container w-full h-auto flex flex-col justify-center items-center z-10">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          <h2 className="subTitle">Nossos Planos</h2>
          <p className="text-center text-zinc-400 font-lg">
            Tecnologias avançadas para proteger sua empresa contra ameaças
            digitais em constante evolução. Desenvolvemos ferramentas
            inteligentes que monitoram, previnem e respondem a ataques
            cibernéticos de forma eficaz.
          </p>
          <PaymentToggle/>
        </div>

        <div className="w-full mt-5 mb-5 flex flex-row flex-wrap justify-around items-center">
                <CardPlanos/>
                <CardPlanos/>
                <CardPlanos/>
        </div>
      </section>
    </>
  )
}
