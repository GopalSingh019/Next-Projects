'use client'; 
import React from 'react';
import Heading from './_component/heading';
import Heroes from './_component/heroes';
import Footer from './_component/footer';

function page() {
  return (
    <div className='dark:bg-[#1f1f1f] flex flex-col justify-center min-h-full items-center text-center flex-1 gap-y-8'>
        <Heading></Heading>
        <Heroes></Heroes>
        <Footer></Footer>
    </div>
  )
}

export default page 