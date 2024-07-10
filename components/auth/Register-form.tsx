"use client";

import CarWrapper from "./CarWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { registerSchema } from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Registerform = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { pending } = useFormStatus();
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const notify = (err: any) => {
    toast(err);
  };
  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    setLoading(true);
    console.log(data);
    // handle api
    const url = `/api/user/register`;
    const resposne = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await resposne.json();
    console.log(res);
    if (res.success) {
      notify(res.message);
      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    } else {
      notify(res.message);
    }

    setLoading(false);
  };

  return (
    <>
      <CarWrapper
        label="Create an Account"
        title="Sign-Up"
        backButtonHref="/auth/login"
        backButtonlabel="Already have an account ? Login Here"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={pending}>
              {loading ? "Loading..." : "Register"}
            </Button>
          </form>
        </Form>
      </CarWrapper>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Registerform;
