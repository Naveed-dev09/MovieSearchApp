import React from 'react'
import poster from '../assets/images/poster.jpg'
import { useEffect, useState, useRef } from "react";
import { getPopularMovies } from "../api.js";
import { motion } from "framer-motion";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;


const Card = ({inputText}) => {

  const cardsRef = useRef(inputText);
 useEffect(() => {
  if (inputText.trim() !== "") {
    cardsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }
}, [inputText]);


const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1)

  useEffect(() => {
    async function loadMovies() {
      const data = await getPopularMovies();
      setMovies(data);
    }

    loadMovies();
  }, []);
  

  async function loadMovies() {

    const nextPage = page + 1;
    
     const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
     );
     const newData = await res.json();

    setMovies((prevMovies) => {
        const existingIds = new Set(prevMovies.map(movie => movie.id));

        const uniqueMovies = newData.results.filter(
        movie => !existingIds.has(movie.id)
  );

  return [...prevMovies, ...uniqueMovies];
});

     setPage(nextPage)
  }
    
const [video, setVideo]= useState([])
const [trailer, setTrailer] = useState(null);

async function playTrailer(movieId) {
   console.log("Clicked:", movieId);
  const res = await fetch(
     `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
  )

  const trailerData = await res.json();
const trailer = trailerData.results.find(
  video=> video.site === "YouTube" && video.type=="Trailer"
);
setVideo(trailer)
setTrailer(trailer)


}
console.log(inputText)
const filteredMovies = movies.filter((movie) =>
  movie.title
    .toLowerCase()
    .includes(inputText.trim().toLowerCase())
);


  
  return (
    <>
      <section ref={cardsRef} className='mt-2  '>
         
        <h2   className='text-xl p-3 mx-4 bg-white shadow-sm font-sans mb-3 md:w-[35%] w-[95%] '> Here are some<span className='text-red-600'>featured</span> movies</h2>
        
     <div className="cards grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4
                     shadow-sm bg-white  md:gap-2 lg:gap-2 sm:gap-2 md:mt-4 ">
      
         <>
        
            { filteredMovies.length===0? (
  <h2 className="text-center text-2xl font-semibold text-gray-500 py-10">
    No movies found
  </h2>): 
            
            filteredMovies.map((movie) => (
                <motion.div key={movie.id}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6 }}
                   viewport={{ once: true }}
>
  <div 
        className="bg-white rounded-lg shadow-md p-2 
       w-auto md:p-4 md:m-4 md:w-64 flex flex-col h-full
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"

        >
     < img 
             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg mb-4
             transition-transform duration-500 hover:scale-105 " 
      />
      <h2
       className="md:text-xl text-xl font-poppinns font-semibold mb-2">{movie.title}
      </h2>
      <p 
          className="text-gray-600 mb-2 md:text-sm text-sm"><span className="font-semibold
          text-green-700">Release Date:</span> {movie.release_date}
      </p>
      <p 
         className="text-gray-600 mb-2 md:text-sm text-sm">
        <span className="font-semibold text-orange-500">Rating:</span> 
         {Number(movie.vote_average).toFixed(1)}/10
      </p>
      <p className="text-gray-600 md:text-sm  text-xs mb-2 line-clamp-3 ">Overview: {movie.overview}

      </p>
      <button  onClick={()=> playTrailer(movie.id)}

      className="bg-red-600 md:text-sm text-sm  mt-auto hover:bg-red-700 text-white font-semibold py-1 px-2 md:py-2.5
      md:px-3 rounded-lg transition-colors duration-300">Watch Trailer

      </button>

  </div>
  
    </motion.div>
     
    ))}
       
    </>
   
       
      </div>

    </section>
       {trailer && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-lg">
      <button
        onClick={() => setTrailer(null)}
        className="absolute -top-10 right-0 text-white text-3xl"
      >
        ✕
      </button>

      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title="Movie Trailer"
        allowFullScreen
      />
    </div>
  </div>
)}

    <div className='mt-7  bg-gray-400 shadow-sm p-2  flex items-center justify-center self-center'>
       <button onClick={ loadMovies} className='text-xl text-white '>Load More</button>
    </div>

    

    </>

    
  )
}

export default Card