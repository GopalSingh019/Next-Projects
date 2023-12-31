'use client'

import { useConvexAuth } from "convex/react";
import Navigation from './_components/navigation'
import { redirect } from 'next/navigation';
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";
import { Toaster } from "@/components/ui/toaster";
import Loader from './_components/loader'
import { EdgeStoreProvider } from '../../../edgeStore/edgestore';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "skyblue",
};

function Layout({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated } = useConvexAuth();
  if (!isAuthenticated && !isLoading) {
    redirect('/');
    return;
  }
  return (
    <body>
      {!isLoading && (<main className='flex h-full w-full flex-row'>
        <Navigation ></Navigation>
        <section className="flex-1 dark:bg-[#1f1f1f] h-full overflow-y-auto">
        {children}
        </section>
      </main>)}
      {/* {isLoading && <main className="flex justify-center items-center h-full w-full"><ClipLoader
        color='#ffffff'
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></main>} */}
      {isLoading && <Loader/>}
      <Toaster />
    </body>
  )
}

export default Layout