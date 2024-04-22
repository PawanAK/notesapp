import React from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Plus } from "lucide-react";

const NewNoteButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Plus />
      </DialogTrigger>
      <NewNoteDialog />
    </Dialog>
  );
};

export default NewNoteButton;
