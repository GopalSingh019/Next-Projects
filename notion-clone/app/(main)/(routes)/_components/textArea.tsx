import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

interface data{
    _id:string,
    title:string
}

function textArea({initialData}:{initialData:data}) {
  const textRef=useRef(null);
  const updateDoc=useMutation(api.documents.updateTask)
    return (
    <TextareaAutosize ref={textRef} onChange={()=>{
        updateDoc({id:initialData._id,title:textRef.current.value})
    }} value={initialData?.title} className='text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resi'/>
  )
}

export default textArea