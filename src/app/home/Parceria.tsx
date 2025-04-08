import React from 'react';
import { ReactNode } from 'react';

//import icons
import { FaHandshake, FaCogs, FaChartLine } from "react-icons/fa";

interface ChildrenProps{
    children:ReactNode,
    className:string
}

//Our Cards 
function Card({children, className} : ChildrenProps){
    return(
        <>
        <div className={className}>
            {children}
        </div>
        </>
    )
}

//This is the content of the cards
function CardContent({children, className} : ChildrenProps){
    return(
        <>
        <div className={className}>
            {children}
        </div>
        </>
    )
}

export default function Parceria(){


    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
            <Card className='flex flex-col justify-center items-center py-16 px-4 rounded-lg border border-zinc-800 hover:scale-105 transition-transform duration-300 ease-in-out'>
                <CardContent className=''>
                <FaHandshake className=" mx-auto text-5xl text-[#0aa00a] mb-2" />
                    <h3 className="text-xl font-semibold text-center">Parcerias Estratégicas</h3>
                    <p className="text-center px-x text-sm text-zinc-600">
                        Conecte sua empresa a um ecossistema de soluções inovadoras e seguras. 
                        Juntos podemos alcançar novos mercados e fortalecer nossos negócios.
                    </p>
                </CardContent>
            </Card>

            <Card className='flex flex-col justify-center items-center py-16 px-4 rounded-lg border border-zinc-800 hover:scale-105 transition-transform duration-300 ease-in-out'>
                <CardContent className=''>
                <FaCogs className="mx-auto text-5xl text-[#0aa00a] mb-2" />
                    <h3 className=" text-center text-xl font-semibold">Soluções Personalizadas</h3>
                    <p className="text-center text-sm text-zinc-600">
                        Buscamos parceiros que ofereçam tecnologias, produtos ou serviços que 
                        complementem as nossas soluções de cibersegurança.
                    </p>
                </CardContent>
            </Card>

            <Card className='py-16 px-4 rounded-lg border border-zinc-800 hover:scale-105 transition-transform duration-300 ease-in-out'>
            <FaChartLine className="mx-auto text-5xl text-[#0aa00a] mb-2" />
                <CardContent className='flex flex-col justify-center items-center'>
                    <h3 className="text-center text-xl font-semibold">Cresça Conosco</h3>
                    <p className="text-center text-sm text-zinc-600">
                        Acreditamos no poder da colaboração. Venha fazer parte de uma rede sólida 
                        de empresas e profissionais focados em segurança digital e inovação.
                    </p>
                </CardContent>
            </Card>
</div>
    )
}