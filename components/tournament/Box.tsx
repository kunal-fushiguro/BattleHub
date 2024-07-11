import React from "react";
import Link from "next/link";

const Box = ({
  name,
  description,
  gamegerne,
  gamemode,
  date,
  time,
  status,
}: any) => {
  return (
    <div className="h-auto flex justify-center items-center flex-col gap-4 w-full">
      <div className="md:w-[40%] border-2 border-black rounded-xl px-6 py-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="w-full flex justify-between items-center mb-2">
          <span className="font-semibold text-lg">Name</span>
          <span className="text-black font-medium">Free Fire: Solo</span>
        </div>
        <div className="w-full mb-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minima
          facilis cumque saepe odit voluptatum provident exercitationem esse
          consectetur, asperiores incidunt vitae culpa ab adipisci iure
          blanditiis tempore libero nostrum!
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold text-lg">Date and Time : status</span>
          <span>
            <Link href={`tournament/participate/id`}>
              <button className="bg-black text-white py-2 px-4 rounded-xl hover:bg-white hover:text-black hover:border-black hover:border-2 transition-colors duration-300">
                Participate : 48
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Box;
