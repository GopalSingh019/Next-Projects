'use client'

import { useRouter } from "next/navigation";
import Title from '../../_components/title'
import Menu from '../../_components/menu'
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import IconTool from '../../_components/iconTool';
import Cover from '../../_components/cover'
import CoverImg from "../../_components/coverImg";
import TextArea from "../../_components/textArea";
// import BlockNote from "../../_components/blockNote";
import { useMemo } from "react";
import dynamic from "next/dynamic";

function page({ params }: {
  params: {
    documentId
    : string
  }
}) {
  const router = useRouter();
  const updateDoc = useMutation(api.documents.updateTask);
  const document = useQuery(api.documents.getById, { id: params.documentId })

  const BlockNote = useMemo(() => dynamic(() => import("../../_components/blockNote"), { ssr: false }) ,[]);
  const uploadChn = (content: string) => {
    updateDoc({ id: document?._id, content: content });
  }

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

      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <div className="flex w-full items-center ">
          <IconTool initialData={document}></IconTool>
          <Cover initialData={document} />
        </div>
        <TextArea initialData={document} />
        <BlockNote initialData={document} onChange={uploadChn} />
      </div>
    </div>
  )
}

export default page;