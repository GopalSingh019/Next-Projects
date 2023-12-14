import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import 'emoji-picker-element';

interface data {
    _id: string,
    icon: string
}
function iconTool({ initialData }: { initialData: data }) {
    const emojiRef = useRef(null);
    const [isChanging, setIsChanging] = useState(false);
    useEffect(() => {
        emojiRef.current?.addEventListener('emoji-click', event => {
            console.log(event.detail.unicode)

        })
    }, [])
    return (
        <div>

            <Input className='' onBlur={()=>setIsChanging(false)} onFocus={() => { setIsChanging(true) }} value={initialData?.icon} className="p-2 -full relative focus-visible:ring-transparent"></Input>
            {isChanging && <div className="absolute ">
                <div className="dark:hidden"><emoji-picker ref={emojiRef} class="light" ></emoji-picker></div>
                <div className="dark:block hidden"><emoji-picker ref={emojiRef} class="dark" ></emoji-picker></div>
            </div>
            }
        </div>
    )
}

export default iconTool