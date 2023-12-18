import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useEdgeStore } from '@/edgeStore/edgestore';
import { mutation } from '@/convex/_generated/server';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { updateTask } from '@/convex/documents';
import { Id } from "@/convex/_generated/dataModel";

interface data{
    _id?:Id<"documents">,
    coverImage?:string
}

function CoverImg({initialData,preview = true}:{initialData:data;preview:boolean}) {
    const { edgestore } = useEdgeStore();
    const doc = useMutation(api.documents.updateTask)
  return (
    <div className='h-full w-full relative'>
        {initialData?.coverImage && <img className="block object-cover h-full w-full"    src={initialData?.coverImage} alt="/default.jpg"></img>}
        {initialData?.coverImage && preview && <Button size='sm' className='absolute top-4 right-4' variant='outline'
        onClick={async()=>{
          if(initialData?.coverImage)
            await edgestore.publicFiles.delete({
                url: initialData?.coverImage,
              })
              if(initialData?._id)
              doc({
                id:initialData?._id,
                coverImage:''
            })
        }}
        ><X className='h-4 w-4'/></Button>}
        {!initialData?.coverImage && <img className="block object-cover h-full w-full"     src="/default.jpg"></img>}
    </div>
  )
}

export default CoverImg