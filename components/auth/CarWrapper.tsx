"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import AuthHeader from "./AuthHeader";
import BackButton from "./BackButton";

interface CardWrapperProps {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonlabel: string;
  children: React.ReactNode;
}

const CarWrapper = ({
  label,
  title,
  backButtonHref,
  backButtonlabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton
          backButtonHref={backButtonHref}
          backButtonlabel={backButtonlabel}
        />
      </CardFooter>
    </Card>
  );
};

export default CarWrapper;
