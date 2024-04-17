"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

const ContactUsForm = () => {
  const t = useTranslations("Forms.ContactUs");
  const formSchema = z.object({
    name: z.string().min(2),
    phone: z.string().min(10),
    email: z.string().email(),
    subject: z.string().min(2),
    message: z.string().min(10),
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
            name={"name"}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
                  {t("Name")}
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
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
                  {t("Phone")}
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
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
                  {t("Email")}
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
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
                  {t("Subject")}
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
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
                  {t("Message")}
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
          <Button className="bg-[#38383b] hover:bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            {t("Submit")}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsForm;
