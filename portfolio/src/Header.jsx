/* eslint-disable no-unused-vars */
import React from 'react'

const Header = () => {
  return (
    
    <header className='flex justify-between py-6 mb-10 items-center'>
      <div className='flex flex-shrink-0 items-center'> 
      <a href="./" className='text-2xl'>SURIYA E</a>
      </div>
     <div>
     <ul className='flex m-8 items-center justify-center gap-5 text-xl'>
        <li><a href="#home" className='text-white text-2xl hover:text-violet-400 '>Home</a></li>
        <li><a href="#about" target='_self'  className='text-white text-2xl hover:text-violet-400 '>About</a></li>
        <li><a href="#skills"  className='text-white text-2xl hover:text-violet-400 '>Skills</a></li>
        <li><a href="#projects" className='text-white text-2xl hover:text-violet-400 '>Projects</a></li>
        <li><a href="#contact"  className='text-white text-2xl hover:text-violet-400 '>Contact</a></li>
      </ul>
     </div>
     </header>
    
  )
}

export default Header