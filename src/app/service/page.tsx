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

        <section className='h-full w-full flex flex-col justify-center items-center gap-4 mt-10 py-20'>
           
            <div className='max-w-5xl '>
              <h2 className=' text-4xl text-zinc-200 font-bold text-center'>Saiba mais sobre os nossos Servicos</h2>
              <p className='text-lg text-zinc-400 text-center font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, non architecto? Consectetur sequi minima itaque quaerat libero porro dolor? Qui totam facilis laudantium facere sapiente voluptatum repudiandae dicta soluta sit.</p>
            </div>
          
            <div className='max-w-5xl '>
              <NiveisDeSeguranca />
            </div>
        </section>

        <section className=" w-full h-full flex flex-col justify-center items-center gap-4 py-25 my-12">
          <div className=" mx-auto">
            <h2 className="subTitle">Nossas Soluções</h2>
          </div>

          <div className="max-w-5xl">
            <Projetos />
          </div>
        </section>

        <section className='w-full h-full py-24 flex flex-col items-center justify-center gap-4'>

            <div className=''>        
                <h2 className="subTitle" > Como protegemos seus dados </h2>
            </div>

            <div className=''>        
                <ComoProtegemos/>
            </div>
        </section>


          <section>
              <CallToAction/>
          </section>

        <section className='w-full h-full  gap-4 py-24'> 

          <div className='flex flex-col items-center justify-center'>
               <h2 className='subTitle'> Perguntas Frequentes </h2>
          </div> 

          <div className=' '>
             <FaqSection/>
          </div>
        </section>

      </main>
    </>
  );
}
