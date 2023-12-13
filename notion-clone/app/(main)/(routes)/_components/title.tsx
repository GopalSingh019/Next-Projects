import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"

interface data{
    title:string,
    _id:string
}

function title({initialData}:data) {
    const inputRef=useRef(null);
    const [isChanging, setIsChanging] = useState(false)
    return (
        <div className="p-2 h-7 ">
            {isChanging && <Input
            ref={inputRef}
            onBlur={()=>setIsChanging(false)}

            value={initialData?.title}
            className="focus-visible:ring-transparent"
            />}
            {!isChanging && <Button onClick={()=>{setIsChanging(true);inputRef.current?.focus();}} variant='ghost'>{initialData?.title}</Button>}
        </div>
    )
}

export default title