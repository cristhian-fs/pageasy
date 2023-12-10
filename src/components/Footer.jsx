import React from "react";
//svg
import { QuestionIcon, HeaderLogo , ArrowRight, PhoneIcon, WhatsappIcon, MailIcon, MapIcon, InstagramIcon, FacebookIcon, TwitterIcon, SpotifyIcon, GithubIcon, LinkedinIcon, MyLogo} from "../assets/Icons";

export function QuestionDiv(){
  return (
    <>
    <div className="px-6 -mb-14 z-10 relative">
    <div className="w-full p-8 flex flex-col items-start gap-8 bg-gradient-to-r from-purple-50 to-purple-70 rounded-2xl">
    <div className="flex flex-row items-center gap-2">
      <QuestionIcon />
      <p className="text-base text-white-10">Ficou com alguma dúvida?<br/> Entre em contato com a PagEasy</p>
    </div>
    <button className="flex group items-center gap-2 transition-all duration-300 border border-white-10 group hover:bg-purple-10 px-6 py-2 rounded-3xl mt-6"><p className="text-base text-blue-10 group-hover:text-purple-50">Comece agora</p></button>
    </div>
    </div>
    
    </>
  )
}

const Footer = () =>{
  return (
    <>
    <QuestionDiv />
    <footer className="px-6 py-20 bg-blue-10">
      <div>
      <div>
        <HeaderLogo />
        <p className="text-base font-medium text-black-80 mt-4">Sua nova maneira de lidar com pagamentos online</p>
      </div>
      <div className="mt-10">
      <p className="font-medium text-black-80 text-lg">Quer falar com a gente?</p>
        <a href="" className="flex gap-2 items-center mt-6"><PhoneIcon /><p className="text-base text-black-60">(99) 99999-9999</p></a>
        <a href="" className="flex gap-2 items-center mt-6"><WhatsappIcon /><p className="text-base text-black-60">(99) 99999-9999</p></a>
        <a href="" className="flex gap-2 items-center mt-6"><MailIcon /><p className="text-base text-black-60">cristhianfernandolp@gmail.com</p></a>
        <a href="" className="flex gap-2 items-start mt-6"><MapIcon /><p className="text-base text-black-60">Rua Sem nome, 999 -<br/>
          Salas 1 e 0 - Centro - <br/>Lua, Via Láctea </p></a>
      </div>
      <div className="mt-6">
     <p className="font-medium text-black-80 text-lg">Institucional</p>
     {[
      ['Quem somos', '#'],
      ['Planos', '#'],
      ['Cases', '#'],
      ].map(([title, url]) => (
        <a href={url}><p class className="text-base text-black-60 transition-all duration-200 hover:text-black-90 block mt-4">{title}</p></a>
      ))}
     <p className="font-medium text-black-80 text-lg mt-6">Carreiras</p>
     {[
      ['Vagas abertas', ''],
      ].map(([title, url]) => (
        <a href={url}><p class className="text-base text-black-60 transition-all duration-200 hover:text-black-90 block mt-4">{title}</p></a>
      ))}
     <p className="font-medium text-black-80 text-lg mt-6">Suporte</p>
     {[
      ['Fale com a equipe de vendas', ''],
      ['Central de ajuda', ''],
      ].map(([title, url]) => (
        <a href={url}><p class className="text-base text-black-60 transition-all duration-200 hover:text-black-90 block mt-4">{title}</p></a>
      ))}
     </div>
     <div className="mt-6">
     <p className="font-medium text-black-80 text-lg">Aprenda</p>
     {[
      ['Blog', '#'],
      ['Materiais', '#'],
      ['API', '#'],
      ].map(([title, url]) => (
        <a href={url}><p class className="text-base text-black-60 transition-all duration-200 hover:text-black-90 block mt-4">{title}</p></a>
      ))}
     <p className="font-medium text-black-80 text-lg mt-6">Carreiras</p>
     {[
      ['Política de privacidade', ''],
      ['Termos de uso', ''],
      ['Política de cookies', ''],
      ].map(([title, url]) => (
        <a href={url}><p class className="text-base text-black-60 transition-all duration-200 hover:text-black-90 block mt-4">{title}</p></a>
      ))}
     </div>
     <div className="mt-6">
     <p className="font-medium text-black-80 text-lg">Nos siga nas redes sociais</p>
     <div className="grid w-3/5 grid-cols-3 grid-rows-3 gap-4 mt-4">
      {[
        ['/', InstagramIcon],
        ['/', FacebookIcon],
        ['/', TwitterIcon],
        ['/', SpotifyIcon],
        ['/', GithubIcon],
        ['/', LinkedinIcon],
      ].map(([url, IconComponent], index) => (
        <a href={url} key={index}>
          <IconComponent />
        </a>
      ))}
     </div>
     </div>
    </div>
    <div className="my-8 w-full h-px bg-white-30" />
    <div className="">
      <p className="text-base text-black-90">
      2023 PagEasy. Todos os direitos reservados
      </p>
      <a href="https://www.instagram.com/ocristhiandesigner" className="flex items-center gap-2 mt-4"><p className="text-base text-black-90">
      Powered by Cristhian
      </p><MyLogo /></a>
    </div>
    </footer>
    
    </>
  )
}

export default Footer