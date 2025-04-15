'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

//import components
import { CiLight } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from '@/components/Logo/Logo'
import Button from '@/components/Forms/Button'

export default function Header() {

  const [menuOpen, setMenuOpen]=React.useState(false)

   const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
   }

  return (
    <main className={ `${styles.header} w-full text-zinc-200 md:px-10 px-4 py-1 flex justify-between items-center shadow-sm shadow-zinc-900 backdrop-blur-md bg-[#09090b]/80 z-50 sticky top-0`}>

        {/* Add Logotipo K */}
      <section className=''> 
          <Link href='/'> <Logo /></Link>
      </section>

      {/* Show Button mobile  */}
        <Button className={` ${styles.btnMobile} md:hidden cursor-pointer`} onClick={toggleMenu}>

          { menuOpen ? 
          <FiX className='text-2xl' /> : 
          <FiMenu className='text-2xl' /> }

        </Button>

        <section className='hidden md:flex justify-around items-center gap-4'>
          {/* feture Config: mode theme */}
          <div> <span className='text-xl'><CiLight /></span></div>
          
          {/* Navigate to navBar */}
          <nav className=' flex gap-2 items-center justify-center text-lg font-normal text-zinc-200 '>
              <Link href='/#home' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Home</Link>
              <Link href='/#projets' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Produtos</Link>
              <Link href='/#client' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Clientes</Link>
              <Link href='/#connection' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Parceiros</Link>
              <Link href='/#equipe' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Equipe</Link>
              
          </nav>
        </section>

        {/* Add button to contact */}
        <section className='hidden md:flex'>
          <Button className={`${styles.button} rounded-sm`}>Contacte</Button>
        </section>
      
      {/* Show Menu Mobile */}
    
          <section className={` fixed top-0 left-0 px-5 flex flex-col justify-center items-start gap-4 bg-[#09090b] backdrop-blur-md h-[22rem] w-full -z-30 transition-transform duration-700 ease-in-out ${menuOpen ? 'translate-y-0 ' : '-translate-y-full'}`}>
          
          {/* Navigate to navBar */}
          <nav className=' pt-12 flex flex-col gap-1 items-start justify-center text-lg font-normal text-zinc-200 w-full'>
             
              <Link href='/#home' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:bg-[#0d0d10] focus:bg-[#0d0d10] p-2 py-1 rounded-sm w-full' onClick={toggleMenu}>Home</Link>

              <Link href='/#projets' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:bg-[#0d0d10] focus:bg-[#0d0d10] p-2 py-1 rounded-sm w-full' onClick={toggleMenu}>Produtos</Link>

              <Link href='/#client' className='transition-all duration-300 ease-in-out hover:text-zinc-300  hover:bg-[#0d0d10] focus:bg-[#0d0d10] p-2 py-1 rounded-sm w-full' onClick={toggleMenu}>Clientes</Link>

              <Link href='/#connection' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:bg-[#0d0d10] focus:bg-[#0d0d10] p-2 py-1 rounded-sm w-full' onClick={toggleMenu}>Parceiros</Link>

              <Link href='/#equipe' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:bg-[#0d0d10] focus:bg-[#0d0d10] p-2 py-1 rounded-sm w-full' onClick={toggleMenu}>Equipe</Link>
              
          </nav>

          <div className='flex  w-full px-2'>
          <Button className={`${styles.button1} rounded-sm w-full`}>Contacte</Button>
          </div>
        </section>
    </main>
  )
}
