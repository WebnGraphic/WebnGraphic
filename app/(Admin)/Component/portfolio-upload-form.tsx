"use client";

import { MultipleImageUploader } from "@/components/manual/input/image-uploader-multiple";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { createPortfolio, updatePortfolio } from "../action/portfolio";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),

  category: z.string().min(1, {
    message: "Category is required.",
  }),

  client: z.string().min(1, {
    message: "Client name must be at least 1 characters.",
  }),

  completeDate: z
    .date()
    .refine((date) => !isNaN(date.getTime()), {
      message: "Complete date is required.",
    })
    .refine((date) => date <= new Date(), {
      message: "Complete date cannot be in the future.",
    }),

  featured: z.boolean().default(false),

  published: z.boolean().default(false),

  descriptions: z.string().min(10, {
    message: "Descriptions must be at least 10 characters.",
  }),

  challenge: z.string().min(10, {
    message: "Challenge description must be at least 10 characters.",
  }),

  solution: z.string().min(10, {
    message: "Solution description must be at least 10 characters.",
  }),

  result: z.string().min(10, {
    message: "Result description must be at least 10 characters.",
  }),

  technologies: z.array(z.string()).min(1, {
    message: "At least one technology is required.",
  }),

  images: z
    .array(
      z.object({
        url: z.string().url({ message: "Invalid image URL." }),
        publicId: z.string().min(1, {
          message: "Image publicId must be at least 1 character long.",
        }),
      })
    )
    .min(1, {
      message: "At least one image is required.",
    }),
});

type portfolio = {
  id: string;
  title: string;
  category: string;
  client: string;
  descriptions: string;
  challenge: string;
  solution: string;
  result: string;
  completeDate: Date;
  featured: boolean;
  published: boolean;
  images: { url: string; publicId: string }[];
  technologies: string[];
};

interface PortfolioFormProps {
  closeForm: Dispatch<SetStateAction<boolean>>;
  portfolio?: portfolio;
}

export function PortfolioUploadForm({
  closeForm,
  portfolio,
}: PortfolioFormProps) {
  const [newTechnology, setNewTechnology] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: portfolio?.title || "",
      category: portfolio?.category || "",
      client: portfolio?.client || "",
      completeDate: portfolio?.completeDate || undefined,
      featured: portfolio?.featured || false,
      published: portfolio?.published || false,
      descriptions: portfolio?.descriptions || "",
      challenge: portfolio?.challenge || "",
      solution: portfolio?.solution || "",
      result: portfolio?.result || "",
      technologies: portfolio?.technologies || [],
      images: portfolio?.images || ([] as { url: string; publicId: string }[]),
    },
  });

  const handleImageUploaded = (images: { url: string; publicId: string }[]) => {
    form.setValue("images", images);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (portfolio) {
        await updatePortfolio(portfolio.id, values);
        toast.success("Portfolio Updated", {
          description: "Your portfolio has been updated successfully.",
        });
        closeForm(false);
      } else {
        await createPortfolio(values);
        toast.success("Portfolio created", {
          description: "Your portfolio has been created successfully.",
        });
        closeForm(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="relative p-2 w-full max-h-[calc(100vh-150px)] overflow-y-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <Input placeholder="My Amazing Project" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
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

          {/* Images */}
          <div>
            <FormField
              control={form.control}
              name="images"
              render={() => (
                <FormItem className="text-center">
                  <FormLabel>Blog Image</FormLabel>
                  <FormControl>
                    <MultipleImageUploader
                      uploadPreset="portfolio_image"
                      aspectRatio={4 / 3}
                      initialImages={portfolio?.images}
                      onImageUploaded={handleImageUploaded}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* client */}
          <FormField
            control={form.control}
            name="client"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client</FormLabel>
                <FormControl>
                  <Input placeholder="Client Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* date */}
          <FormField
            control={form.control}
            name="completeDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Completion Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* description */}
          <FormField
            control={form.control}
            name="descriptions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your project..."
                    className="resize-y min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* challenge */}
          <FormField
            control={form.control}
            name="challenge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Challenge</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What challenges did you face?"
                    className="resize-y min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* solution */}
          <FormField
            control={form.control}
            name="solution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Solution</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How did you solve the challenges?"
                    className="resize-y min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* result */}
          <FormField
            control={form.control}
            name="result"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Result</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What was the outcome of your project?"
                    className="resize-y min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* technology */}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies</FormLabel>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter a technology"
                      value={newTechnology}
                      onChange={(e) => setNewTechnology(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && newTechnology.trim()) {
                          e.preventDefault();
                          field.onChange([
                            ...field.value,
                            newTechnology.trim(),
                          ]);
                          setNewTechnology("");
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        if (newTechnology.trim()) {
                          field.onChange([
                            ...field.value,
                            newTechnology.trim(),
                          ]);
                          setNewTechnology("");
                        }
                      }}
                    >
                      Add
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {field.value.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-muted px-3 py-1 rounded-md"
                      >
                        <span>{tech}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-auto p-1 ml-1"
                          onClick={() => {
                            const newTechnologies = [...field.value];
                            newTechnologies.splice(index, 1);
                            field.onChange(newTechnologies);
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <FormDescription>
                    Add the technologies used in your project.
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* featured , published */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Featured Portfolio
                    </FormLabel>
                    <FormDescription>
                      Mark this portfolio post as featured
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Published</FormLabel>
                    <FormDescription>
                      Make this portfolio visible to readers
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              "Submit Portfolio Project"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
