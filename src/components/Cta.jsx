import React,{useRef, useEffect} from "react";

//svgs
import {ArrowRight} from '../assets/Icons'
import IphoneCta from '../img/iphoneCta.png'

//gsap
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const Cta = () =>{


  const iphoneDiv = useRef(null)
  React.useEffect(() =>{
    const el = iphoneDiv.current
    gsap.fromTo(el, { y: 300}, {
      y: 0,
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
  <section className="py-24 px-6 md:max-w-screen-xl md:mx-auto md:py-32">
    <div className="ctadiv overflow-hidden flex flex-col items-center rounded-2xl h-[600px] md:flex-row md:h-96">
    <div className="p-6 md:flex md:flex-col md:flex-1 md:items-start md:pl-14">
      <p className="text-base text-blue-20"><span className="blue-gradient-title">Experimente Grátis</span></p>
      <h3 className="text-lg text-white-10 mt-2">Pronto para facilitar seus pagamentos online? Experimente o PagEasy gratuitamente por 30 dias! Sem compromissos.</h3>
      <button className="flex group items-center gap-2 transition-all duration-300 hover:bg-blue-70 bg-blue-50 px-6 py-2 rounded-3xl mt-6"><p className="text-base text-blue-10">Comece agora</p><ArrowRight className="group-hover:translate-x-4" fill="#E3E9F6"/></button>
    </div>
    <div className="mt-6 md:flex md:flex-1 md:items-start md:mt-80 iphoneDiv" ref={iphoneDiv}>
      <img src={IphoneCta} className="mt-0 w-4/5 md:w-3/5" alt="" />    
    </div>
    </div>
  </section>
  </>
  )
}

export default Cta