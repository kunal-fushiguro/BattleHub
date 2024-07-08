"use client";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import gerneData from "@/utils/gernesData.json";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="w-screen md:h-[500px] h-[490px] flex md:flex-row flex-col-reverse">
        <div className="md:w-1/2 w-full h-full flex justify-center items-center flex-col p-10 gap-8 ">
          <h2 className="font-bold md:text-6xl text-2xl ">
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
          <p className="md:text-lg text-center text-xs font-medium ">
            At BattleHub, we are dedicated to providing an unparalleled platform
            for gamers to create and participate in thrilling eSports
            tournaments. Whether you're a seasoned pro or a casual gamer,
            BattleHub offers a seamless experience for everyone. Engage in epic
            battles, showcase your skills, and rise to the top of the
            leaderboards in popular games like BGMI, Free Fire, and many more.
          </p>
          <Button
            variant="default"
            color="blue"
            size="lg"
            className="bg-red-700"
          >
            Explore
          </Button>
        </div>
        <div className="flex justify-center items-center md:p-14 p-8 h-full md:w-1/2 w-full">
          <div className="border-4 rounded-lg border-black object-cover h-full w-full">
            <img src="/img1.jpg" alt="" className=" h-full" />
          </div>
        </div>
      </div>
      <div className="w-screen md:h-[500px] flex md:justify-start md:items-start justify-center items-center md:pl-14 flex-col gap-3 md:mt-3">
        <div className="text-3xl md:text-6xl font-bold w-full md:h-[10%] h-[40px] pl-14">
          Explore genres
        </div>
        <div className="text-2xl h-[80%] w-full flex justify-start items-center flex-col  md:flex-row gap-8">
          {gerneData.map((data) => {
            return (
              <div
                className=" flex justify-center items-center w-[200px] h-[100%] flex-col gap-4"
                key={data.id}
              >
                <div className="w-full h-[80%]  object-fill">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-md h-full"
                  />
                </div>
                <Link href={`/tournament/${data.name}`}>
                  <Button size={"lg"}>Explore</Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 flex justify-center items-center text-center flex-col w-full gap-4 md:gap-8 md:h-[150px] h-[200px]">
        <span className="text-4xl md:text-6xl font-bold w-full h-[10%] md:h-[20%] pl-10 ">
          About Us
        </span>
        <p className="md:text-lg text-center text-xs font-medium px-[10px] h-[80%] md:px-[40px]">
          BattleHub is a premier platform for eSports enthusiasts to create,
          participate, and manage tournaments. Our mission is to bring gamers
          together, fostering a competitive yet friendly environment where
          everyone can showcase their skills and passion for gaming. BattleHub
          isn't just about competition; it's about community. Connect with
          fellow gamers, share strategies, and form alliances. Our platform
          fosters a vibrant community where you can make friends, find
          teammates, and stay updated on the latest eSports news. Join BattleHub
          today and be part of a growing network of passionate gamers.
        </p>
      </div>
    </div>
  );
};

export default Home;
