import { Button } from '@/components/ui/button'
import { Doc } from '@/convex/_generated/dataModel'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Check, Copy, Globe } from 'lucide-react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

function Publish({ initialData }: { initialData: Doc<"documents"> }) {
    const doc = useMutation(api.documents.updateTask);
    const [copyUrl, setCopyUrl] = useState<boolean>(false)
    const onPublish = async () => {
        if (initialData._id)
            await doc({ id: initialData._id, isPublished: true });

    }
    const onUnPublish = async () => {
        if (initialData._id)
            await doc({ id: initialData._id, isPublished: false });

    }
    let url = '';
    if (initialData?.isPublished) {
        url = `${window.location.host}/preview/${initialData?._id}`
    }
    const onCopy=()=>{
        navigator.clipboard.writeText(url);
        setCopyUrl(true);
        setTimeout(()=>{
            setCopyUrl(false);
        },1000)
    }
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost">Publish</Button>
                </PopoverTrigger>
                <PopoverContent >
                    {!initialData?.isPublished && <div className='flex flex-col gap-1 items-center justify-center'>
                        <Globe className='h-8 w-8'></Globe>
                        <p className='font-semibold'>Publish this note</p>
                        <p className='mb-2 text-muted-foreground'>Share your work with others</p>
                        <Button onClick={onPublish} className='w-full'>Publish</Button>
                    </div>}
                    {initialData?.isPublished &&
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2 items-center'>
                            <Input value={url} disabled />
                            {!copyUrl && <Button onClick={onCopy} variant='ghost'><Copy/></Button>}
                            {copyUrl && <Check></Check>}
                        </div>
                        <Button onClick={onUnPublish}>Unpublish</Button>
                        </div>
                    }
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default Publish