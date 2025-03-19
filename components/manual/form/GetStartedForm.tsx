"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { CircleCheckBig } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import NormalButton from "../button/NormalButton";

// Define form validation schema
const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email format."),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits.")
    .max(15, "Phone number must not exceed 15 digits."),
  service: z.string().min(2, "Please select a service."),
  plan: z.string().min(2, "Please select a plan."),
  budget: z.string().min(1, "Budget is required."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(160, "Message must not exceed 160 characters."),
});

// Define props for preset values
interface InputFormProps {
  presetValues?: {
    service?: string;
    plan?: string;
  };
}

export function GetStartedForm({ presetValues = {} }: InputFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: presetValues.service || "",
      plan: presetValues.plan || "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setIsSubmitted(true);
  }

  return (
    <div>
      <div>
        <div className="text-center mb-6">
          <DialogTitle className="text-3xl font-bold text-gray-900">
            Get Started
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Fill in your details below and submit.
          </DialogDescription>
        </div>
        {isSubmitted ? (
          <div className="text-center p-6 space-y-4">
            <CircleCheckBig className="text-green-500 text-6xl mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900">Thank You!</h3>
            <p className="text-gray-600">
              We will contact you as soon as possible based on the details you
              provided.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full border-gray-300 focus:ring-2 focus:ring-blue-400"
                          type="text"
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full border-gray-300 focus:ring-2 focus:ring-blue-400"
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Phone & Service */}
              <div className="flex flex-col md:flex-row gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full border-gray-300 focus:ring-2 focus:ring-blue-400"
                          type="text"
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Service</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-2 focus:ring-blue-400">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="web-design">Web Design</SelectItem>
                          <SelectItem value="graphic-design">
                            Graphic Design
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Budget & Plan */}
              <div className="flex flex-col md:flex-row gap-6">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Budget</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full border-gray-300 focus:ring-2 focus:ring-blue-400"
                          type="text"
                          placeholder="Enter your budget"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="plan"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Plan</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-gray-300 focus:ring-2 focus:ring-blue-400">
                            <SelectValue placeholder="Select a plan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="starter">Starter</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="inclusive">Inclusive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="w-full min-h-24 border-gray-300 focus:ring-2 focus:ring-blue-400 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="text-center">
                <NormalButton>Here We Go</NormalButton>
              </div>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
