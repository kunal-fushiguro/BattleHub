"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ParticipantForm from "@/components/participantUpdate/ParticipantForm";
const page = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  const userid = params.id[0];

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parsedData = JSON.parse(data);

      setUserData(parsedData);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col md:flex-row md:h-[90vh] md:w-screen gap-4">
        <div className="flex justify-center items-center flex-col w-full md:h-full md:w-[40%] gap-2  p-2">
          <img
            src="https://github.com/shadcn.png"
            alt="logo"
            className="h-[150px] md:h-[300px] rounded-full border-[6px] border-black"
          />
          <span className="font-bold text-4xl w-full text-center">
            {userData.name}
          </span>
          <p className="px-4 font-medium text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            adipisci beatae qui at excepturi deleniti velit officia corporis
            illum, omnis asperiores aut minima tenetur tempora quos dicta,
            voluptas pariatur ipsa!
          </p>
        </div>
        <div className="flex justify-center items-center flex-col w-[90%] md:h-full md:w-[60%]">
          <ParticipantForm id={userid} />
        </div>
      </div>
    </>
  );
};

export default page;
