import React from "react";
import NiveisDeSeguranca from "./NiveisDeSeguranca";
import Projetos from "../home/Projetos";
import ComoProtegemos from "./ComoProtegemos";
import CallToAction from "./CallToAction";
import FaqSection from "./FaqSection";


export default function Product() {
  return (
    <>
    <main className='h-full w-full'>

        <section className='h-full w-full flex flex-col justify-center items-center gap-4 md:mt-10 mt-5 py-20'>
           
            <div className='max-w-5xl md:px-0 px-8'>
              <h2 className=' text-justify text-4xl text-zinc-200 font-bold md:text-center pb-1'>Saiba mais sobre os nossos Servicos</h2>
              <p className='text-lg text-zinc-400 md:text-center font-light text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, non architecto? Consectetur sequi minima itaque quaerat libero porro dolor? Qui totam facilis laudantium facere sapiente voluptatum repudiandae dicta soluta sit.</p>
            </div>
          
            <div className='md:max-w-5xl md:px-0 px-8 w-full'>
              <NiveisDeSeguranca />
            </div>
        </section>

        <section className=" w-full h-full flex flex-col justify-center items-center gap-4 py-25 my-12">
          <div className=" mx-auto">
            <h2 className="subTitle">Nossas Soluções</h2>
          </div>

          <div className="max-w-5xl md:px-0 px-8">
            <Projetos />
          </div>
        </section>

        <section className='w-full h-full py-24 flex flex-col items-center justify-center gap-4'>

            <div className=' md:px-0 px-8'>        
                <h2 className="subTitle" > Como protegemos seus dados </h2>
            </div>

            <div className='md:px-0 px-8'>        
                <ComoProtegemos/>
            </div>
        </section>


          <section>
              <CallToAction/>
          </section>

        <section className='w-full h-full  gap-4 py-24'> 

          <div className='flex flex-col items-center justify-center md:px-0 px-8'>
               <h2 className='subTitle'> Perguntas Frequentes </h2>
          </div> 

          <div className='md:px-0 px-8 '>
             <FaqSection/>
          </div>
        </section>

      </main>
    </>
  );
}
