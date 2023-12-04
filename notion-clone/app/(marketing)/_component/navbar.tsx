'use client'
import { Button } from '@/components/ui/button'
import Logo from './logo'
import { ModeToggle } from './modeTogle'
import {useScrollTop} from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

function navbar() {
    const scrolled=useScrollTop();
    const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className={cn('z-50 bg-background dark:bg-[#1f1f1f] p-6 fixed top-0 w-full',scrolled && 'border-b shadow-sm')}>
        <div className='flex justify-between'>
        <Logo></Logo>
        <div className='flex gap-2'>
        {!isAuthenticated && <SignInButton mode="modal">
            <Button variant="ghost">Log in</Button>
        </SignInButton>}
            <Button >Get Jotion Free</Button>
            <ModeToggle></ModeToggle>
        </div>
        </div>
    </div>
  )
}

export default navbar