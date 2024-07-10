"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schemas/loginSchema";
import CarWrapper from "./CarWrapper";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Typewriter from "typewriter-effect";

const Loginform = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const notify = (err: any) => {
    toast(err);
  };
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    console.log(data);
    // handle api
    const url = `/api/user/login`;
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
      localStorage.setItem(
        "user",
        JSON.stringify({ id: res.id, name: res.name, email: res.email })
      );
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      notify(res.message);
    }

    setLoading(false);
  };

  const { pending } = useFormStatus();
  return (
    <>
      <CarWrapper
        label="Login to your account"
        title="Login"
        backButtonHref="/auth/signup"
        backButtonlabel="Don't have an account? Register here."
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
              {loading ? (
                <>
                  {" "}
                  Loading
                  <Typewriter
                    options={{
                      strings: ["....."],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>
      </CarWrapper>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Loginform;
