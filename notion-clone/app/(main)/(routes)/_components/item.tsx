import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { ChevronDown, PanelTop, Plus, Trash } from "lucide-react";

import { useState } from "react";



interface docItem {
    _id: string,
    title: string,
    parentDocument:string
}

function Item({ item }: { item: docItem }) {
    const create = useMutation(api.documents.createTask);
    const deleteDoc= useMutation(api.documents.deleteTask);
    const [expand,setExpand]=useState(false);
    const documents=useQuery(api.documents.get,{parentDocument: item._id});

    const { toast } = useToast();
    const onCreateItem = async () => {
        try {
            const promise = await create({ title: 'untitled', parentDocument: item._id });
            toast({
                title: `New Note Created`,
            })
        } catch (e) {
            toast({
                title: `Failed to Create New Note`,
            })
        }
    }

    const onDeleteDoc=()=>{
        deleteDoc({id:item._id});
        toast({
            title: `${item.title} deleted`,
        })
        // router.replace('/documents');
    }
    const onGetChild=()=>{
        setExpand(!expand);
    }
    return (
        <>
        <div className="pl-2 pr-2 text-muted-foreground rounded-sm w-[180px] font-normal hover:bg-slate-200">
            <div className=" flex gap-2 text-start w-full cursor-pointer items-center ">
                <p className="flex-1 flex gap-1 items-center"><PanelTop className="w-4 h-4"/>{item?.title}</p>
                <Plus onClick={onCreateItem} className="h-4 w-4"></Plus>
                {documents?.length==0 && <Trash onClick={onDeleteDoc} className="h-4 w-4"></Trash>}
                <ChevronDown onClick={onGetChild} className="h-4 w-4"></ChevronDown>
            </div>
            {/* {expand && documents && documents.map(item=><Item item={item}></Item>)} */}
            {/* <DropdownMenu>
                <DropdownMenuTrigger asChild className="">

                </DropdownMenuTrigger>
                <DropdownMenuContent >
                    <DropdownMenuItem></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> */}
        </div>
        {expand && documents && documents.map(item=><div className="pl-5"><Item item={item}></Item></div>)}
        </>
    )
}

export default Item