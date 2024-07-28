import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import {animate, motion} from 'framer-motion'

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})


const Skills = () => {
  return (
    <div id='skills' className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}} 
        className=' text-cyan-200 text-4xl text-center my-20'>
            Skills
        </motion.h1>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}}
        transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className='text-7xl text-blue-700'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-sky-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGitAlt className='text-7xl text-orange-700'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills