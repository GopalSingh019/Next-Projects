'use client'

import Title from '../../_components/title'
import Menu from '../../_components/menu'
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Cover from '../../_components/cover'
import CoverImg from "../../_components/coverImg";
import TextArea from "../../_components/textArea";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { Id } from "@/convex/_generated/dataModel";
import Publish from '../../_components/publish';

const DocPage = ({ params }: {
  params: {
    documentId
    : Id<"documents">
  }
}) => {

  const updateDoc = useMutation(api.documents.updateTask);
  const document = useQuery(api.documents.getById, { id: params.documentId })

  const BlockNote = useMemo(() => dynamic(() => import("../../_components/blockNote"), { ssr: false }), []);
  const IconTool = useMemo(() => dynamic(() => import("../../_components/iconTool"), { ssr: false }), []);
  const uploadChn = (content: string) => {
    updateDoc({ id: params.documentId, content: content });
  }

  return (
    <>
      {document && <div className='dark:bg-[#1f1f1f]'>
        <nav className="  flex justify-between items-center">
          <Title preview={true} initialData={document}></Title>
          <div className='flex justify-center gap-1 items-center'>
            <Publish initialData={document} />
            <Menu initialData={document}></Menu>
          </div>
        </nav>

        <section className="w-full h-[400px] overflow-hidden">
          <CoverImg preview={true} initialData={document}></CoverImg>
        </section>

        <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="flex w-full items-center pl-11">
            <IconTool initialData={document}></IconTool>
            <Cover initialData={document} />
          </div>
          <TextArea preview={true} initialData={document} />
          <BlockNote preview={true} initialData={document} onChange={uploadChn} />
        </div>
      </div>}
    </>
  )
}

export default DocPage;