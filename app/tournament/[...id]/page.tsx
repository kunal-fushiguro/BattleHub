"use client";
import Navbar from "@/components/Navbar";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  const data = params;
  console.log(data);

  return (
    <>
      <Navbar />
    </>
  );
};

export default page;
