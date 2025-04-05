import React from 'react'
//import Image from 'next/image'
import { FaHome } from "react-icons/fa"
//import Banner from "/public/images/banner.png"


export default function About(){

    return(
        <>
          <main className='w-full  h-80 flex justify-center items-center flex-col  border-b-2 border-green-500'>
            <div className="w-48 flex flex-row justify-around items-center p-2 border-solid border rounded-3xl border-green-500">
              <FaHome className='text-green-500'/>
              <p>Home</p>
              <p>/</p>
              <p>Sobre</p>
            </div>
            <h1 className='text-5xl p-3'>Sobre Nós</h1>
          </main>
          <section>
            <div id="conteudo">
              <div className="button">
                <p>SOBRE NÓS</p>
              </div>
              <h1>Nós Estamos a Providencia <strong>Segurança Digital</strong> Para Ti</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam cum libero voluptatibus animi? Minus animi maxime odio cupiditate est impedit voluptatum eum temporibus, exercitationem, commodi corrupti dolores deleniti in excepturi!</p>
              <div id="porcentagem">
                <p>Proteção em tempo real</p>
                <p>Proteje sua privacidade</p>
              </div>
              <div>
                <p>Saber mais</p>
              </div>
            </div>
            <div id="container-img">
              
            </div>
          </section>
        </>
    )
}