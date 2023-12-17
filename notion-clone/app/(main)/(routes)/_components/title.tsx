import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRef, useState } from "react"
import { Id } from "@/convex/_generated/dataModel";

interface data{
    title:string,
    _id:Id<"documents">,
    icon:string
}

function Title({initialData}:{initialData:data}) {
    const inputRef=useRef(null);
    const [isChanging, setIsChanging] = useState(false)
    const [title, setTitle] = useState()
    const updateDoc=useMutation(api.documents.updateTask);
    
    return (
        <div className="p-2  flex items-center">
            <p className="text-3xl">{initialData?.icon}</p>
            {isChanging && <Input
            ref={inputRef}
            onBlur={()=>{setIsChanging(false);if(inputRef.current.value)updateDoc({id:initialData._id,title:inputRef.current.value
            })}}
            onChange={()=>{setTitle(inputRef.current.value)}}
            placeholder={initialData?.title}
            className="focus-visible:ring-transparent"
            />}
            {!isChanging && <Button 
            onClick={(e)=>{
                setIsChanging(true);
                inputRef.current?.focus()
                }} variant='ghost'> {initialData?.title}</Button>}
        </div>
    )
}

export default Title