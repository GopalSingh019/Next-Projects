'use client'
import CoverImg from '@/app/(main)/(routes)/_components/coverImg'
import TextArea from '@/app/(main)/(routes)/_components/textArea'
import Title from '@/app/(main)/(routes)/_components/title'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'

function Page({params}:{params:{documentId:Id<'documents'>}}) {
    const BlockNote = useMemo(() => dynamic(() => import("@/app/(main)/(routes)/_components/blockNote"), { ssr: false }), []);

    const document=useQuery(api.documents.readById,{id:params.documentId})
    const uploadChn=()=>{

    }
    return (
    <>
    {document && <div className='dark:bg-[#1f1f1f]'>
        <nav className="  flex justify-between items-center">
          <Title preview={false} initialData={document}></Title>
          
        </nav>

        <section className="w-full h-[300px] overflow-hidden">
          <CoverImg preview={false} initialData={document}></CoverImg>
        </section>

        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-6">
          
          <TextArea preview={false} initialData={document} />
          <BlockNote preview={false} initialData={document} onChange={uploadChn} />
        </div>
      </div>}
      </>
  )
}

export default Page