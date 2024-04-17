"use client"
import React from 'react'
import { motion } from "framer-motion";

function Header() {
  return (
    <header className='z-[999] relative'>
    <motion.div className='fixed shadow-lg h-[3rem] sm:w-[35rem] w-[92vw] bg-gray-300 rounded-3xl opacity-30 top-[2rem] left-[50%]'
    initial={{y:-100,x:"-50%",opacity:0}}
    animate={{y:0,x:"-50%",opacity:1}}></motion.div>
    <nav className='top-[2.6rem] left-[50%] fixed translate-x-[-50%]'>
      <ul className='flex flex-row sm:gap-[1.8rem] text-gray-950 gap-[1rem]'>
        <motion.li className='cursor-pointer'
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}>Home</motion.li>
        <motion.li
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}>About</motion.li>
        <motion.li
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}>Projects</motion.li>
        <motion.li 
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}>Skills</motion.li>
        <motion.li
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}>Experince</motion.li>
        <motion.li
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}>Contact</motion.li>
      </ul>
    </nav>
    </header>
  )
}

export default Header