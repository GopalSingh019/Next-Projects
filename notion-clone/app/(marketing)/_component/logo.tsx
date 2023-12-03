import Image from "next/image";

function logo() {
    return (
        <div className='hidden md:flex items-center'>
            <div className='h-[35px] w-[35px] relative'>
                <Image fill className='object-contain hidden dark:flex' alt="" src="/logo-dark.svg"></Image>
                <Image fill className='object-contain dark:hidden' alt="" src="/logo.svg"></Image>
            </div>
            <span className='text-md font-bold'>Jotion</span>
        </div>
    )
}

export default logo