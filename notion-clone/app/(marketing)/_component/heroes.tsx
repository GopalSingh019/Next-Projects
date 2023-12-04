import Image from 'next/image'

function heroes() {
    return (
        <div className='flex'>
            <div className='relative h-[300px] w-[300px] '>
                <Image className='object-contain dark:hidden' fill src="/documents.png" alt="Documents"></Image>
                <Image className='object-contain hidden dark:block' fill src="/documents-dark.png" alt="Documents"></Image>
            </div>
            <div className='relative h-[400px] w-[400px] md:block  hidden'>
                <Image className='object-contain dark:hidden' fill src="/reading.png" alt="Reading"></Image>
                <Image className='object-contain hidden dark:block' fill src="/reading-dark.png" alt="Reading"></Image>
            </div>
        </div>
    )
}

export default heroes;