'use client'
import Image from 'next/image'
import React from 'react'
import { motion} from 'framer-motion'
import { Button } from '@/components/ui/button'
import {  ArrowRight, ChevronDownIcon  } from 'lucide-react'
import { HiDownload } from 'react-icons/hi'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function intro() {
  const url="https://avatars.githubusercontent.com/u/69750153?v=4"
  return (
    <section id="intro" className='pt-[10rem] flex flex-col items-center justify-center'>
        <div className='relative'><Image src={url} alt='gs' width="154" height="153"
        className='object-fill rounded-full border-[4px] border-white'></Image>
        <motion.span className='absolute right-[10px] bottom-[10px] text-4xl'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.1,
          duration: 0.7,}}
        >👋</motion.span>
        </div>
        <div className='text-center text-4xl pt-[3rem] text-slate-700 w-[70%] lg:w-[40%]'>
        <span className='font-bold'>Hello, I'm Gopal.</span> I'm a{' '}
        <span className='font-bold'>fullstack developer </span>with{' '}
        <span className='font-bold'>3 years</span> of experience. I enjoy building 
        <span className='italic'> sites & apps</span>.My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
        </div>
        <div className='pt-[2rem] flex gap-[1rem]'>
          <Button variant="default" className='flex flex-row gap-[0.5rem]'> <span>Contact me here </span><ArrowRight className='h-[30px] w-[20px] pt-1' /></Button>
          <Button variant="outline" className='flex flex-row gap-[0.5rem]'> Download CV <HiDownload className='h-[30px] w-[20px] pt-1'/></Button>
          <Link href='/' className='border text-gray-700 hover:text-gray-900 border-slate-200 rounded-xl p-2'><BsLinkedin className='h-[25px] w-[20px]'></BsLinkedin></Link>
          <Link href='/' className='border border-slate-200 text-gray-700 hover:text-gray-900 rounded-xl p-2'><BsGithub className='h-[25px] w-[20px]'></BsGithub></Link>
        </div>
    </section>
  )
}

export default intro