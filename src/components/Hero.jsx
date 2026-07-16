
import heroimage from '../assets/images/hero.jpg'
import hero1 from '../assets/images/hero1.jpg'
import hero3 from '../assets/images/hero3.jpg'
import hero4 from '../assets/images/hero4.jpg'
import NavBar from './NavBar';
const Hero = () => {
  return (
    <>
 <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero4})` }}
    >
       <div className="absolute inset-0 bg-black/40"></div>
      {/* Dark Overlay */}
     
      <NavBar/>
       
   <div className="relative z-10 flex h-[calc(100%-80px)] items-center justify-center text-center">
   

        <div>
       <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-lg shadow-black">Discover Your Next Favorite Movie</h1>
        <p className="text-lg md:text-2xl text-white mb-8 shadow-lg shadow-black">Search, explore, and enjoy the world of cinema at your fingertips.</p>
        <a href="#search" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-black transition-colors duration-300">Start Searching</a>
      </div>
      </div>
      
      
    </section>
    <div className=" text-2xl font-semibold text-gray-600 mt-5 px-0 md:px-4 lg:px-8">
      <h1 className="text-3xl font-bold ">Here are some featured movies!</h1>
    </div>
    
    
    </>
  )
}

export default Hero