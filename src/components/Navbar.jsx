import React, { useState } from 'react'
import {navItems} from '../constants/content'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';


const Navbar = () => {

    const[bars, setBars]=useState(false)
    const toggleNavbar=()=>{
        setBars(!bars);
    }

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center px-10">
                <div className="flex-shrink-0">
                    <span className="text-xl tracking-tight font-bold">Neha Naidu</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map(({label,path})=>(
                        <Link activeClass='active' spy={true} smooth={true} offset={-100} key={label} to={path} className='hover:border-b font-semibold cursor-pointer'>
                            {label}
                        </Link>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="https://drive.google.com/file/d/1o5lRIGBulKtmZNRE_K0EzLFn6DpKWq6R/view?usp=drive_link" className='py-2 px-3 border rounded-md font-semibold hover:text-black hover:bg-white duration-200'>Resume</a>
                    <a href="#contact" className='bg-gradient-to-r from-purple-500 to-purple-800 px-3 py-2 rounded-md
                    font-semibold hover:bg-gradient-to-l'>Hire me</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {bars ? <IoClose/> : <FaBars/>}
                    </button>
                </div>
            </div>
            {bars && (
                <div className='font-verdana fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                    <ul className='flex flex-col'>
                        {navItems.map(({label,path})=>(
                            <Link activeClass='active' spy={true} smooth={true} offset={-100} key={label} to={path} className='hover:border-b my-2 font-semibold cursor-pointer'>
                            {label}
                        </Link>
                        ))}
                    </ul>
                    <div className='flex space-x-6 mt-5'>
                        <a href="https://drive.google.com/file/d/1o5lRIGBulKtmZNRE_K0EzLFn6DpKWq6R/view?usp=drive_link" className='py-2 px-3 border rounded-md font-semibold hover:text-black hover:bg-white duration-200'>Resume</a>
                        <a href="#contact" className='bg-gradient-to-r from-purple-500 to-purple-800 px-3 py-2 rounded-md font-semibold hover:bg-gradient-to-l'>Hire me</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar