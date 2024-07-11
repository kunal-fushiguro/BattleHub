"use clinet";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ParticipantSchema } from "@/schemas/ParticipantSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useFormStatus } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const ParticipantForm = ({ id }: any) => {
  const [loading, setLoading] = useState(false);
  const { pending } = useFormStatus();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(ParticipantSchema),
    defaultValues: {
      gameuid: "",
      gamegrene: "",
      description: "",
      contactlink: "",
      contacthandle: "",
      password: "",
    },
  });

  const notify = (err: any) => {
    toast(err);
  };

  const handleForm = async (data: z.infer<typeof ParticipantSchema>) => {
    setLoading(true);
    // handle api
    console.log(data);
    const completeData = {
      id,
      ...data,
    };

    console.log(completeData);

    const url = `/api/user/participant`;
    const resposne = await fetch(url, {
      method: "POST",
      body: JSON.stringify(completeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await resposne.json();
    console.log(res);
    if (res.success) {
      notify(res.message);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } else {
      notify(res.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    async function getUser() {
      const url = `/api/user/getuser`;
      console.log(id);

      const resposne = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ id: id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await resposne.json();
      console.log(res);

      if (res.success) {
        if (res.isSet) {
          notify("Participant details is already Updated.");
          setTimeout(() => {
            router.push("/");
          }, 3000);
        }
      }
    }

    getUser();
  });

  return (
    <div>
      <Card className="w-[300px] md:w-[450px]">
        <CardHeader>
          <CardTitle>Participant Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleForm)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="gameuid"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Game UID</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="9389023393"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gamegrene"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Game Gerne</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a game gerne to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="freefire">Free Fire</SelectItem>
                          <SelectItem value="pubg">Pubg</SelectItem>
                          <SelectItem value="valorant">valorant</SelectItem>
                          <SelectItem value="fornite">fornite</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contacthandle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Handle</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Contact Handle to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="twitter">Twitter</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactlink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Link</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="https://www.instagram.com/"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Describe about yourself</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none"
                          {...field}
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
                        <Input
                          {...field}
                          type="password"
                          placeholder="******"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full" disabled={pending}>
                {loading ? "Loading..." : "Update"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ParticipantForm;
