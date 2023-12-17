'use client'
import { Button } from '@/components/ui/button'
import Logo from './logo'
import { ModeToggle } from './modeTogle'
import { useScrollTop } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

function Navbar() {
  const scrolled = useScrollTop();
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className={cn('z-50 bg-background dark:bg-[#1f1f1f] p-6 fixed top-0 w-full', scrolled && 'border-b shadow-sm')}>
      <div className='flex justify-between'>
        <Logo></Logo>
        <div className='flex gap-2'>
          {isLoading && <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            
          </Button>
          }
          {!isAuthenticated && !isLoading && <SignInButton mode="modal">
            <Button variant="ghost">Log in</Button>
          </SignInButton>}
          {isAuthenticated && !isLoading && <>
            <Button ><Link href="/documents">Enter Jotion</Link></Button>
            <UserButton afterSignOutUrl='/' />
          </>}
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  )
}

export default Navbar