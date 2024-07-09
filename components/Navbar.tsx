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
import { useEffect, useState } from "react";
interface User {
  id?: string;
  name?: string;
  email?: string;
}

const Navbar = () => {
  const [login, isLogin] = useState(false);
  const data = localStorage.getItem("user") || "";
  const user: User = JSON.parse(data);
  const [loginUser, setLoginUser] = useState();
  useEffect(() => {
    if (user == null) {
      isLogin((perv) => !perv);
    } else {
      isLogin((perv) => !perv);
    }
  }, []);
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

      {!login && (
        <div className="flex justify-center items-center relative h-full w-[180px] gap-6">
          <Link href={"/auth/login"}>
            <Button variant="default" className="font-semibold text-lg">
              Login
            </Button>
          </Link>
          <Link href={"/auth/signup"}>
            <Button variant="outline" className="font-semibold text-lg ">
              Sign-Up
            </Button>
          </Link>
        </div>
      )}
      {login && (
        <div className="flex justify-center items-center relative h-full md:w-[150px] w-[100px] gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/profile"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/auth/logout"}>Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
