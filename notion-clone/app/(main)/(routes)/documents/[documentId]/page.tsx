'use client'

import { useRouter } from "next/navigation";
import Title from '../../_components/title'
import Menu from '../../_components/menu'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import IconTool from '../../_components/iconTool'


function page({ params }: { params: { documentId
    : string } }) {
    const router=useRouter();
    
    const document = useQuery(api.documents.getById,{id:params.documentId})
  return (
    // <div>{params.documentId}</div>
    <div>
      <nav className="h-12 dark:bg-[#1f1f1f] flex justify-between items-center">
        <Title initialData={document}></Title>
        <Menu initialData={document}></Menu>
        
      </nav>
      <IconTool initialData={document}></IconTool>
    </div>
  )
}

export default page;