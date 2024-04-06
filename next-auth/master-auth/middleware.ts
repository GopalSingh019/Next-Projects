import { useSession } from "next-auth/react";
import { NextRequest } from "next/server";

export function middleware(req:NextRequest){
  // const data=useSession();
  // if(!data.data){
    // Response.redirect('/Login');
  // }
  console.log('I was here');
  console.log(req.auth);
  return null;
}

export const config = {
    matcher: ['/'],
  }