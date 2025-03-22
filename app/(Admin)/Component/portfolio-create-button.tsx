"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { PortfolioUploadForm } from "./portfolio-upload-form";

export default function PortfolioCreateButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="flex items-center gap-2"
      >
        <Plus size={18} />
        Create Portfolio
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="min-w-[calc(100%-100px)] ">
          <DialogHeader>
            <DialogTitle>Create Portfolio</DialogTitle>
            <DialogDescription>Write a new portfolio.</DialogDescription>
          </DialogHeader>
          <PortfolioUploadForm closeForm={setIsDialogOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
