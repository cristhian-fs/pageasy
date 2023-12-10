import React,{useEffect, useState, useRef} from "react";


//svgs
import { HeaderLogo, ArrowDown } from "../assets/Icons";

const NavMenuMobile = () =>{

  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenuOptions(){
    setMenuOpen(!menuOpen)
  }

  const [optionsOpen, setOptionsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleLinkOptions(id){
    setOptionsOpen(!optionsOpen);
    if(optionsOpen){
        setSelectedCategory(null);
    } else {
        switch(id) {
            case 'products':
                setSelectedCategory('products');
                break;
            case 'solucoes':
                setSelectedCategory('solucoes');
                break;
            case 'features':
                setSelectedCategory('features');
                break;
        }
    }
}

  return (
    <>
    <header className="w-full flex justify-between bg-white-10 items-center px-6 py-4 z-50">
      <HeaderLogo />
      <button className="hamburger hamburger--spin" type="button" onClick={handleMenuOptions}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </header>
    <div className={`absolute overflow-hidden w-full h-full top-0 left-0 px-4 py-2 transition-all duration-300 ${menuOpen ? 'opacity-1 pointer-events-auto' : 'pointer-events-none opacity-0'}`}>

      <div className="bg-white-10 h-2/5 rounded-2xl drop-shadow-2xl">

      <div className="flex justify-between items-center p-2">
        <div className="relative h-full w-full">
          <HeaderLogo className={`transition-all duration-300 ${selectedCategory == null ? '' : 'opacity-0 -translate-x-8'}`}/>
          <button className={`p-2 flex items-center gap-2 absolute inset-0 ${selectedCategory == null ? 'opacity-0 -translate-x-8' : ''}`} onClick={() => setSelectedCategory(null)}>
            <ArrowDown fill="#5E56F2" className={`rotate-90`}/>
            <p className="text-base text-purple-50 font-medium">Voltar</p> 
          </button>
        </div>
        <button className="hamburger p-0 hamburger--spin is-active" type="button" onClick={handleMenuOptions}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        </div>
        <div className="w-full h-px bg-white-30" />
        <div className="relative">
          <ul className={`p-2 transition-all duration-300 ${selectedCategory == null ? '' : 'opacity-0 -translate-x-8'}`}>
            <li className="p-2 flex items-center gap-2" onClick={() => handleLinkOptions('products')}>
              <p className="text-base text-black-90">Produtos</p>
              <ArrowDown className="-rotate-90"/>
            </li>
            <li className="p-2 flex items-center gap-2" onClick={() => handleLinkOptions('solucoes')}>
              <p className="text-base text-black-90">Soluções</p>
              <ArrowDown className="-rotate-90"/></li>
            <li className="p-2 flex items-center gap-2" onClick={() => handleLinkOptions('features')}>
              <p className="text-base text-black-90">Recursos</p>
              <ArrowDown className="-rotate-90"/></li>
            <li className="p-2"><p className="text-base text-black-90">Desenvolvedores</p></li>
          </ul>
          <ul className={`absolute inset-0 transition-all duration-300 ${selectedCategory === 'products' ? '' : 'translate-x-full'} `}>
            {[
              ['Pagamentos Online', '/'],
              ['Assinaturas Recorrentes', '/'],
              ['Pagamentos Globais', '/'],
              ['Pagamentos por Link', '/'],
              ['Checkout Personalizado', '/'],
            ].map(([title, url], index) => (
              <li 
              key={index} 
              className="px-4 py-2 flex items-center">
                <a href={url} onClick={(e) => {e.preventDefault();handleMenuOptions()}}><p className="text-base text-black-80">{title}</p></a>
                </li>
            ))}
          </ul>
          <ul className={`absolute inset-0 transition-all duration-300 ${selectedCategory === 'solucoes' ? '' : 'translate-x-full'} `}>
            {[
              ['Comércio Eletrônico', '/'],
              ['Pagamentos para Empresas', '/'],
              ['APIs para Desenvolvedores', '/'],
              ['Pagamentos para ONGs', '/'],
              ['Soluções White Label', '/'],
            ].map(([title, url], index) => (
              <li key={index} className="px-4 py-2 flex items-center"><a href={url} onClick={(e) => {e.preventDefault();handleMenuOptions()}}><p className="text-base text-black-80">{title}</p></a></li>
            ))}
          </ul>
          <ul className={`absolute inset-0 transition-all duration-300 ${selectedCategory === 'features' ? '' : 'translate-x-full'} `}>
            {[
              ['Relatórios Personalizados', '/'],
              ['Autenticação Biométrica', '/'],
              ['Pagamentos em Tempo Real', '/'],
              ['Segurança Avançada', '/'],
              ['Suporte ao Cliente', '/'],
            ].map(([title, url], index) => (
              <li key={index} className="px-4 py-2 flex items-center"><a href={url} onClick={(e) => {e.preventDefault();handleMenuOptions()}}><p className="text-base text-black-80">{title}</p></a></li>
            ))}
          </ul>
        </div>
      </div> 
    </div>
    
    </>
  )
}

export default NavMenuMobile