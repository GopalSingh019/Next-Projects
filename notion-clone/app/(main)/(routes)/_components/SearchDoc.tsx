import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"

function Search() {
    return (
        <div>
            <Dialog>
                <DialogTrigger>Search</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Search Notes</DialogTitle>
                        <DialogDescription className="flex justify-between flex-col items-center">
                            
                            <Input placeholder="Title" />

                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Search