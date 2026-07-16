import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-transparent text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-20 px-4 py-4 ">

        <div className ="flex items-center justify-between gap-2 ">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl  font-bold text-white shadow-lg shadow-black ">MovieSearch</h1>
            
        </div>

        <div className="search-bar">
            <input className="focus:outline-none w-full h-9 mt-0 bg-white placeholder:text-gray-300 text-gray-700 p-2
                rounded-lg md:w-60 lg-w-80 sm:w-40
              " type="text" placeholder="Search movies..." />
        </div>
         <div>
          <a href="#" className=" hover:text-red-600 transition-colors duration-300 bg-white py-1 px-2 text-xs
          text-black rounded-2xl font-semibold    shadow-sm shadow-red-600 border-b-2 border-red-600  ">Favorites</a>
        </div>
       
    </nav>
  )
}

export default NavBar