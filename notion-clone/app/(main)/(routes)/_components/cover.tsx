import React from 'react';
import { useEdgeStore } from '../../../../edgeStore/edgestore';
import { Button } from '@/components/ui/button';
import { ImageIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


interface data {
    _id: string,
    coverImage: string
}

function cover({ initialData }: { initialData: data }) {
    const [file, setFile] = React.useState<File>();
    const [isUploading, setIsUploading] = React.useState<boolean>(false);
    const [progress, setProgress] = React.useState<number>(0);
    const { edgestore } = useEdgeStore();
    const updatedoc = useMutation(api.documents.updateTask)
    return (
        <div>
            <Popover>
                <PopoverTrigger><Button onClick={() => setIsUploading(true)} variant='outline'
                    className="text-muted-foreground text-xs"><ImageIcon className="h-4 w-4 mr-2" />
                    Add cover</Button></PopoverTrigger>
                <PopoverContent>
                    <div>
                        <Input
                            type="file"
                            onChange={(e) => {
                                setFile(e.target.files?.[0]);
                            }}
                        />
                        <Button variant='outline'
                            onClick={async () => {
                                if (file) {
                                    const res = await edgestore.publicFiles.upload({
                                        file,
                                        onProgressChange: (progress) => {
                                            // you can use this to show a progress bar
                                            setProgress(progress);
                                        },
                                    });
                                    // you can run some server action or api here
                                    // to add the necessary data to your database
                                    console.log(res);
                                    updatedoc({ id: initialData._id, coverImage: res.url })
                                }
                            }}
                        >
                            Upload
                        </Button>
                        {progress > 0 && progress < 100 && <Progress value={progress} />}
                    </div>


                </PopoverContent>
            </Popover>

        </div>
    )
}

export default cover