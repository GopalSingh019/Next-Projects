'use client'

import { useRouter } from "next/navigation";
import Title from '../../_components/title'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function page({ params }: { params: { documentId
    : string } }) {
    const router=useRouter();
    const document = useQuery(api.documents.getById,{id:params.documentId})
  return (
    // <div>{params.documentId}</div>
    <div>
      <nav className="h-12 dark:bg-[#1f1f1f]">
        <Title initialData={document}></Title>
      </nav>
    </div>
  )
}

export default page