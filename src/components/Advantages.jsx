import React,{useEffect, useRef} from "react";

//svgs and images
import {UsersIcon, SecureIcon, ZapIcon} from '../assets/Icons'
import DashboardImage from '../img/dashBoardImageS3.png'
import BlackIphone from '../img/blackIphoneS3.png'
import WhiteIphone from '../img/whiteIphoneS3.png'

//gsap
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Advantages = () =>{

  const section03Ref = useRef(null)
  React.useEffect(() =>{
    const el = section03Ref.current
    gsap.fromTo(el.querySelectorAll('div'), {opacity: 0, y: 100}, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%', 
        end: 'center 60%',
        scrub: true,
      }
    })

    ScrollTrigger.refresh()
  },[])

  return (
    <>
    <section className="py-24 px-6 overflow-hidden md:overflow-visible md:max-w-screen-xl md:mx-auto md:py-28" ref={section03Ref}>
    <div className="flex flex-col items-center">
      <h2 className="font-sans text-3xl text-center text-purple-80 md:text-4xl md:w-2/5">Receber pagamentos <span className="purple-gradient-title">nunca foi mais simples</span></h2>
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        <div className="flex flex-col flex-1 gap-4 p-6 advantageCard">
          <ZapIcon />
          <p className="text-base font-medium text-blue-70">Cadastro Rápido:</p>
          <p className="text-base text-black-80">Registre-se em minutos e comece a receber pagamentos imediatamente.</p>
        </div>
        <div className="flex flex-col flex-1 gap-4 p-6 advantageCard">
          <SecureIcon />
          <p className="text-base font-medium text-blue-70">Integração Personalizada:</p>
          <p className="text-base text-black-80">Escolha entre nossas opções de integração simples e personalize de acordo com suas necessidades.</p>
        </div>
        <div className="flex flex-col flex-1 gap-4 p-6 advantageCard">
          <UsersIcon />
          <p className="text-base font-medium text-blue-70">Pagamentos Instantâneos:</p>
          <p className="text-base text-black-80">Receba seus fundos de forma rápida e eficiente, sem complicações.</p>
        </div>
      </div>
      <div className="relative mt-12 mb-80">
        <img src={DashboardImage} className="scale-150 md:scale-100 origin-top-left" alt="Dashboard image" />
        <img src={BlackIphone} className="absolute z-10 top-full -left-1/4 md:top-2/3 md:left-32" alt="Dashboard image" />
        <img src={WhiteIphone} className="absolute z-20 left-12 top-[110%] md:left-80 md:top-2/3" alt="Dashboard image" />
      </div>
    </div>
    </section>
    
    </>
  )
}

export default Advantages