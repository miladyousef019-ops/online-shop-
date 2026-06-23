import React from 'react'
import Product from './Product'
import './slideproduct.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination , Navigation , Autoplay } from 'swiper/modules';
import  { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const SlideProducts = ({title , data}) => {
  return (
    <div className="slide-products slide">
        <div className="container">
            <div className="top-slide">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facilis!</p>
            </div>

          <Swiper 
            slidesPerView={5}
        spaceBetween={30}
       
        modules={[Navigation , Autoplay]}
        className="mySwiper"
        loop={true}
         pagination={{
          clickable: true,
        }}
         autoplay={{          
        delay: 1500,
        disableOnInteraction: false}} 
        
         >
              
              
              {data.map((item) => {
                return(
                  <SwiperSlide className='swiper-slide'>
                    <Product item={item} />
                  </SwiperSlide>
                )
            })}
            </Swiper>

        </div>
    </div>
  )
}

export default SlideProducts
