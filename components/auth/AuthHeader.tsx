"use client";
import React from "react";

interface AuthHeaderProps {
  label: string;
  title: string;
}
const AuthHeader = ({ label, title }: AuthHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-sm font-semibold">{label}</p>
    </div>
  );
};

export default AuthHeader;
