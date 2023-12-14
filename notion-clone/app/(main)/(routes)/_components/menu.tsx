import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import { MoreHorizontalIcon, Trash } from "lucide-react"
import { useRouter } from "next/navigation"


interface data{
    _id:string,
    _creationTime:number

}
function menu({initialData}:{initialData:data}) {
    const doc=useMutation(api.documents.updateTask);
    const router=useRouter();
    const {toast}=useToast();
    const onArchive=async()=>{
        await doc({id:initialData._id,isArchived:true});
        toast({
            title: `Note moved to trash`,
        });
        router.replace('/documents')
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <MoreHorizontalIcon className="pr-2 text-muted-foreground" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuLabel>Notion Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div onClick={onArchive} className="p-2 text-muted-foreground flex items-center gap-2 cursor-pointer"><Trash className="h-4 w-4"/>Delete</div>
                {/* <DropdownMenuSeparator /> */}
                <p className="pl-2 font-small text-muted-foreground">created on {new Date(initialData?._creationTime).toDateString()}</p>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default menu