import hero from '/hero.avif'
import hero4 from '../assets/images/hero4.jpg'
import NavBar from './NavBar';
const Hero = () => {
  return (
    <>
      <section className='hero bg-white min-h-[50vh] flex items-center  px-4 '>
      
      <div className=' flex  flex-col gap-8 mt-0   lg:gap-5 lg:mt-6 md:p-4 md:mx-8 mx-4    '>
        <div><h1 className='text-4xl font-semibold md:text-7xl  
          text-black  w-[80%] md:w-3/4 lg:w-1/2 opacity-0  animate-[fadeUp_0.8s_ease-out_forwards] '
          >Explore your <span className='text-red-600'>favourite</span> movies here...
          </h1>
          </div>
        
        <div><p className='font-normal md:text-xl animate-[fadeUp_0.8s_ease-out_0.2s_forwards] lg-text-xl lg:line-clamp-2 text-sm text-gray-400    w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Accusantium inventore illo consectetur aperiam neque!</p></div>
        
        <div><button className='py-3 px-4 lg:py-2 lg:px-4 lg:text-sm font-semibold font-sans mb-4 shadow-sm 
          duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 text-xs rounded-sm border-l-2 border-r-2 border-red-500'>Explore Now</button> </div>
        
        

      </div>
      
      </section>
       <h2 className='text-black md:text-xl mt-5 bg-white shadow-sm p-2 rounded-sm
          border-l border-red-500 md:w-[50%] w-[70%] md:mx-9 mx-4 text-sm mb-3'>Here are some <span className='text-red-600 font-semibold'>featured</span> movies...</h2>
      
    </>
  )
}

export default Hero