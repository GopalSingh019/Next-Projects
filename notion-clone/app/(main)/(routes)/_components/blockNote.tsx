import React from 'react'
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import {
    BlockNoteEditor,
    PartialBlock
} from "@blocknote/core";

import "@blocknote/core/style.css";
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useEdgeStore } from '@/edgeStore/edgestore';

interface data {
    _id: string,
    content: string
}
function blockNote({ initialData,onChange }: { onChange: (value: string) => void;initialData: data }) {
    
    const { edgestore } = useEdgeStore();
    
    const handleUpload=async(file:File)=>{
        const res=await edgestore.publicFiles.upload({
            file
        })
        return res.url;
    }
    const editor = useBlockNote({

        initialContent:
        initialData?.content
                ? JSON.parse(initialData.content)
                : undefined,

        onEditorContentChange: (editor) => {

            // Log the document to console on every update
            // console.log(JSON.stringify(editor.topLevelBlocks, null, 2));
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2));;
        },
        uploadFile:handleUpload
    });

    return (
        <BlockNoteView editor={editor} theme='light' />
    )
}

export default blockNote