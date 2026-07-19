import React from 'react'
import poster from '../assets/images/poster.jpg'
import { useEffect, useState } from "react";
import { getPopularMovies } from "../api.js";
import { motion } from "framer-motion";

const Card = () => {

const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await getPopularMovies();
      setMovies(data);
    }

    loadMovies();
  }, []);

  
  return (
    <>
    {movies.map((movie) => (
      <motion.div key={movie.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
       <div key={movie.title} className="bg-white rounded-lg shadow-md p-2 w-auto md:p-4 md:m-4 md:w-64 flex flex-col h-full
                                        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
     < img   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg mb-4
             transition-transform duration-500 hover:scale-105 " />
      <h2 className="md:text-xl text-xl font-poppinns font-semibold mb-2">{movie.title}</h2>
      <p className="text-gray-600 mb-2 md:text-sm text-sm"><span className="font-semibold text-green-700">Release Date:</span> {movie.release_date}</p>
      <p className="text-gray-600 mb-2 md:text-sm text-sm"><span className="font-semibold text-orange-500">Rating:</span> {Number(movie.vote_average).toFixed(1)}/10</p>
      <p className="text-gray-600 md:text-sm  text-xs mb-2 line-clamp-3 ">Overview: {movie.overview}</p>
      <button className="bg-red-600 md:text-sm text-sm  mt-auto hover:bg-red-700 text-white font-semibold py-1 px-2 md:py-2.5 md:px-3 rounded-lg transition-colors duration-300">Watch Trailer</button>

    </div>
    </motion.div>
    
    ))}
  
    </>
   
  )
}

export default Card