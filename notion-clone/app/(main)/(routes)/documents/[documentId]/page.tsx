'use client'

import { useRouter } from "next/navigation";
import Title from '../../_components/title'
import Menu from '../../_components/menu'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import IconTool from '../../_components/iconTool';
import Cover from '../../_components/cover'
import CoverImg from "../../_components/coverImg";


function page({ params }: { params: { documentId
    : string } }) {
    const router=useRouter();
    
    const document = useQuery(api.documents.getById,{id:params.documentId})
  return (
    // <div>{params.documentId}</div>
    <div>
      <nav className=" dark:bg-[#1f1f1f] flex justify-between items-center">
        <Title initialData={document}></Title>
        <Menu initialData={document}></Menu>
        
      </nav>

      <section className="w-full h-[400px] overflow-hidden">
        <CoverImg initialData={document}></CoverImg>
      </section>

      <div className="flex w-full items-center ">
      <IconTool initialData={document}></IconTool>
      <Cover initialData={document}/>
      </div>
    </div>
  )
}

export default page;