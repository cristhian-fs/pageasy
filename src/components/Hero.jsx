import React,{useEffect} from "react";

//svg and images
 import {ArrowRight} from '../assets/Icons'
 import heroImage from '../img/heroMainImage.png'
 import {gsap} from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

 gsap.registerPlugin(ScrollTrigger)

const Hero = () =>{

  return (
    <>
    <section className="pb-24 pt-12 px-6 md:flex md:max-w-screen-xl md:mx-auto md:items-center md:gap-12 md:py-28" id="section01">
      <div className="md:flex-1">
        <h1 className="font-sans text-4xl md:text-6xl text-purple-80"><span className="purple-gradient-title">Descomplicando</span> Pagamentos Online</h1>
        <p className="text-black-80 text-base mt-6">A solução simples e segura para suas transações online. Onde facilitamos o processo de pagamentos online para você. Seja você um pequeno empreendedor ou uma empresa em crescimento, nossa plataforma foi projetada para atender às suas necessidades.</p>
        <button className="flex group items-center gap-2 transition-all duration-300 hover:bg-blue-70 bg-blue-50 px-6 py-2 rounded-3xl mt-6"><p className="text-base text-blue-10">Comece agora</p><ArrowRight className="transition-all duration-300 group-hover:translate-x-1" fill="#E3E9F6"/></button>
      </div>
      <div className="mt-8 md:mt-0 md:flex-1">
        <img src={heroImage} alt="Imagem principal" />
      </div>
    </section>
    </>
  )
}

export default Hero