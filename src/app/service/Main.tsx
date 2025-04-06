import React from 'react'
//import Image from 'next/image' 

export default function Product(){

    return(
        <>
          <main className='w-full h-[80vh] flex flex-row justify-center items-center'>
            <div className='w-[45rem] flex flex-col justify-center items-center text-center' id="conteudo">
              <div className='w-[12rem] border-gray-400 border border-colapse rounded-md p-2 mb-5'>Produtos da Ksecurity_</div>
              <h1 className="text-5xl">Mostra que você faz parte da comunidade em grande estilo</h1>
              <h3 className='text-xl mt-3 mb-3'>Só aqui você encontra produtos oficiais e exclusivos da nossa marca.</h3>
              <div className='w-[30rem] flex flex-row justify-around items-center'>
                <div className="w-[12rem] font-bold text-sm bg-green-800 flex flex-row justify-evenly items-center p-2 rounded-md">
                  ESCOLHER PRODUTOS
                </div>
                <div className="w-[12rem] font-bold text-sm bg-white text-black flex flex-row justify-evenly items-center p-2 rounded-md" >
                  ESCOLHER PRODUTOS
                </div>
              </div>
            </div>
            {/* <div id="img">
             
               // <Image src="/images/produtos/doiscaras.png" alt='Banner' width={500} height={500} />
                
            </div>*/}
          </main>
        </>
    )
}