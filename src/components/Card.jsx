import React from 'react'
import poster from '../assets/images/poster.jpg'
import { useEffect, useState } from "react";
import { getPopularMovies } from "../api.js";

const Card = () => {

const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await getPopularMovies();
      setMovies(data);
    }

    loadMovies();
  }, []);

  console.log(movies)

  return (
    <>
    {movies.map((movie) => (
       <div key={movie.title} className="bg-white rounded-lg shadow-md p-4 m-4 w-64 flex flex-col h-full">
     < img   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg mb-4" />
      <h2 className="text-2xl font-poppinns font-semibold mb-2">{movie.title}</h2>
      <p className="text-gray-600 mb-2"><span className="font-semibold text-green-700">Release Date:</span> {movie.release_date}</p>
      <p className="text-gray-600 mb-2"><span className="font-semibold text-orange-500">Rating:</span> {Number(movie.vote_average).toFixed(1)}/10</p>
      <p className="text-gray-600 mb-2 line-clamp-3 ">Overview: {movie.overview}</p>
      <button className="bg-red-600 mt-auto hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">Watch Trailer</button>

    </div>
    ))}
  
    </>
   
  )
}

export default Card