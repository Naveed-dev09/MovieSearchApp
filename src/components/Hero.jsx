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
   <section className='hero bg-white min-h-[67vh] flex-col mt-7 mx-6  '>
      
      <div className=' flex  flex-col gap-7 mt-10   lg:gap-5 lg:mt-6 md:p-4      '>
        <div className='py-1' >
          <h1 className='text-5xl font-semibold md:text-4xl line-clamp-5 
          text-black  w-[80%] md:w-3/4 lg:w-1/2 opacity-0  animate-[fadeUp_0.8s_ease-out_forwards] '
          >Explore your <span className='text-red-600'>favourite</span> movies here...
         </h1>
        </div>
        
        <div>
          <p className='font-normal md:text-xl text-sm
         animate-[fadeUp_0.8s_ease-out_0.2s_forwards] lg-text-xl lg:line-clamp-2  text-gray-400  
           w-[70%]'>
        Find the perfect movie for every mood. Explore trending titles, top-rated films,
        and upcoming releases with ease.
          </p>
        </div>

      </div>
      <div className="w-full max-w-[100vw]   mt-5  ">
        <h2   className='text-xl p-2 mt-4 bg-white shadow-sm 
        font-sans mb-3 md:w-[35%] w-[60%] '><span className='text-red-600'>Trending</span> Now
       </h2>

       <Swiper className='h-70'
        modules={[Autoplay, Navigation ]}
        navigation={true}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{
        delay: 2000,
    disableOnInteraction: false,
     }}
        speed={800}
        

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
              <SwiperSlide key={mov.id}   >
                 <div className='flex flex-col  items-center justify-center cursor-pointer  '>
                     <img
                          className="w-full h-64 object-cover rounded-xl "
                          src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                          alt={mov.title}
                      />
        {/* <h5 className='font-sans text-xs  self-center'>{mov.title}</h5> */}
                 </div>
            </SwiperSlide>
    ))}

   </Swiper>
</div>
 </section>
      
      
    </>
  )
}

export default Hero