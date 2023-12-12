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
import { useMutation, useQuery } from "convex/react";
import { Undo, Trash, Search } from "lucide-react";

function TrashDoc() {
    const documents = useQuery(api.documents.get, { isArchived: true });
    const updateDoc=useMutation(api.documents.updateTask)
    
    return (
        <div>
            <Dialog>
                <DialogTrigger>Trash</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Trash</DialogTitle>
                        <DialogDescription className="flex justify-between flex-col items-center pt-6">
                            <div className="w-full flex flex-row gap-2 items-center"><Search /><Input ></Input></div>
                            {documents?.length === 0 && <p className="mt-6">No notes found</p>}
                            {documents?.length > 0 && documents?.map(item => <div className="mt-6 flex flex-row w-full justify-between text-muted-foreground hover:">
                                <p>{item.title}</p>
                                <div className="flex gap-5 items-center">
                                    <Undo onClick={()=>{updateDoc({id:item._id,isArchived:false})}}></Undo>
                                    <Trash />
                                </div>
                            </div>
                            )}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default TrashDoc