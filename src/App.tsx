import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center">

        <Home />
        <About />
        
      </main>
    </>
  )
}

export default App
