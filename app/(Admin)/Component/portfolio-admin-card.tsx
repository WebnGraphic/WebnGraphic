"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { formatDistanceToNow } from "date-fns";
import { Loader2, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { deletePortfolio, updatePortfolio } from "../action/portfolio";
import { PortfolioUploadForm } from "./portfolio-upload-form";

interface PortfolioCardProps {
  portfolio: {
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
    images: Array<{ url: string; publicId: string }>;
    technologies: string[];
    createdAt: Date;
    updatedAt: Date;
  };
}

export function AdminPortfolioCard({ portfolio }: PortfolioCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isPublishedDialogOpen, setIsPublishedDialogOpen] = useState(false);
  const [isFeaturedDialogOpen, setIsFeaturedDialogOpen] = useState(false);
  const [newPublishedStatus, setNewPublishedStatus] = useState(
    portfolio.published
  );
  const [newFeaturedStatus, setNewFeaturedStatus] = useState(
    portfolio.featured
  );
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [featuring, setfeaturing] = useState(false);

  const handleDeleteConfirm = async () => {
    setDeleting(true);

    const result = await deletePortfolio(portfolio.id);

    if (result.success) {
      toast.success("Portfolio Deleted", {
        description: "Your portfolio has been deleted successfully.",
      });
    } else {
      toast.error("Failed to Delete Blog", {
        description:
          result.error || "There was an error deleting the portfolio.",
      });
    }

    setDeleting(false);
    setIsDeleteDialogOpen(false);
  };

  const handleEdit = () => {
    setIsEditDialogOpen(true);
  };
  const handlePublishedConfirm = async () => {
    setPublishing(true);
    const result = await updatePortfolio(portfolio.id, {
      published: newPublishedStatus,
    });

    if (result.success) {
      toast.success("Portfolio Updated", {
        description: "Your portfolio has been updated successfully.",
      });
    } else {
      toast.error("Failed to Update PortFolio", {
        description: "There was an error updating the blog post.",
      });
    }
    setPublishing(false);

    setIsPublishedDialogOpen(false);
  };

  const handleFeaturedConfirm = async () => {
    setfeaturing(true);
    const result = await updatePortfolio(portfolio.id, {
      featured: newFeaturedStatus,
    });

    if (result.success) {
      toast.success("Portfolio Updated", {
        description: "Your portfolio has been updated successfully.",
      });
    } else {
      toast.error("Failed to Update PortFolio", {
        description: "There was an error updating the Portfolio.",
      });
    }
    setfeaturing(false);
    setIsFeaturedDialogOpen(false);
  };

  return (
    <>
      <Card className=" overflow-hidden">
        <div className="relative w-full">
          <Image
            src={portfolio.images[0].url}
            alt={portfolio.title}
            width={1280}
            height={720}
            priority
            className="object-cover w-full h-auto"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            {portfolio.featured && <Badge variant="secondary">Featured</Badge>}
          </div>
        </div>
        <CardHeader className="pb-2">
          <Badge variant="outline">{portfolio.category}</Badge>
          <h3 className="font-semibold text-lg line-clamp-2">
            {portfolio.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {portfolio.descriptions}
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Published</span>
              <AlertDialog
                open={isPublishedDialogOpen}
                onOpenChange={setIsPublishedDialogOpen}
              >
                <AlertDialogTrigger asChild>
                  <div className="relative">
                    {publishing ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Switch
                        checked={portfolio.published}
                        onCheckedChange={(checked) => {
                          setNewPublishedStatus(checked);
                          setIsPublishedDialogOpen(true);
                        }}
                      />
                    )}
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Status Change</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to{" "}
                      {newPublishedStatus ? "publish" : "unpublish"} this
                      Portfolio ?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handlePublishedConfirm}>
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Popular</span>
              <AlertDialog
                open={isFeaturedDialogOpen}
                onOpenChange={setIsFeaturedDialogOpen}
              >
                <AlertDialogTrigger asChild>
                  <div className="relative">
                    {featuring ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Switch
                        checked={portfolio.featured}
                        onCheckedChange={(checked) => {
                          setNewFeaturedStatus(checked);
                          setIsFeaturedDialogOpen(true);
                        }}
                      />
                    )}
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Status Change</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to{" "}
                      {newFeaturedStatus
                        ? "mark as featured"
                        : "remove from featured"}{" "}
                      this portfolio?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleFeaturedConfirm}>
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="text-xs text-muted-foreground">
            Updated{" "}
            {formatDistanceToNow(new Date(portfolio.updatedAt), {
              addSuffix: true,
            })}
          </div>
          <div className="flex gap-2">
            <Button onClick={handleEdit} variant="outline" size="sm">
              <Pencil className="h-4 w-4 mr-1" />
              Edit
            </Button>
            <AlertDialog
              open={isDeleteDialogOpen}
              onOpenChange={setIsDeleteDialogOpen}
            >
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  {deleting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4 mr-1" />
                  )}
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the blog post.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteConfirm}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardFooter>
      </Card>
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="min-w-[calc(100%-100px)]">
          <DialogHeader>
            <DialogTitle>Create Blog Post</DialogTitle>
            <DialogDescription>
              Start writing your new blog post here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <PortfolioUploadForm
              portfolio={portfolio}
              closeForm={setIsEditDialogOpen}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
