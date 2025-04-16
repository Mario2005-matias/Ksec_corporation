"use client";
import React from "react";

export default function About() {
  return (
    <>
      <div className="">
        
      </div>
      <div className="w-[40rem]">
        <h2 className="text-4xl font-bold my-2">KSecurity</h2>
        <p >
           é uma startup especializada em monitoramento e resposta a
          incidentes cibernéticos oferecendo soluções avançadas que utilizam
          inteligência artificial para detectar e aprender com novas ameaças na
          rede.
        </p>
        <p>
          Nossa plataforma permite o monitoramento contínuo de todos os
          dispositivos conectados, com recursos para isolar dispositivos
          comprometidos e bloquear conexões suspeitas, tanto internas quanto
          externas.
        </p>

        <div className=" flex flex-row flex-wrap items-center justify-between">
          <div className="w-76 flex text-sm  flex-row justify-center items-center m-2">
            <div className="max-w-md rounded-lg p-6 shadow-lg border border-[#0aa00a]/20">
              <div className="flex items-center mb-4">
                <div className="bg-[#0aa00a] p-2 rounded-md mr-3"></div>
                <div className="flex flex-col">
                  <span className="text-[#0aa00a] text-sm">
                    Ksecurity_
                  </span>
                  <h2 className="text-white text-md font-bold">Nossa Missão</h2>
                </div>
              </div>
              <div className="space-y-4 mt-5">
                <div className="flex">
                  <p className="text-gray-200">
                    Focados em inovação e eficiência, trabalhamos para prevenir
                    ataques e mitigar ameaças, garantindo a segurança digital de
                    forma proativa e eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="w-76 flex text-sm flex-row justify-center items-center m-2">
            <div className="max-w-md rounded-lg p-6 shadow-lg border border-[#0aa00a]/20">
              <div className="flex items-center mb-4">
                <div className="bg-[#0aa00a] p-2 rounded-md mr-3"></div>
                <div className="flex flex-col">
                  <span className="text-[#0aa00a] text-sm">
                    Ksecurity_
                  </span>
                  <h2 className="text-white text-md font-bold">Nossa Visão</h2>
                </div>
              </div>
              <div className="space-y-4 mt-5">
                <div className="flex">
                  <p className="text-gray-200">
                    Com uma visão de expansãointernacional, buscamos promover um
                    ambiente digital mais seguro e resiliente, levando proteção
                    e inovação além das fronteiras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
