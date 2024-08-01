
import About from './About'
import './App.css'
import Contact from './Contact'
// eslint-disable-next-line no-unused-vars
import Header from './Header'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'

function App() {
 

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased'>
 
  <div className='fixed top-0 -z-10 h-full w-full'> 
  <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
  </div>
  <div className='container mx-auto px-8'>
  <Header/>
  <Home/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  </div>
  
    </div>
  )
}

export default App
