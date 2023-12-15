
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { ChevronDown, ChevronRight, PanelTop, Plus, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";



interface docItem {
    _id: string,
    title: string,
    parentDocument: string,
    isArchived: boolean,
    icon:string
}

function Item({ item }: { item: docItem }) {
    const create = useMutation(api.documents.createTask);
    const updateTask = useMutation(api.documents.updateTask);
    const [expand, setExpand] = useState(false);
    const router = useRouter()
    const documents = useQuery(api.documents.get, { parentDocument: item._id });

    const { toast } = useToast();
    const onCreateItem = async () => {
        try {
            await create({ title: 'untitled', parentDocument: item._id });
            toast({
                title: `New Note Created`,
            })
        } catch (e) {
            toast({
                title: `Failed to Create New Note`,
            })
        }
    }

    const onDeleteDoc = () => {
        updateTask({ id: item._id ,isArchived:!item.isArchived});
        toast({
            title: `${item.title} moved to trash`,
        })
        router.replace('/documents');
    }
    const onGetChild = () => {
        setExpand(!expand);
    }
    const onDocSltd = () => {
        router.push(`/documents/${item._id}`)
    }
    return (
        <>
            {!item.isArchived && <div className="pl-2 pr-2 text-muted-foreground rounded-sm overflow-hidden min-w-[180px] w-[full] font-normal dark:hover:bg-slate-800 hover:bg-slate-200">

                <div onClick={onGetChild} className="group flex gap-2 text-start w-full cursor-pointer items-center ">

                    <p onClick={onDocSltd} className="flex-1 flex gap-1 items-center">
                        {!expand && <ChevronRight className="h-4 w-4"></ChevronRight>}
                        {expand && <ChevronDown className="h-4 w-4"></ChevronDown>}
                        <PanelTop className="w-4 h-4" />{item?.icon} {item?.title}</p>
                    {<Trash onClick={onDeleteDoc} className="hidden group-hover:block h-4 w-4"></Trash>}
                    <Plus onClick={onCreateItem} className="h-4 w-4"></Plus>


                </div>
            </div>
            }
            {expand && documents && documents.map(item => <div className="pl-5"><Item item={item}></Item></div>)}
            {item.isArchived && documents && documents.map(item => <div className=""><Item item={item}></Item></div>)}
            {expand && !item.isArchived &&  documents?.length === 0 && <p className="text-muted-foreground pl-7 text-xs">No pages inside</p>}
        </>
    )
}

export default Item