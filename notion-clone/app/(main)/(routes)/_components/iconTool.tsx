import { useEffect, useRef, useState } from "react";
import  'emoji-picker-element';
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Smile } from "lucide-react";


interface data {
    _id: Id<"documents">,
    icon: string
}
interface eventlog{
    detail:{unicode:string}
}
function iconTool({ initialData }: { initialData: data }) {
    const emojiRef = useRef<any>();
    const emojiRefdark = useRef<any>();
    const doc=useMutation(api.documents.updateTask)
    const [isChanging, setIsChanging] = useState(false);
    useEffect(() => {
        emojiRef.current?.addEventListener('emoji-click', (event:eventlog) => {
            doc({id:initialData._id,icon:event.detail.unicode})
            console.log(typeof(event));
            console.log(typeof(emojiRef));
            setIsChanging(false);
        })
        emojiRefdark.current?.addEventListener('emoji-click', (event:eventlog) => {
            doc({id:initialData._id,icon:event.detail.unicode})
            setIsChanging(false);
        })
    }, [isChanging])
    const onChange=()=>{

    }
    return (
        <div className='pr-4 pt-4 pb-4 relative'>
            <Button onClick={()=>setIsChanging(true)} variant='outline' className="text-muted-foreground size-sm text-xs"><Smile className="h-4 w-4 mr-2"/>Add Icon</Button>
            {/* {isChanging && <Input placeholder="#SET ICON"  onBlur={()=>setIsChanging(false)} onFocus={() => { setIsChanging(true) }} value={initialData?.icon} className="p-2 -full relative focus-visible:ring-transparent"></Input>} */}
            {isChanging && <div className="absolute z-[9999]">
                <div className="dark:hidden "><emoji-picker ref={emojiRef} class="light" ></emoji-picker></div>
                <div className="dark:block hidden"><emoji-picker ref={emojiRefdark}  class="dark" ></emoji-picker></div>
            </div>
            }
        </div>
    )
}

export default iconTool