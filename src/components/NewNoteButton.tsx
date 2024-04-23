"use client";
import React from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Plus } from "lucide-react";
import NewNoteDialog from "./NewNoteDialog";
import { cn } from "@/lib/utils";

const NewNoteButton = ({ className }: { className?: String }) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "text-secondary transition-colors duration-200 ease-in-out hover:text-primary",
          className,
        )}
      >
        <Plus />
      </DialogTrigger>
      <NewNoteDialog />
    </Dialog>
  );
};

export default NewNoteButton;
