import React from 'react'
import { Contacts } from '../constants/content'
import {motion} from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Contact = () => {
  return (
    <div id='contact' className='border-b border-neutral-900 pb-1'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='text-pink-300 my-10 text-center text-4xl'>
            Get in Touch
        </motion.h1>
        <div className='flex flex-col sm:flex-row items-center justify-between mb-10'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className='flex flex-col sm:items-start w-full'>
                <h1 className='text-3xl sm:text-5xl text-center sm:text-left bg-gradient-to-r from-orange-500 to-purple-500 py-4 bg-clip-text text-transparent'>
                    Do you need my help?
                </h1>
                <p className='text-purple-400 text-xl sm:text-2xl mt-7 mb-10 text-center'>
                    Leave a request
                </p>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className='flex justify-center items-center w-full'>
                <form className='flex flex-col w-full sm:w-9/12'>
                    <input 
                    type="email" 
                    placeholder='example@email.com'
                    className='rounded w-full shadow-3xl mb-5 p-3'/>
                    <input 
                    type="text" 
                    placeholder='XYZ ABC'
                    className='rounded shadow-3xl w-full mb-5 p-3'/>
                    <textarea 
                    placeholder='Your message'
                    className='rounded shadow-3xl mb-5 p-3'/>
                    <button 
                    type='submit'
                    className='bg-neutral-500 hover:bg-neutral-400 p-3 rounded font-semibold'>
                        Send
                    </button>
                </form>
            </motion.div>
        </div>
        <div className='text-center bg-gradient-to-r from-orange-500 to-purple-500 tracking-tighter pt-4 pb-10'>
            <motion.p 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1}}
            className='my-10 text-2xl font-semibold'>
                Let's connect
            </motion.p>
            <div 
            className='mb-8 flex items-center justify-center'>
                <div className='flex items-center justify-between w-1/4 sm:w-1/5 md:w-1/12'>
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}>
                        <a href="https://www.linkedin.com/in/neha-naidu-9503b8218"><FaLinkedin
                            className='text-2xl sm:text-4xl hover:scale-150 cursor-pointer duration-200' /></a>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}>
                        <a href="https://github.com/NeHaNaiduu"><FaGithub className='text-2xl sm:text-4xl hover:scale-150 cursor-pointer duration-200' /></a>
                    </motion.div>
                </div>
            </div>
            <a href="#" className='border-b'>{Contacts.email}</a>
        </div>
    </div>
  )
}

export default Contact