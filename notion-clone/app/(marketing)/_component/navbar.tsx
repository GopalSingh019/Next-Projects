'use client'
import { Button } from '@/components/ui/button'
import Logo from './logo'
import { ModeToggle } from './modeTogle'
import {useScrollTop} from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

function navbar() {
    const scrolled=useScrollTop();
  return (
    <div className={cn('z-50 bg-background dark:bg-[#1f1f1f] p-6 fixed top-0 w-full',scrolled && 'border-b shadow-sm')}>
        <div className='flex justify-between'>
        <Logo></Logo>
        <div className='flex gap-2'>
            <Button variant="ghost">Log in</Button>
            <Button >Get Jotion Free</Button>
            <ModeToggle></ModeToggle>
        </div>
        </div>
    </div>
  )
}

export default navbar