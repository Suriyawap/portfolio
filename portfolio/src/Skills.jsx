/* eslint-disable no-unused-vars */
import React from 'react'
import{ FaCss3, FaDatabase, FaGit, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa'
import{ motion } from 'framer-motion';

const Skills = () => {
  return (
   
    <div className='mb-20' id='skills'>
         <h1 className='my-20 text-center text-6xl'>Skills</h1>
      <div className='p-3 flex justify-evenly gap-10 text-9xl flex-wrap'>
       <motion.p 
       initial={{y:-10}}
       animate={{y:10}}
       transition={{duration:2,ease:"linear",repeat:Infinity,repeatType:'reverse'}}
       className=''><FaHtml5 className='border-4 border-neutral-800 rounded-2xl p-3 text-red-600 '/></motion.p>
      <motion.p
       initial={{y:-10}}
       animate={{y:10}}
       transition={{duration:2.5,ease:"linear",repeat:Infinity,repeatType:'reverse'}}
      ><FaCss3 className='border-4 border-neutral-800 rounded-2xl p-3 text-blue-700'/></motion.p>
      <motion.p
       initial={{y:-10}}
       animate={{y:10}}
       transition={{duration:3,ease:"linear",repeat:Infinity,repeatType:'reverse'}}
      ><FaJs className='border-4 border-neutral-800 rounded-2xl p-3 text-yellow-300'/></motion.p>
       <motion.p
        initial={{y:-10}}
        animate={{y:10}}
        transition={{duration:3.5,ease:"linear",repeat:Infinity,repeatType:'reverse'}}
       ><FaReact className='border-4 border-neutral-800 rounded-2xl p-3 text-blue-400'/></motion.p>
      <motion.p
       initial={{y:-10}}
       animate={{y:10}}
       transition={{duration:4,ease:"linear",repeat:Infinity,repeatType:'reverse'}}
      ><FaJava className='border-4 border-neutral-800 rounded-2xl p-3 text-red-700'/></motion.p>
       <motion.p
        initial={{y:-10}}
        animate={{y:10}}
        transition={{duration:4.5,ease:"linear",repeat:Infinity,repeatType:'reverse'}}
       ><FaGit className='border-4 border-neutral-800 rounded-2xl p-3 text-orange-600'/></motion.p>
       <motion.p
        initial={{y:-10}}
        animate={{y:10}}
        transition={{duration:5,ease:"linear",repeat:Infinity,repeatType:'reverse'}}
       ><FaDatabase className='border-4 border-neutral-800 rounded-2xl p-3 text-blue-700'/></motion.p>
      </div>

    </div>
  )
}

export default Skills