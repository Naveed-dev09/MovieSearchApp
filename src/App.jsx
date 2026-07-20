import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Card from './components/Card'
import movieData from "./api"

function App() {

  return (
    <div className="App min-h-screen p-0 m-0 ">
      <NavBar/>
      <Hero/>
      <Card/>
    </div>
  )
}

export default App
