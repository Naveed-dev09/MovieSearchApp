import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Card from './components/Card'
import movieData from "./api"
import { useState } from 'react'

function App() {
const [movies, setMovies] = useState([]);
const [inputText, setInputText] = useState("")

  return (
    <div className="App min-h-screen p-0 m-0 ">
      <NavBar movies={movies} setMovies={setMovies} inputText={inputText} setInputText={setInputText}/>
      <Hero/>
      <Card  movies={movies} setMovies={setMovies} inputText={inputText}/>
    </div>
  )
}

export default App
