import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRef, useState } from "react"

interface data{
    title:string,
    _id:string,
    icon:string
}

function title({initialData}:data) {
    const inputRef=useRef(null);
    const [isChanging, setIsChanging] = useState(false)
    const updateDoc=useMutation(api.documents.updateTask);
    return (
        <div className="p-2  flex items-center">
            <p className="text-3xl">{initialData?.icon}</p>
            {isChanging && <Input
            ref={inputRef}
            onBlur={()=>setIsChanging(false)}
            onChange={(e)=>{
                updateDoc({id:initialData._id,title:e.target.value()
            }}
            value={initialData?.title}
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

export default title