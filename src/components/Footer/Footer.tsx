import React from 'react'
import Link from 'next/link'

//Imports icons
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

// imports components
import Logo from '@/components/Logo/Logo'

export default function Footer(){

    return (
        <>
            {/* Show Logo */}
            <footer className="bg-zinc-200">
                <div className="mx-auto max-w-screen-xl px-4 pt-10 pb-6 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <Link href='/' className="flex justify-center sm:justify-start">
                                <Logo />
                             </Link>

                            <p className="mt-6 max-w-md text-justify text-zinc-700 sm:max-w-xs sm:text-left text-sm">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpdhfd. 
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpdhfd. 
                            </p>

                            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8 text-zinc-700 text-lg font-medium">

                                <li>
                                    <Link
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className=" transition hover:text-zinc-700/75"
                                    >
                                    <span className=""><FaFacebook/></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className=" "
                                    >
                                    <span className=""><FaInstagram/></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:text-zinc-700/75 "
                                    >
                                    <span className=""><FaLinkedin/></span>
                                    </Link>
                                </li>

                              
                            
                        </ul>
                    </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Sobre Nós</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="text-zinc-700 transition hover:text-zinc-700/75" href="/">
                Podutos
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                Nossa Equipa
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                Parceiros
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="#"> Clientes </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-zinc-900">Nosso Servico</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                Segurança da Informação
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/"> Websites</Link>
            </li>

            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/"> Design UI </Link>
            </li>

            <li>
              <Link className="text-zinc-700 transition hover:text-zinc-700/75" href="/"> Google Ads </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Nosso Contacto</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-gray-900 shadow-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="flex-1 text-gray-700">ksecurity@company.com</span>
              </Link>
            </li>

            <li>
              <Link
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-gray-900 shadow-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="flex-1 text-gray-700">+244 953 266 447</span>
              </Link>
            </li>

            <li
              className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 text-gray-900 shadow-sm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

                                <address className="-mt-0.5 flex-1 text-gray-700 not-italic">
                                 Angola, Luanda
                                </address>
                             </li>
                        </ul>
                    </div>
                 </div>
             </div>

                <div className="mt-12 border-t border-zinc-300 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-500">
                            <span className="block sm:inline">Todos os direitos reservados.</span>

                            <Link
                            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                            href="/"
                        >
                            Termos e Condições
                        </Link>

                        </p>

                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2025 Ksecurity Startup</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}