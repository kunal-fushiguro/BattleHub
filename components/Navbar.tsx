"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiFireship } from "react-icons/si";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const login = true;
  return (
    <div className="flex justify-between items-center w-screen h-24 p-2">
      <div className="flex justify-center items-center h-full w-[190px] p-2">
        <Link
          href={"/"}
          className="flex flex-row w-full h-full justify-center items-center md:gap-4 gap-2"
        >
          <h3 className="font-bold text-3xl md:text-4xl">BattleHub</h3>
          <SiFireship className="md:text-4xl text-3xl" />
        </Link>
      </div>

      {login && (
        <div className="flex justify-center items-center relative h-full w-[180px] gap-6">
          <Link href={"/login"}>
            <Button variant="default" className="font-semibold text-lg">
              Login
            </Button>
          </Link>
          <Link href={"signup"}>
            <Button variant="outline" className="font-semibold text-lg ">
              Sign-Up
            </Button>
          </Link>
        </div>
      )}
      {!login && (
        <div className="flex justify-center items-center relative h-full md:w-[150px] w-[100px] gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/profile"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"logout"}>Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
