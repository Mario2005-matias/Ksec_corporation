import React from 'react'
import { FaHome } from "react-icons/fa"


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
        </>
    )
}