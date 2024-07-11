"use client";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import gerneData from "@/utils/gernesData.json";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col gap-10">
        {/* Hero Section */}
        <div className="w-screen md:h-[500px] h-[490px] flex md:flex-row flex-col-reverse">
          <div className="md:w-1/2 w-full h-full flex justify-center items-center flex-col p-10 gap-8 bg-gray-100">
            <h2 className="font-bold md:text-6xl text-2xl text-center">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to BattleHub",
                    "Your Ultimate eSports Tournament Platform",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="md:text-lg text-center text-sm font-medium">
              At BattleHub, we are dedicated to providing an unparalleled
              platform for gamers to create and participate in thrilling eSports
              tournaments. Whether you're a seasoned pro or a casual gamer,
              BattleHub offers a seamless experience for everyone. Engage in
              epic battles, showcase your skills, and rise to the top of the
              leaderboards in popular games like BGMI, Free Fire, and many more.
            </p>
            <Link href="/tournament">
              <Button className="bg-red-700 text-white">Explore</Button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-full flex justify-center items-center p-8 md:p-14">
            <div className="border-4 rounded-lg border-black overflow-hidden h-full w-full">
              <img
                src="/img1.jpg"
                alt="BattleHub"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Explore Genres Section */}
        <div className="w-screen md:h-[500px] flex flex-col md:justify-start md:items-start justify-center items-center md:pl-14 gap-8 md:mt-3">
          <div className="text-3xl md:text-6xl font-bold w-full text-center md:text-left pl-4 md:pl-14">
            Explore Genres
          </div>
          <div className="w-full flex flex-wrap justify-center md:justify-start items-center gap-8 px-4 md:px-0">
            {gerneData.map((data) => (
              <div
                className="flex flex-col justify-center items-center w-[200px] h-[300px] gap-4"
                key={data.id}
              >
                <div className="w-full h-[100%]">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-md h-full w-full object-cover"
                  />
                </div>
                <Link href={`/tournament/${data.name}`}>
                  <Button className="bg-gray-800 text-white">Explore</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="w-screen md:h-[500px] h-[490px] flex md:flex-row-reverse flex-col-reverse">
          <div className="md:w-1/2 w-full h-full flex justify-center items-center flex-col p-10 gap-8 bg-gray-100">
            <h2 className="font-bold md:text-6xl text-2xl text-center">
              <Typewriter
                options={{
                  strings: ["About BattleHub"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="md:text-lg text-center text-sm font-medium">
              BattleHub is a premier platform for eSports enthusiasts to create,
              participate, and manage tournaments. Our mission is to bring
              gamers together, fostering a competitive yet friendly environment
              where everyone can showcase their skills and passion for gaming.
              BattleHub isn't just about competition; it's about community.
              Connect with fellow gamers, share strategies, and form alliances.
              Our platform fosters a vibrant community where you can make
              friends, find teammates, and stay updated on the latest eSports
              news. Join BattleHub today and be part of a growing network of
              passionate gamers.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-full flex justify-center items-center p-8 md:p-14">
            <div className="border-4 rounded-lg border-black overflow-hidden h-full w-full">
              <img
                src="/img2.jpg"
                alt="About BattleHub"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
