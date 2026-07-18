import hero from '/hero.avif'
import hero4 from '../assets/images/hero4.jpg'
import NavBar from './NavBar';
const Hero = () => {
  return (
    <>
      <section className='hero bg-white h-min-screen py-10 md:py-20'>
      
      <div className=' flex  flex-col gap-5 mt-0  p-4 lg:gap-5 lg:mt-6 md:p-4 md:mx-8 mx-4    '>
        <div><h1 className='text-4xl font-semibold md:text-7xl   text-black  w-[50%]'>Explore your <span className='text-red-600'>favourite</span> movies here...</h1></div>
        
        <div><p className='font-normal md:text-xl lg-text-xl lg:line-clamp-2 text-xs text-gray-400  w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Accusantium inventore illo consectetur aperiam neque!</p></div>
        
        <div><button className='py-1 px-2 lg:py-2 lg:px-4 lg:text-sm font-semibold font-sans mb-4 shadow-sm  text-xs rounded-sm border-l-2 border-r-2 border-red-500'>Explore Now</button> </div>
        
        

      </div>
      
      </section>
       <h2 className='text-black md:text-xl mt-5 bg-white shadow-sm p-2 rounded-sm
          border-l border-red-500 md:w-[50%] w-[70%] md:mx-9 mx-4 text-sm mb-3'>Here are some <span className='text-red-600 font-semibold'>featured</span> movies...</h2>
      
    </>
  )
}

export default Hero