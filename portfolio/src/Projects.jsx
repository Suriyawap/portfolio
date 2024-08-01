/* eslint-disable no-unused-vars */

import React from 'react'
import { PROJECTS } from './index'
import{ motion } from 'framer-motion';

const Projects = () => {
    
  return (
    <div>
     <h1 className='my-20 text-center text-6xl' id='projects'>Projects</h1>
       <div className=''>
          {PROJECTS.map((data,index)=>{
           return <><div key={index} className='mb-12 flex flex-wrap justify-between'>
                  <motion.div
                   whileInView={{opacity:1,x:0}}
                   initial={{opacity:0,x:-100}}
                   transition={{duration:1,delay:0.5}}
                   className='w-1/4'>
                  <img src={data.image} alt={data.title} height={650} width={650} />
                  </motion.div>
              
              <motion.div
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:1,delay:0.5}}
               className='w-3/4 max-w-xl'>
                      <h2 className='mb-2 font-semibold'>{data.title}</h2>
                      <p className='mb-4 text-neutral-400 text-xl'>{data.description}</p>
                      {data.technology.map((e,index)=>{
                         // eslint-disable-next-line react/jsx-key
                         return <span className=' border border-violet-950 mr-3 p-2'>{e}</span>
                      })}
                  </motion.div>
             
                  </div>
                  </>
          })}
        
         
         

       </div>

    </div>
  )
}

export default Projects