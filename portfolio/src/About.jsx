/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import user from './assets/undraw_male_avatar_g98d.svg'
import{ motion } from 'framer-motion';
const About = () => {

    let obj={
        intro:'Aspiring software engineer passionate about leveraging technology to craft innovative solutions that address real-world challenges. Recent graduate with a Bachelors degree in Computer Science, I am eager to embark on a career in software development.',
        email:'suriyawap1@gmail.com',
        place:'chennai',
        Poy:2023
    }
  return (
    <div className=' pb-4' id='about'>
        <h1 className='my-20 text-center text-6xl'>About
        <span className='text-neutral-500'>Me</span></h1>
        <div className='flex justify-between items-center gap-40'> 
           <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:0.5,delay:0.5}}
           className='w-full'>
            <img src={user} alt="" className='w-full' />
           </motion.div>
           <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5,delay:0.5}}
           className='flex flex-col gap-4 font-extralight'>
            <p className='text-2xl'>{obj.intro}</p>
            <p className='text-2xl'>Email:{obj.email}</p>
            <p className='text-2xl'>Place:{obj.place}</p>
            <p className='text-2xl'>POY:{obj.Poy}</p>
            <button className='p-2 border w-1/3 rounded-2xl text-xl hover:bg-violet-950'>DOWNLOAD CV</button>
           </motion.div>
        </div>
    </div>
  )
}

export default About