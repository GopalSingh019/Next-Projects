import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Id } from "@/convex/_generated/dataModel";

interface data{
    _id:Id<"documents">,
    title:string
}

function TextArea({initialData,preview = true }:{initialData:data;preview:boolean}) {
  const textRef=useRef<any>(null);
  const updateDoc=useMutation(api.documents.updateTask)
    return (
    <TextareaAutosize disabled={!preview} ref={textRef} onChange={()=>{
        updateDoc({id:initialData._id,title:textRef?.current.value})
    }} value={initialData?.title} className='pl-12 text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resi'/>
  )
}

export default TextArea