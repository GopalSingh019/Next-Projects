import { Button } from '@/components/ui/button'
import Logo from './logo'
import React from 'react'

function footer() {
    return (
        <div className='w-full p-8'>
            <div className='flex w-full flex-row justify-between'>
                <Logo></Logo>
                <div>
                    <Button variant='ghost'>Privacy Policy</Button>
                    <Button variant='ghost'>Terms & Conditions</Button>
                </div>
            </div>
        </div>
    )
}

export default footer