import Image from "next/image";

function logo() {
    return (
        <div className='hidden md:flex items-center'>
            <div className='h-[35px] w-[35px] relative'>
                <Image fill className='object-contain' alt="" src="/logo.svg"></Image>
            </div>
            <span className='text-md font-bold'>Jotion</span>
        </div>
    )
}

export default logo