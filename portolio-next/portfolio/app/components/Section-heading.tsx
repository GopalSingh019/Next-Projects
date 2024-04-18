import React from 'react'

function Heading({heading}:{heading:string}) {
  return (
    <h1 className='text-3xl text-gray-400 font-bold p-3'>{heading}</h1>
  )
}

export default Heading