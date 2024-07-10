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
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parsedData = JSON.parse(data);

      setUserData(parsedData);
      setLogin(true);
    }
  }, []);

  return (
    <div className="flex justify-between items-center w-[99vw] h-24 p-2 border-black border-b-2">
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
              <DropdownMenuLabel>{userData?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={`/profile/${userData?.id}`}>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <Link href={"/auth/logout"}>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
