import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'



interface data{
    _id:string,
    coverImage:string
}
function coverImg({initialData}:{initialData:data}) {
  return (
    <div className='h-full w-full relative'>
        {initialData?.coverImage && <img className="block object-cover h-full w-full"    src={initialData?.coverImage} alt="/default.jpg"></img>}
        {initialData?.coverImage && <Button size='sm' className='absolute top-4 right-4' variant='outline'><X className='h-4 w-4'/></Button>}
        {initialData?.coverImage && <img className="block object-cover h-full w-full"     src="/default.jpg"></img>}
    </div>
  )
}

export default coverImg