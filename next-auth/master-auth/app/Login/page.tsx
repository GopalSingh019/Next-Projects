"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { GitCommitHorizontal, Github, GithubIcon, MailIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  const data = useSession();
  console.log(data);
  return (
    <main className="h-[100vh] w-[100vw] flex justify-center items-center">
      {!data.data && <div className="flex gap-x-4">

        <Card className="">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to our account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email">Email</label>
                  <Input id="email" placeholder="Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="password">Password</label>
                  <Input id="password" placeholder="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex items-center flex-col gap-6">
            <Button variant="outline" className="w-[100%]" onClick={() => signIn("credential")}>Login</Button>
            <div className="flex justify-center gap-2">
              <Button variant="outline" onClick={() => signIn("github")} className="flex gap-2"><GithubIcon></GithubIcon> Login with Github</Button>
              <Button variant="outline" onClick={() => signIn("github")} className="flex gap-2"><MailIcon /> Login with Google</Button>
            </div>
          </CardFooter>
        </Card>

        {/* <Button variant="outline" onClick={() => signIn("github")} className="flex gap-2"><GithubIcon></GithubIcon> Login with Github</Button>
        <Button variant="outline" onClick={() => signIn("github")} className="flex gap-2"><MailIcon /> Login with Google</Button> */}
      </div>}
      {data.data && <Button variant="outline" onClick={() => signOut()}>sign out</Button>
      }
    </main>
  );
}