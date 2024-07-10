"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Typewriter from "typewriter-effect";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.clear();
    setTimeout(() => {
      router.push("/");
    }, 2000);
  });
  return (
    <>
      <div className="flex justify-center items-center text-4xl h-[70vh] w-screen font-bold  ">
        loading{" "}
        <Typewriter
          options={{
            strings: ["..............."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
};

export default page;
