import React from 'react'
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { Id } from "@/convex/_generated/dataModel";
import "@blocknote/core/style.css";
import { useEdgeStore } from '@/edgeStore/edgestore';
import { useTheme } from 'next-themes';

interface data {
    _id?: Id<"documents">,
    content?: string
}
function BlockNote({ initialData,onChange,preview = true }: { onChange: (value: string) => void;initialData: data;preview:boolean }) {
    
    const { edgestore } = useEdgeStore();

    const {theme} = useTheme();
    
    const handleUpload=async(file:File)=>{
        const res=await edgestore.publicFiles.upload({
            file
        })
        return res.url;
    }
    const editor = useBlockNote({
        editable:preview,
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
        <BlockNoteView editor={editor} theme={theme==='dark'?'dark':'light'} />
    )
}

export default BlockNote