import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Card from './components/Card'
import movieData from "./api"

function App() {

  return (
    <div className="App min-h-screen p-0 m-0 ">
      <NavBar/>
      <Hero/>
      
      
      <div className="cards grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4
                     shadow-sm bg-white  md:gap-0 lg:gap-0 sm:gap-0 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
