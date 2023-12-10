import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Undo, Trash, Search } from "lucide-react";

function TrashDoc() {
    return (
        <div>
            <Dialog>
                <DialogTrigger>Trash</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Trash</DialogTitle>
                        <DialogDescription className="flex justify-between flex-col items-center pt-6">
                            <div className="w-full flex flex-row gap-2 items-center"><Search/><Input ></Input></div>
                            <p className="mt-6">No notes found</p>
                            <div className="mt-6 flex flex-row w-full justify-between text-muted-foreground hover:">
                                <p>title</p>
                                <div className="flex gap-5 items-center">
                                    <Undo></Undo>
                                    <Trash/>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default TrashDoc