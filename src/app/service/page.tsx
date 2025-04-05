import React from 'react'
import Image from 'next/image'

export default function Service(){

    return(
        <>
          <main className='w-full h-72 bg-red-500 flex flex-row'>
            <div id="conteudo">
              <div>Produtos da Ksecurity_</div>
              <h1>Mostra que você faz parte da comunidade em grande estilo</h1>
              <h3>Só aqui você encontra produtos oficiais e exclusivos da nossa marca.</h3>
              <div id="container-button">
                ESCOLHER PRODUTOS
              </div>
            </div>
            <div id="img">
              <Image src="/images/produtos/main.png" alt='Banner' width={500} height={1500} />
            </div>
          </main>
        </>
    )
}