import React from "react";
import Link from "next/link";

//Import components
import BackgroundHome from './home/BackgroundHome'
import Button from '@/components/Forms/Button'
import styles from './home/Home.module.scss'
import Projetos from './home/Projetos'
import Equipe from './home/Equipe'
import ShowClient from './home/ShowClient'
import Parceria from "./home/Parceria";

export default function Home() {

  return (
    <main className="h-full w-full">
      
      {/* Adiciona o HeadLine Home */}
       <section id='home' className=' relative h-full w-full pb-24'>
        
        {/* Add Delay */}
        <div className='bg-[#09090b]/80 z-10 absolute top-0 left-0 w-full h-full backdrop-blur-sm'></div>
        
        {/* Add background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <BackgroundHome className="w-full h-full" />
        </div>

          {/* Content Home */}
        <div className=" Container relative flex items-center justify-center text-zinc-200 z-20 w-full md:gap-0 gap-4 md:px-0 px-8 md:py-0 pt-4">

          <div className='md:pt-32 pt-16 md:max-w-4xl flex flex-col gap-4 items-center justify-center'>
              <h2 className="md:text-5xl text-4xl font-bold text-zinc-200 md:text-center text-left"> Sua Seguranca <span className={styles.textDestaque}>Online</span> é a Chave da Sua Tranquilidade <span className={styles.textDestaque}>Offline</span>.</h2>

              <p className='text-lg text-zinc-400 md:text-center text-justify font-light'>Proteger a sua empresa, dolor sit amet consectetur adipisicing elit. Incidunt illum repudiandae, suscipit harum, atque recusandae voluptas earum quidem ipsum expedita iste! Amet quae possimus fugiat dolore! Dolores necessitatibus consectetur labore quidem ipsum expedita iste! Amet quae possimus fugiat dolore! Dolores necessitatibus consectetur labore!</p>
  

              <div className='pt-4 flex flex-wrap justify-start gap-10 items-center'>
                <Button className={` ${styles.button1} `}>Saber Mais</Button>
                <Button className={` ${styles.button}`}> Contacte-nos </Button>
              </div>
          </div>

        </div>
        
       </section>

      {/* sections Projetos */}
       <section id='projets' className=" Container w-full h-full flex flex-col justify-center items-center py-24">

            <div className='flex flex-col items-center justify-center max-w-3xl mx-auto md:px-0 px-8'>
                <h2 className='subTitle'>Nossas Solucoes</h2>
                <p className='md:text-center text-justify text-zinc-400 font-lg'>Tecnologias avançadas para proteger sua empresa contra ameaças digitais em constante evolução. Desenvolvemos ferramentas inteligentes que monitoram, previnem e respondem a ataques cibernéticos de forma eficaz.</p>
            </div>

            <div className='max-w-5xl md:px-0 px-8'>
              <Projetos/>
            </div>
            <div className='text-center mx-auto'>
           <Link href='/service' className='text-[#0aa00a]'>Mais detalhes</Link>
       </div>

       </section>

      {/* sections Clients */}
       <section id='client' className=" Container w-full h-full flex flex-col justify-center items-center py-24">

            <div className='flex flex-col items-center justify-center pb-8 max-w-3xl mx-auto md:px-0 px-8'>
                <h2 className='subTitle'>Nossos Clientes</h2>
                <p className='md:text-center text-justify text-zinc-400 font-lg'>Temos orgulho de atender empresas que acreditam na inovação, segurança e eficiência das soluções que desenvolvemos. Cada parceria representa não apenas um cliente, mas uma história de confiança e resultados concretos.</p>
            </div>

            <div className='max-w-5xl mx-auto'>
                <ShowClient/>
            </div>
       </section>

      {/* sections Parceiros */}
       <section id='connection' className="Container w-full h-full flex flex-col justify-center items-center py-24 ">

            <div className='flex flex-col items-center justify-center pb-8 max-w-3xl mx-auto md:px-0 px-8'>
                <h2 className='subTitle'>Ha Vantagens de Parceiro</h2>
                <p className='md:text-center text-justify text-zinc-400 font-lg'>A força das nossas soluções também vem das colaborações que construímos. Nossos parceiros contribuem com tecnologias, conhecimento e inovação para um ecossistema digital mais seguro.</p>
            </div>

            <div  className='md:px-0 px-8'>
                <Parceria/>
            </div>

       </section>

      {/* sections Equipe */}
       <section id='equipe' className="Container h-full w-full flex flex-col justify-center items-center py-24">

            <div className='flex flex-col items-center justify-center pb-8 max-w-3xl mx-auto md:px-0 px-8'>
                <h2 className='subTitle'>Nossa Equipe</h2>
                <p className='md:text-center text-justify text-zinc-400 font-lg max-w-4xl'>Nossa equipe é formada por especialistas altamente qualificados, comprometidos em entregar excelência e inovação em cada solução. São eles que garantem a qualidade e a segurança que sua empresa merece.</p>
            </div>

            <div className='mx-auto px-8 '>
                  <Equipe/>
            </div>
       </section>
    </main>
  );
}