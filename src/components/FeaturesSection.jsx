import React, {useState, useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/pagination';
import useMediaQuery from "../hooks/useMediaQuery";

//svgs and images
import {AcceptationIcon, LockIcon, DocsIcon, IntegrationIcon, ArrowRight} from '../assets/Icons'
import PaymentAnimationSvg from "../assets/PaymentAnimation";
import AcceptationImage from '../img/acceptationImage.png'
import DocsImage from '../img/docsImage.png'
import IntegrationImage from '../img/integrationImage.png'

//gsap
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const PaymentAnimationDiv = () =>{
  return (<>
  <div className="w-full rounded-2xl py-2 bg-gradient-to-r from-blue-40 to-blue-50 flex items-center justify-center">
    <PaymentAnimationSvg />
  </div>
  </>)
}

const SliderMobile = () =>{
  return (
    <>
    <Swiper
        slidesPerView={1}
        pagination={true} modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        loop={true}
    >
      <SwiperSlide>
        <div className="flex items-center gap-2">
        <LockIcon /><p className="text-base text-blue-70">Pagamentos Seguros</p>
        </div>
        
        <div className="mt-6">
        <p className="text-base text-black-80">O PagEasy coloca a segurança em primeiro lugar. Utilizamos criptografia avançada e medidas de segurança robustas para garantir que todas as transações sejam totalmente seguras. 
        <br />
        Sua tranquilidade é a nossa prioridade, permitindo que você e seus clientes realizem transações sem preocupações.</p>
        <a href='' className="flex items-center gap-2 text-blue-50 mt-6"><p>Saber mais</p><ArrowRight fill="#1D5CD3"/></a>
        </div>
        <div className="mt-6">
          <PaymentAnimationDiv />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center gap-2">
        <IntegrationIcon /><p className="text-base text-blue-70">Integração Simples</p>
        </div>
        
        <div className="mt-6">
        <p className="text-base text-black-80">Facilitamos a integração do PagEasy à sua plataforma. Com uma documentação clara e amigável, mesmo os menos familiarizados com tecnologia podem conectar nossa solução de pagamento ao seu site, aplicativo ou loja online em questão de minutos.
        <br />
        Menos tempo lidando com integrações significa mais tempo focado no crescimento do seu negócio.</p>
        <a href='' className="flex items-center gap-2 text-blue-50 mt-6"><p>Saber mais</p><ArrowRight fill="#1D5CD3"/></a>
        </div>
        <div className="mt-6">
          <img src={IntegrationImage} alt="Integração"/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center gap-2">
        <AcceptationIcon /><p className="text-base text-blue-70">Aceitação Global</p>
        </div>
        
        <div className="mt-6">
        <p className="text-base text-black-80">O mundo é o seu mercado, e o PagEasy foi projetado para refletir isso. Aceite pagamentos de clientes em todo o mundo, independentemente da moeda ou do método de pagamento escolhido. 
        <br/>
        Dê aos seus clientes a conveniência de pagar da maneira que desejam, enquanto expande seus horizontes comerciais globalmente.</p>
        <a href='' className="flex items-center gap-2 text-blue-50 mt-6"><p>Saber mais</p><ArrowRight fill="#1D5CD3"/></a>
        </div>
        <div className="mt-6">
          <img src={AcceptationImage} alt="Aceitação global"/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center gap-2">
        <DocsIcon /><p className="text-base text-blue-70">Relatórios Detalhados</p>
        </div>
        
        <div className="mt-6">
        <p className="text-base text-black-80">Conhecimento é poder. Com os relatórios detalhados do PagEasy, você terá insights valiosos sobre suas transações. Acompanhe o desempenho, identifique tendências e tome decisões informadas para impulsionar o crescimento do seu negócio.
        <br/>
        Entenda seu fluxo de caixa e otimize suas estratégias com dados precisos e acessíveis.</p>
        <a href='' className="flex items-center gap-2 text-blue-50 mt-6"><p>Saber mais</p><ArrowRight fill="#1D5CD3"/></a>
        </div>
        <div className="mt-6">
          <img src={DocsImage} alt="Relatórios Detalhados"/>
        </div>
      </SwiperSlide>

      </Swiper>
    </>
  )
}

const FeaturesSection = () =>{

  const categoriesToShow = ['payments', 'integration', 'acceptation', 'docs']

  const [activeCategory, setActiveCategory] = useState(categoriesToShow[0])

  function handleSlides(id){
    switch(id){
      case 'payments':
        setActiveCategory('payments')
        break;
      case 'integration':
        setActiveCategory('integration')
        break;
      case 'acceptation':
        setActiveCategory('acceptation')
        break;
      case 'docs':
        setActiveCategory('docs')
        break;
    }
  }

  const [isActive, setIsActive] = useState(categoriesToShow[0])

  const handleMouseEnter = (id) => {
    switch(id){
      case 'payments':
        setIsActive('payments')
        break;
      case 'integration':
        setIsActive('integration')
        break;
      case 'acceptation':
        setIsActive('acceptation')
        break;
      case 'docs':
        setIsActive('docs')
        break;
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const HandlelingSlides = () =>{
    return (
      <>
      <div className="flex items-start justify-between gap-10">
        <div className="flex flex-col flex-0">
          <div className="relative group transition-all duration-300 flex items-center py-5 px-4 gap-2 cursor-pointer" onMouseEnter={() => handleMouseEnter('payments')} onMouseLeave={handleMouseLeave} onClick={() => handleSlides('payments')}>
            <div className="h-full w-[2px] bg-blue-20 absolute top-0 left-0"/>
            <div className={`${activeCategory === 'payments' ? 'h-full': 'h-0'} transition-all duration-300 w-[2px] bg-blue-50 absolute top-0 left-0 group-hover:h-full`}/>
            <LockIcon isActive={isActive === 'payments' || activeCategory === 'payments'}/><p className={`text-base transition-all duration-300  text-black-60 group-hover:text-blue-70 ${activeCategory == 'payments' ? 'text-blue-70' : ''}`}>Pagamentos Seguros</p>
          </div>

          <div className="relative group transition-all duration-300 flex items-center py-5 px-4 gap-2 cursor-pointer" onMouseEnter={() => handleMouseEnter('integration')} onMouseLeave={handleMouseLeave} onClick={() => handleSlides('integration')}>
            <div className="h-full w-[2px] bg-blue-20 absolute top-0 left-0"/>
            <div className={`${activeCategory === 'integration' ? 'h-full': 'h-0'} transition-all duration-300 w-[2px] bg-blue-50 absolute top-0 left-0 group-hover:h-full`}/>
            <IntegrationIcon isActive={isActive === 'integration' || activeCategory === 'integration'}/><p className={`text-base transition-all duration-300  text-black-60 group-hover:text-blue-70 ${activeCategory == 'integration' ? 'text-blue-70' : ''}`}>Integração Simples</p>
          </div>

          <div className="relative group transition-all duration-300 flex items-center py-5 px-4 gap-2 cursor-pointer" onMouseEnter={() => handleMouseEnter('acceptation')} onMouseLeave={handleMouseLeave} onClick={() => handleSlides('acceptation')}>
            <div className="h-full w-[2px] bg-blue-20 absolute top-0 left-0"/>
            <div className={`${activeCategory === 'acceptation' ? 'h-full': 'h-0'} transition-all duration-300 w-[2px] bg-blue-50 absolute top-0 left-0 group-hover:h-full`}/>
            <AcceptationIcon isActive={isActive === 'acceptation' || activeCategory === 'acceptation'}/><p className={`text-base transition-all duration-300  text-black-60 group-hover:text-blue-70 ${activeCategory == 'acceptation' ? 'text-blue-70' : ''}`}>Aceitação Global</p>
          </div>

          <div className="relative group transition-all duration-300 flex items-center py-5 px-4 gap-2 cursor-pointer" onMouseEnter={() => handleMouseEnter('docs')} onMouseLeave={handleMouseLeave} onClick={() => handleSlides('docs')}>
            <div className="h-full w-[2px] bg-blue-20 absolute top-0 left-0"/>
            <div className={`${activeCategory === 'docs' ? 'h-full': 'h-0'} transition-all duration-300 w-[2px] bg-blue-50 absolute top-0 left-0 group-hover:h-full`}/>
            <DocsIcon isActive={isActive === 'docs' || activeCategory === 'docs'}/><p className={`text-base transition-all duration-300  text-black-60 group-hover:text-blue-70 ${activeCategory == 'docs' ? 'text-blue-70' : ''}`}>Relatórios Detalhados</p>
          </div>
        </div>
        <div className="relative w-[900px] h-[296px]">
          <div className={`flex transition-all duration-1000 gap-8 absolute inset-0 ${activeCategory === 'payments' ? 'opacity-1 translate-y-0':'opacity-0 translate-y-1/2 pointer-events-none'}`}>
          <div className="flex-1">
            <p className="text-base text-black-80">O PagEasy coloca a segurança em primeiro lugar. Utilizamos criptografia avançada e medidas de segurança robustas para garantir que todas as transações sejam totalmente seguras. 
            <br />
            Sua tranquilidade é a nossa prioridade, permitindo que você e seus clientes realizem transações sem preocupações.</p>
            <a href='' className="flex items-center gap-2 text-blue-50 mt-6 transition-all duration-300 group"><p>Saber mais</p><ArrowRight fill="#1D5CD3" className="transition-all duration-300 group-hover:translate-x-1"/></a>
          </div>
          <div className="mt-0 w-[486px]">
            <PaymentAnimationDiv />
          </div>
          </div>
          <div className={`flex transition-all duration-1000 gap-8 absolute inset-0 ${activeCategory === 'integration' ? 'opacity-1 translate-y-0':'opacity-0 translate-y-1/2 pointer-events-none'}`}>
          <div className="flex-1">
          <p className="text-base text-black-80">Facilitamos a integração do PagEasy à sua plataforma. Com uma documentação clara e amigável, mesmo os menos familiarizados com tecnologia podem conectar nossa solução de pagamento ao seu site, aplicativo ou loja online em questão de minutos.
          <br />
          Menos tempo lidando com integrações significa mais tempo focado no crescimento do seu negócio.</p>
          <a href='' className="flex items-center gap-2 text-blue-50 mt-6 transition-all duration-300 group"><p>Saber mais</p><ArrowRight fill="#1D5CD3" className="transition-all duration-300 group-hover:translate-x-1"/></a>
          </div>
          <div className="mt-0">
            <img src={IntegrationImage} alt="Integração"/>
          </div>
          </div>
          <div className={`flex transition-all duration-1000 gap-8 absolute inset-0 ${activeCategory === 'acceptation' ? 'opacity-1 translate-y-0':'opacity-0 translate-y-1/2 pointer-events-none'}`}>
          <div className="flex-1">
          <p className="text-base text-black-80">O mundo é o seu mercado, e o PagEasy foi projetado para refletir isso. Aceite pagamentos de clientes em todo o mundo, independentemente da moeda ou do método de pagamento escolhido. 
          <br/>
          Dê aos seus clientes a conveniência de pagar da maneira que desejam, enquanto expande seus horizontes comerciais globalmente.</p>
          <a href='' className="flex items-center gap-2 text-blue-50 mt-6 transition-all duration-300 group"><p>Saber mais</p><ArrowRight fill="#1D5CD3" className="transition-all duration-300 group-hover:translate-x-1"/></a>
          </div>
          <div className="mt-6">
            <img src={AcceptationImage} alt="Aceitação global"/>
          </div>
          </div>
          <div className={`flex transition-all duration-1000 gap-8 absolute inset-0 ${activeCategory === 'docs' ? 'opacity-1 translate-y-0':'opacity-0 translate-y-1/2 pointer-events-none'}`}>
          <div className="flex-1">
            <p className="text-base text-black-80">Conhecimento é poder. Com os relatórios detalhados do PagEasy, você terá insights valiosos sobre suas transações. Acompanhe o desempenho, identifique tendências e tome decisões informadas para impulsionar o crescimento do seu negócio.
            <br/>
            Entenda seu fluxo de caixa e otimize suas estratégias com dados precisos e acessíveis.</p>
            <a href='' className="flex items-center gap-2 text-blue-50 mt-6 transition-all duration-300 group"><p>Saber mais</p><ArrowRight fill="#1D5CD3" className="transition-all duration-300 group-hover:translate-x-1"/></a>
            </div>
            <div className="mt-6">
              <img src={DocsImage} alt="Relatórios Detalhados"/>
            </div>
  
          </div>
          
        </div>
        
      </div>
      </>
    )
  }

  const section02Ref = useRef(null)
  useEffect(() =>{
    const element = section02Ref.current
    gsap.fromTo(element, 
    { opacity: 0, y: 100 }, 
    { opacity: 1, y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'center 60%',
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  },[])

  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <>
    <section className="py-24 px-6 md:max-w-screen-xl md:mx-auto md:py-28" ref={section02Ref}>
    <div className="">
        <h2 className="font-sans text-3xl text-purple-80 md:text-4xl md:w-2/5">A maneira <span className="purple-gradient-title">mais simples</span> de controlar suas vendas:</h2>
      </div>
      <div className="mt-10">
      {isMobile ? <SliderMobile /> : <HandlelingSlides />
      }
      </div>
    </section>
    </>
  )
}

export default FeaturesSection