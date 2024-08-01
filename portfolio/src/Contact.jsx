/* eslint-disable no-unused-vars */
import React from 'react'
import{ motion } from 'framer-motion';
const Contact = () => {
  return (
    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1,delay:1}}
    className='flex flex-col justify-center items-center' id='contact'>
        <div className="text-center pb-6">
                <h1 className="text-6xl mb-6">Contact Us!</h1>

                <p className="text-gray-300">
                    Fill up the form below to send us a message.
                </p>
            </div>

            <form className='w-1/3 mb-10 border-4 border-neutral-800 rounded-2xl p-4 bg-transparent backdrop-blur-xl'>

                <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Name" name="name"/>

                <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email" placeholder="Email" name="email"/>

                <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Subject" name="_subject"/>

                <textarea
                        className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         placeholder="Type your message here..." name="message" >
                        </textarea>

                <div className="flex justify-between">
                <input
                        className="shadow bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="Send ➤"/>
                    <input
                        className="shadow bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="reset"/>
                  </div>

            </form>
       
    
    </motion.div>
  )
}



export default Contact