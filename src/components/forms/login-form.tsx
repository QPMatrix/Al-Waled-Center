"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const LoginForm = () => {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="text-right">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
                  דואר אלקטרוני
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
                  סיסמה
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="bg-[#38383b] hover:bg-black w-full text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            התחבר
          </Button>
        </form>
      </Form>
      <Button variant="link" className="mt-2">
        איפס סיסמה
      </Button>
    </div>
  );
};

export default LoginForm;
