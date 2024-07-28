import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  
  return (
    <>
    <Navbar/>
    <div className='container px-6 max-w-7xl mx-auto pt-20 '>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App
