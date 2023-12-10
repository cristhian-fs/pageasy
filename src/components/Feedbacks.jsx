import React,{useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//svgs and imgs
import { DoubleQuoteIcon } from "../assets/Icons";

const feedbacksData = [
  {
    name: 'Adoaldo',
    occupation: 'Web Designer',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Natan C.',
    occupation: 'Web Designer',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Felipe G.',
    occupation: 'Web Designer/Branding',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Lucas S.',
    occupation: 'Editor de vídeo',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Alisson G.',
    occupation: 'Designer',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Marcos V.',
    occupation: 'Web Designer',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
]



const Feedbacks = () =>{
  

  return (
    <>
    <section className="py-24 px-6 overflow-hidden">
      <div className="flex flex-col">
      <h2 className="font-sans text-3xl text-purple-80">O que nossos clientes dizem:</h2>
      </div>
      <Swiper
        pagination={{
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + `&nbsp;de&nbsp;` + (total); 
    }
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="feedbackSwiper mt-14"
        slidesPerView={1}
        spaceBetween={32}
      >
      {feedbacksData.map(({name, occupation, message}, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white-10 p-6 rounded-2xl flex flex-col gap-4 drop-shadow-[0_12px_27px_rgba(12,30,62,0.12)]">
          <DoubleQuoteIcon />
          <p className="text-base text-black-80">{message}</p>
          <div className="flex gap-2">
            <div className="rounded-full h-10 w-10 bg-gradient-to-tr from-purple-40 to-purple-50"/>
            <div>
              <p className="text-base text-black-100">{name}</p>
              <p className="text-sm text-blue-60">{occupation}</p>
            </div>
          </div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </section>
    </>
  )
}

export default Feedbacks