import React, {useState, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/pagination';

//svgs and images
import {AcceptationIcon, LockIcon, DocsIcon, IntegrationIcon, ArrowRight} from '../assets/Icons'
import PaymentAnimationSvg from "../assets/PaymentAnimation";
import AcceptationImage from '../img/acceptationImage.png'
import DocsImage from '../img/docsImage.png'
import IntegrationImage from '../img/integrationImage.png'

const PaymentAnimationDiv = () =>{
  return (<>
  <div className="w-full rounded-2xl py-2 bg-gradient-to-r from-blue-40 to-blue-50 flex items-center justify-center">
    <PaymentAnimationSvg />
  </div>
  </>)
}

const FeaturesSection = () =>{

  return (
    <>
    <section className="py-24 px-6">
    <div className="">
        <h2 className="font-sans text-3xl text-purple-80">A maneira <span className="purple-gradient-title">mais simples</span> de controlar suas vendas:</h2>
      </div>
      <div className="mt-10">
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
      </div>
    </section>
    </>
  )
}

export default FeaturesSection