import hero from '/hero.avif'
import hero4 from '../assets/images/hero4.jpg'
import NavBar from './NavBar';
import {  useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;
import { Autoplay } from "swiper/modules";

import { Navigation } from "swiper/modules";

import "swiper/css/navigation";



import "swiper/css";

const Hero = () => {

const [movie, setTrendingMovies] = useState([])
const [current, setCurrent] = useState(0)
useEffect(() => {
  async function getTrendingMovies() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
      );

      const data = await res.json();
      setTrendingMovies(data.results);
    } catch (error) {
      console.log("Error occurred while fetching movies:", error);
    }
  }

  getTrendingMovies(); // <-- You forgot this
  
}, []);








  return (
    <>
      <section className='hero bg-white min-h-[80vh] flex items-center   '>
      
      <div className=' flex  flex-col gap-8 mt-0   lg:gap-5 lg:mt-6 md:p-4 md:mx-8 mx-4    '>
        <div><h1 className='text-4xl font-semibold md:text-7xl  
          text-black  w-[80%] md:w-3/4 lg:w-1/2 opacity-0  animate-[fadeUp_0.8s_ease-out_forwards] '
          >Explore your <span className='text-red-600'>favourite</span> movies here...
            </h1>
        </div>
        
        <div><p className='font-normal md:text-xl
         animate-[fadeUp_0.8s_ease-out_0.2s_forwards] lg-text-xl lg:line-clamp-2 text-sm text-gray-400  
           w-[70%]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Accusantium inventore illo consectetur aperiam neque!
            </p>
        </div>
        
        <div>
         
        </div>
    <div className="w-full max-w-[93vw] mx-auto ">
  <Swiper
    modules={[Autoplay]}
    slidesPerView={4}
    spaceBetween={20}
     autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  
  
  
  modules={[Navigation]}
  navigation={true}


     breakpoints={{
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  }}
  >
  

  
    {movie.map((mov) => (
      <SwiperSlide key={mov.id}>
        <div className='flex flex-col items-center justify-center cursor-pointer'>
        <img
          className="w-full h-64 object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
          alt={mov.title}
        />
        <h3 className='font-sans text-sm font-semibold self-center'>{mov.title}</h3>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
        

      </div>
      
      </section>
       <h2 className='text-black md:text-xl mt-5 bg-white shadow-sm p-2 rounded-sm
          border-l border-red-500 md:w-[50%] 
          w-[70%] md:mx-9 mx-4 text-sm mb-3'>Here are some 
          <span className='text-red-600 font-semibold'>featured</span> movies...</h2>
      
    </>
  )
}

export default Hero