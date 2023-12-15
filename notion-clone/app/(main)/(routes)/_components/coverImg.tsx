import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useEdgeStore } from '@/edgeStore/edgestore';
import { mutation } from '@/convex/_generated/server';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { updateTask } from '@/convex/documents';


interface data{
    _id:string,
    coverImage:string
}

function coverImg({initialData}:{initialData:data}) {
    const { edgestore } = useEdgeStore();
    const doc = useMutation(api.documents.updateTask)
  return (
    <div className='h-full w-full relative'>
        {initialData?.coverImage && <img className="block object-cover h-full w-full"    src={initialData?.coverImage} alt="/default.jpg"></img>}
        {initialData?.coverImage && <Button size='sm' className='absolute top-4 right-4' variant='outline'
        onClick={async()=>{
            await edgestore.publicFiles.delete({
                url: initialData?.coverImage,
              })
              doc({
                id:initialData?._id,
                coverImage:''
            })
        }}
        ><X className='h-4 w-4'/></Button>}
        {initialData?.coverImage && <img className="block object-cover h-full w-full"     src="/default.jpg"></img>}
    </div>
  )
}

export default coverImg