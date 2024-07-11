"use client";
import Navbar from "@/components/Navbar";
import { FaFire, FaGamepad, FaCrosshairs, FaFortAwesome } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Box from "@/components/tournament/Box";

const page = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  const data = params;
  console.log(data);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col gap-4 h-auto">
        <div className="min-h-[100px] w-screen flex flex-col justify-start items-center  py-8 md:ml-4 gap-8 bg-gray-100">
          <h3 className="text-5xl font-bold text-gray-900">Tournament List</h3>
          <p className="text-lg text-gray-700 md:w-[30%] text-center">
            Choose your game and join the battle! Participate in exciting
            tournaments and showcase your skills.
          </p>
          <div className="w-[90%] md:w-[40%] flex justify-around items-center gap-2 md:gap-4">
            <Link href={`/tournament/freefire`}>
              <button className="bg-gray-800 text-white py-2 px-4 flex items-center gap-2 rounded-lg hover:bg-gray-700 transition duration-300">
                <FaFire /> Free Fire
              </button>
            </Link>
            <Link href={`/tournament/pubg`}>
              <button className="bg-gray-800 text-white py-2 px-4 flex items-center gap-2 rounded-lg hover:bg-gray-700 transition duration-300">
                <FaGamepad /> PUBG
              </button>
            </Link>
            <Link href={`/tournament/valorant`}>
              <button className="bg-gray-800 text-white py-2 px-4 flex items-center gap-2 rounded-lg hover:bg-gray-700 transition duration-300">
                <FaCrosshairs /> Valorant
              </button>
            </Link>
            <Link href={`/tournament/fortnite`}>
              <button className="bg-gray-800 text-white py-2 px-4 flex items-center gap-2 rounded-lg hover:bg-gray-700 transition duration-300">
                <FaFortAwesome /> Fortnite
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-6  h-auto w-[90vw] md:w-screen my-4">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </>
  );
};

export default page;
