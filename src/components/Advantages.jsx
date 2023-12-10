import React from "react";

//svgs and images
import {UsersIcon, SecureIcon, ZapIcon} from '../assets/Icons'
import DashboardImage from '../img/dashBoardImageS3.png'
import BlackIphone from '../img/blackIphoneS3.png'
import WhiteIphone from '../img/whiteIphoneS3.png'

const Advantages = () =>{
  return (
    <>
    <section className="py-24 px-6 overflow-hidden">
    <div className="flex flex-col items-center">
      <h2 className="font-sans text-3xl text-center text-purple-80">Receber pagamentos <span className="purple-gradient-title">nunca foi mais simples</span></h2>
      <div className="flex flex-col gap-8 mt-10">
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
        <img src={DashboardImage} className="scale-150 origin-top-left" alt="Dashboard image" />
        <img src={BlackIphone} className="absolute z-10 top-full -left-1/4" alt="Dashboard image" />
        <img src={WhiteIphone} className="absolute z-20 left-12 top-[110%]" alt="Dashboard image" />
      </div>
    </div>
    </section>
    
    </>
  )
}

export default Advantages