import { Button } from "@/components/ui/button";
import {  PlusCircle } from "lucide-react"
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";



function DocumentPage() {
  const create=useMutation(api.documents.createTask)
  const {toast}=useToast();
  const {user}=useUser();
  const router = useRouter();
  const createDoc=async()=>{
    try{
    const promise=await create({title:'untitled'});
    toast({
      title:`New Note Created`,
    })
    router.push(`/documents/${promise}`)
  }catch(e){
    toast({
      title:`Failed to Create New Note`,
    })
  }
  }

  console.log(screenY);
  return (
    <div className="h-full w-full overflow-y-auto flex justify-center items-center flex-col gap-2 font-bold text-center">
      <h2>Welcome To {user?.firstName}&apos;s Notion</h2>
      <Button onClick={createDoc}><PlusCircle className="h-[25] w-[25] pr-2 "/> Create Notion </Button>
    </div>
  )
}

export default DocumentPage