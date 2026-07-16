import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Card from './components/Card'
import movieData from "./api"

function App() {

  return (
    <div className="App min-h-screen p-0 m-0 ">
      <Hero/>
      
      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4
                     shadow-sm bg-gray-100 mt-4 ">
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
