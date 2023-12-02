'use client'
import Button from '@/components/Button';
import {useState} from 'react'

export default  function Home() {
  const [data,setData]=useState('');
  console.log(data);
  return (
    <>
    <input className='block  w-100 border-black border-2' type='text' onChange={(e)=>{setData(e.target.value)}}></input>
    <Button val={data}/>
    </>
  )
}


