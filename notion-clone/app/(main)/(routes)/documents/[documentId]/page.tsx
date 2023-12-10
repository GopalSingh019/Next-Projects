'use client'

import { useRouter } from "next/navigation";

function page({ params }: { params: { documentId
    : string } }) {
    const router=useRouter();
  return (
    <div>{params.documentId}</div>
  )
}

export default page