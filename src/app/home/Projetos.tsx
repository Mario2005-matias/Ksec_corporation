"use client"

import { HoverEffect } from "../../components/ui/card-hover-effect";
import Link from 'next/link'

export default function Projetos() {
  return (
    <div className=" max-w-5xl mx-auto">
      <HoverEffect items={projects} />

       <div className='text-center mx-auto'>
          <Link href='/service' className='text-[#0aa00a]'>Mais detalhes</Link>
       </div>

    </div>
  );
}
export const projects = [
  {
    title: "CTI(Cyber Threat Intelligence)",
    description:
      "Lorem A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Security Assessmenent",
    description:
      "Lorem A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Adesc(Acção Defensiva Segura)",
    description:
      "Lorem A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
 
];
