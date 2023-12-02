"use client"
import React,{useState,useEffect} from 'react'

function Button(props:{val:String}) {
  const [input,setInput]=useState(null);
  useEffect(()=>{
    // if(change){
    //   clearTimeout(change);
    // }
    const data=props.val.split(' ');
    let temp:String;
    let val='';
    for(let i=0;i<data.length;i++){
      val+=data[i]+' ';
      let test=val;
      temp=setTimeout(()=>{
        setInput(test);
      },2000*(i+1))
    }
    return ()=>clearTimeout(temp);
  },[props.val]);
    console.log(props);
  return (<><div className='font-bold h-80 text-lg text-black'>{input}</div></>)
}

export default Button