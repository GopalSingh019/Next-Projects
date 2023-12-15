import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import 'emoji-picker-element';
import { Button } from "@/components/ui/button";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Smile } from "lucide-react";

interface data {
    _id: string,
    icon: string
}
function iconTool({ initialData }: { initialData: data }) {
    const emojiRef = useRef();
    const emojiRefdark = useRef();
    const doc=useMutation(api.documents.updateTask)
    const [isChanging, setIsChanging] = useState(false);
    useEffect(() => {
        emojiRef.current?.addEventListener('emoji-click', event => {
            doc({id:initialData._id,icon:event.detail.unicode})
            setIsChanging(false);
        })
        emojiRefdark.current?.addEventListener('emoji-click', event => {
            doc({id:initialData._id,icon:event.detail.unicode})
            setIsChanging(false);
        })
    }, [isChanging])
    const onChange=()=>{

    }
    return (
        <div className='p-4'>
            <Button onClick={()=>setIsChanging(true)} variant='outline' className="text-muted-foreground size-sm text-xs"><Smile className="h-4 w-4 mr-2"/>Add Icon</Button>
            {/* {isChanging && <Input placeholder="#SET ICON"  onBlur={()=>setIsChanging(false)} onFocus={() => { setIsChanging(true) }} value={initialData?.icon} className="p-2 -full relative focus-visible:ring-transparent"></Input>} */}
            {isChanging && <div className="absolute ">
                <div className="dark:hidden"><emoji-picker ref={emojiRef} class="light" ></emoji-picker></div>
                <div className="dark:block hidden"><emoji-picker ref={emojiRefdark}  class="dark" ></emoji-picker></div>
            </div>
            }
        </div>
    )
}

export default iconTool