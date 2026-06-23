
import img1 from '../assets/one.webp'
import img2 from '../assets/OIP (2).webp'
import img3 from '../assets/OIP (3).webp'
import img4 from '../assets/OIP (5).webp'





// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination , Navigation , Autoplay } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';



export default function MainSwiper() {
  return (
    <>
      <div className="container">
        <Swiper 
        loop={true}
        pagination={true} modules={[Pagination , Autoplay]} className="mySwiper" 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
          
          <SwiperSlide className='swiper-slide'>
              <div className="content">
                <h4>introducing the new</h4>
                <h3>microsoft x box <br />  360 controler</h3>
                <p>windows xp/10/7/8/ps3 , tv x box</p>
                <Link to="/" className="btn">shop now</Link>
              </div>
              <img src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp"
 alt="peceture one" />
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
              <div className="content">
                <h4>introducing the new</h4>
                <h3>microsoft x box <br />  360 controler</h3>
                <p>windows xp/10/7/8/ps3 , tv x box</p>
                <Link to="/" className="btn">shop now</Link>
              </div>
              <img src="https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/2.webp"
 alt="peceture one" />
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
              <div className="content">
                <h4>introducing the new</h4>
                <h3>microsoft x box <br />  360 controler</h3>
                <p>windows xp/10/7/8/ps3 , tv x box</p>
                <Link to="/" className="btn">shop now</Link>
              </div>
              <img src="https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp" alt="peceture one" />
          </SwiperSlide>

         
          <SwiperSlide className='swiper-slide'>
              <div className="content">
                <h4>introducing the new</h4>
                <h3>microsoft x box <br />  360 controler</h3>
                <p>windows xp/10/7/8/ps3 , tv x box</p>
                <Link to="/" className="btn">shop now</Link>
              </div>
              <img src="https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp" alt="peceture one" />
          </SwiperSlide>
           <SwiperSlide className='swiper-slide'>
              <div className="content">
                <h4>introducing the new</h4>
                <h3>microsoft x box <br />  360 controler</h3>
                <p>windows xp/10/7/8/ps3 , tv x box</p>
                <Link to="/" className="btn">shop now</Link>
              </div>
              <img src="https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp" alt="peceture one" />
          </SwiperSlide>
        </Swiper>
      </div>  
    </>
  );
}
