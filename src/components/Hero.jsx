import hero from '/hero.avif'
import hero4 from '../assets/images/hero4.jpg'
import NavBar from './NavBar';
const Hero = () => {
  return (
    <>
 <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
       <div className="absolute inset-0 bg-black/40"></div>
      {/* Dark Overlay */}
     
      <NavBar/>
       
   <div className="relative z-10 flex h-[calc(100%-80px)] gap-4 m-6  md:gap-8 lg:top-16 lg:m-8">
   

        <div className="flex-row  gap-4 md:gap-8 lg:gap-16">
       <h1 className="text-3xl md:text-6xl font-bold text-white w-50 md:w-full lg:w-[70%] mb-4 shadow-lg font-sans ">Discover Your Next Favorite Movie</h1>
        <p className="text-sm md:text-2xl text-white mb-8 w-50 lg:mt-4 md:w-100 lg:w-[70%] shadow-sm font-sans
             ">
          Search, explore, and enjoy the world of cinema at your fingertips.
        </p>
        <a href="#search" className="bg-orange-600 hover:bg-orange-700 lg:mt-8 md:mt-8 mt-5
         text-white font-semibold py-2 text-sm md:py-3 md:text-lg  md:px-4 lg:px-5
         px-3 rounded-lg shadow-lg shadow-black transition-colors duration-300">
          Start Searching
          </a>
      </div>
      </div>
      
      
    </section>
    <div className=" text-2xl font-semibold text-gray-600 mt-5 px-0 md:px-4 lg:px-8">
      <h1 className="text-xl font-bold mx-2 md:text-3xl lg:text-3xl ">Here are some featured movies!</h1>
    </div>
    
    
    </>
  )
}

export default Hero