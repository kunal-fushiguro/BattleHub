"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  backButtonHref: string;
  backButtonlabel: string;
}

const BackButton = ({
  backButtonHref: href,
  backButtonlabel: label,
}: Props) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
