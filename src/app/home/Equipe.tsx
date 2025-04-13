"use client"
import React from 'react'
import EquipeComponent from '@/components/ui/equipe'


interface EquipeProps{
        quote: string,
        name: string,
        designation: string,
        src: string,
        linkedin:string,
        insta:string
    }
export default function Equipe(){
    
    const testimonials:EquipeProps[] = [
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Joao Lopes", designation: "CO | Analista de Seguranca", src:"/images/equipe/CEO.jpg", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
    
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Lucas Pacavira", designation: "Analista de Seguranca", src:"/images/equipe/CO-FOUNDER.jpg", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
    
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "David Ferreira", designation: "Analista de seguranca", src:"/images/equipe/David.jpeg", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis"},

            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Carlos Avelino", designation: "Backend Developer | Analista de Sistema", src:"/images/equipe/Analista.png", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
    
            { quote: " Desenvolvedor de softwares com uma certa bagagem no frontend, trabalha com tecnologias que o fazem sentir - se cada vez mais proximo de alcançar seus desafios como frontend(React/Next), Backend(Node/Prisma) e Desifner(Figma)", name: "Dennis Camela", designation: "Desenvolvedor de Software | Designer UI", src:"/images/equipe/DevDennis.png", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },

            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Mário Matias", designation: "Frontend Developer", src:"/images/equipe/DevMatias.png", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },

            { quote: "Apaixonada por transformar ideias em interfaces incríveis, Ama trabalhar com tecnologias com React, Nextjs, Tailwindcss e Bootstrap. Tem como objetivo constante aprimorar suas habilidades e sempre disposta a enfrentar novos desafios que contribuam para meu  crescimento profissional. ", name: "Eugenia Gaieta", designation: "Frontend Developer", src:"/images/equipe/DevEugenia.jpg", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
            
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Kumbris Designer", designation: "Designer Grafico", src:"/images/equipe/Kiala.png", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
           
          ]

    return(
        <>
          <section className='flex-grow mb-16'>
                    <EquipeComponent testimonials={testimonials} autoplay/>
            </section>
        </>
    )
}