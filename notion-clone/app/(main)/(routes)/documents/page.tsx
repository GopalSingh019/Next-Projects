'use client'
import { useConvexAuth } from "convex/react";
import Navigation from '../_components/navigation'
import { redirect } from 'next/navigation';
import Documents from '../_components/documentPage' 

function page() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  if (!isAuthenticated && !isLoading) {
    redirect('/');
    return;
  }
  return (
    <>
      {!isLoading && (<main className='flex h-full w-full flex-row'>
        <Navigation></Navigation>
        
        <Documents></Documents>
      </main>)}
      {isLoading && <div>loading</div>}
    </>
  )
}

export default page