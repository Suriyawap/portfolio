/* eslint-disable no-unused-vars */
import React from 'react'
import dp from './assets/dp.png';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import{ motion } from 'framer-motion';
const Home = () => {
  return (
   <div className='border-b border-neutral-900 pb-4 lg:mb-35' id='home'>
    <div className='flex flex-wrap'>
       <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
            whileInView={{x:0,opacity:1}}
            initial={{x:-100,opacity:0}}
            transition={{duration:0.5,delay:0}}
             className='pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>SURIYA E</motion.h1>
            <motion.span 
              whileInView={{x:0,opacity:1}}
              initial={{x:-100,opacity:0}}
             transition={{duration:0.5,delay:0.5}}
            className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent '>Full Stack Developer</motion.span>
            <motion.p 
             whileInView={{x:0,opacity:1}}
             initial={{x:-100,opacity:0}}
             transition={{duration:0.5,delay:1}}
             className='flex gap-5 my-2 max-w-xl py-6 text-4xl'>
              <FaFacebook/>
              <FaGithub/>
              <FaInstagram/>
              <FaLinkedin/>
              <FaTwitter/>
            </motion.p>
          </div>
       </div>
       <div className='w-auto lg:w-1/3 lg:p-8 '>
           <div className='flex justify-center items-center '>
            <motion.img
             whileInView={{x:0,opacity:1}}
             initial={{x:100,opacity:0}}
             transition={{duration:1,delay:1}}
             src={dp} alt="image" className=' rounded-full ml-64' />
           </div>
       </div>
    </div>
   </div>
     
  )
}

export default Home