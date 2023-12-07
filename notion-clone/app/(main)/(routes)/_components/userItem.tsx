import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ChevronsRightLeftIcon } from "lucide-react";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";


function userItem() {
    const { user } = useUser();
    console.log(user?.emailAddresses);
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className=" p-2 flex flex-row items-center gap-[0.3rem] max-w-[150px] overflow-clip text-sm cursor-pointer">
                        <Avatar className="h-5 w-5">
                            <AvatarImage src={user?.imageUrl} alt="GP" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="line-clamp-1">{user?.fullName}</span>
                        <ChevronsRightLeftIcon className="h-4 w-4 rotate-90 tet text-muted-foreground" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-w-80 p-2 pt-4 flex flex-col gap-2">
                    <div className="text-muted-foreground"><p>{user?.emailAddresses[0].emailAddress}</p></div>
                    <div className=" flex w-full flex-row gap-4 bg-slate-50 items-center">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user?.imageUrl} alt="GP" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="line-clamp-1">{user?.fullName}&apos;s Jotion</div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground">
                        <SignOutButton>
                            Log out
                        </SignOutButton>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </>
    )
}

export default userItem;