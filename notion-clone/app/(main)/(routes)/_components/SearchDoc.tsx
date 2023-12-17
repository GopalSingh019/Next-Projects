import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Search() {
    const [search,setSearch]=useState('');
    const doc=useQuery(api.documents.SearchTask,{title:search}) || [];
    const router=useRouter();
    
    
    return (
        <div>
            <Dialog>
                <DialogTrigger>Search</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Search Notes</DialogTitle>
                        <DialogDescription className="flex justify-between flex-col items-center">
                            
                            <Input placeholder="Title" onChange={(e)=>{setSearch(e.target.value)}}/>
                            {doc?.length===0 && <p className="pt-6">No Notion found</p>}
                            {doc?.length>0 && <div className="w-full p-2">{doc?.map((item)=> {return <p key={item._id} onClick={()=>{router.push(`/documents/${item._id}`)}} className="w-full p-1 cursor-pointer pt-4 hover:bg-slate-100 dark:hover:bg-slate-600 text-muted-foreground">{item.title}</p>})}</div>}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Search