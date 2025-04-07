import React from "react";
import Main from "./Main";
import AfterMain from "./AfterMain";
import Projetos from "../home/Projetos";
import OurServices from "./OurServices";
import HowAsign from "./HowAsign";
import CallToAction from "./CallToAction";
import FaqSection from "./FaqSection";
//import Image from 'next/image'

export default function Product() {
  return (
    <>
      <Main />
      <AfterMain />
      <section className="Container w-full h-full flex flex-col justify-center items-center z-10">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          <h2 className="subTitle">Nossas Soluções</h2>
          <p className="text-center text-zinc-400 font-lg">
            Tecnologias avançadas para proteger sua empresa contra ameaças
            digitais em constante evolução. Desenvolvemos ferramentas
            inteligentes que monitoram, previnem e respondem a ataques
            cibernéticos de forma eficaz.
          </p>
        </div>

        <div className="max-w-5xl">
          <Projetos />
        </div>
      </section>
      <OurServices/>
      <HowAsign/>
      <CallToAction/>
      <FaqSection/>
    </>
  );
}
