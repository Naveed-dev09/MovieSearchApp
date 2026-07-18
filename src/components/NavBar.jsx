import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-white border-b-2 border-red-500 text-white flex flex-col sticky top-0
          md:flex-row md:items-center md:justify-between gap-4  z-10 px-4 py-2 md:py-4 shadow-sm  ">

        <div className ="flex items-center justify-between gap-2 ">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl 
             font-bold text-black font-sans">
              MovieSearch
            </h1>
            
        </div>

        <div className="search-bar">
            <input className="focus:outline-none w-full h-9 mt-0
             bg-white placeholder:text-black text-gray-700 p-2 active:ring-1 active:ring-orange-500 focus:ring-1 focus:ring-orange-500
                rounded-lg md:w-60 lg:w-80 sm:w-40 placeholder:text-sm md:placeholder:text-base lg:placeholder:text-md
                shadow-sm border-l border-r border-red-500 transition-all duration-300
              " type="text" placeholder="Search movies..." />
        </div>
         <div>
          <button href="#" className="  transition-color duration-600 bg-white py-1 px-2 text-xs
          text-black rounded-sm font-semibold  shadow-sm lg:py-2 lg:px-3 hidden md:inline-block hover:border hover:border-red-500  hover:text-black
          border-l border-r border-red-500">
            Favorites
          </button>
        </div>
       
    </nav>
  )
}

export default NavBar