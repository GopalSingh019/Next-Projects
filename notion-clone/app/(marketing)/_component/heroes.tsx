import Image from 'next/image'
import React from 'react'

function heroes() {
    return (
        <div className='flex'>
            <div className='relative h-[300px] w-[300px] '>
                <Image className='object-contain' fill src="/documents.png" alt="Documents"></Image>
            </div>
            <div className='relative h-[400px] w-[400px] md:block  hidden'>
                <Image className='object-contain' fill src="/reading.png" alt="Reading"></Image>
            </div>
        </div>
    )
}

export default heroes