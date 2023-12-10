import React from "react";

//svgs
import {ArrowRight} from '../assets/Icons'
import IphoneCta from '../img/iphoneCta.png'

const Cta = () =>{
  return (
  <>
  <section className="py-24 px-6">
    <div className="ctadiv overflow-hidden flex flex-col items-center rounded-2xl h-[600px]">
    <div className="p-6">
      <p className="text-base text-blue-20"><span className="blue-gradient-title">Experimente Grátis</span></p>
      <h3 className="text-lg text-white-10 mt-2">Pronto para facilitar seus pagamentos online? Experimente o PagEasy gratuitamente por 30 dias! Sem compromissos.</h3>
      <button className="flex group items-center gap-2 transition-all duration-300 hover:bg-blue-70 bg-blue-50 px-6 py-2 rounded-3xl mt-6"><p className="text-base text-blue-10">Comece agora</p><ArrowRight className="group-hover:translate-x-4" fill="#E3E9F6"/></button>
    </div>
    <div className="mt-6">
      <img src={IphoneCta} className="mt-0 w-4/5" alt="" />    
    </div>
    </div>
  </section>
  </>
  )
}

export default Cta