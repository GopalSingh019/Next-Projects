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
import { useEffect, useState } from "react";
import { Id } from "@/convex/_generated/dataModel";

interface docum {
    _id: Id<"documents">;
    _creationTime: number;
    parentDocument?: Id<"documents"> | undefined;
    content?: string | undefined;
    coverImage?: string | undefined;
    icon?: string | undefined;
    title: string;
    userId: string;
    isArchived: boolean;
    isPublished: boolean;
}

function TrashDoc() {
    const documents = useQuery(api.documents.get, { isArchived: true });
    const updateDoc = useMutation(api.documents.updateTask)
    const deleteDoc = useMutation(api.documents.DeleteTask);
    const [doc, setDoc] = useState<any>([]);

    useEffect(() => {
        setDoc(documents);
    }, [documents])

    const DeleteTask = (item:docum) => {
        deleteDoc({ id: item._id, parentDoc: item.parentDocument });
    }

    const onSearch = (e:any) => {
        let searchVal = e.target.value;
        if (searchVal.length > 0) {
            const searchResult = doc.filter((item:docum) => item.title.includes(searchVal));
            setDoc(searchResult);
        } else {
            setDoc(documents);
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger>Trash</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Trash</DialogTitle>
                        <DialogDescription className="flex justify-between flex-col items-center pt-6">
                            <div className="w-full flex flex-row gap-2 items-center"><Search /><Input onChange={onSearch}></Input></div>
                            {doc?.length === 0 && <p className="mt-6">No notes found</p>}
                            {doc?.length > 0 && doc?.map((item:docum) => <div key={item?._id} className="mt-6 flex flex-row w-full justify-between text-muted-foreground hover:">
                                <p>{item?.title}</p>
                                <div className="flex gap-5 items-center">
                                    <Undo onClick={() => { updateDoc({ id: item?._id, isArchived: false }) }}></Undo>
                                    <Trash onClick={() => { DeleteTask(item) }} />
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