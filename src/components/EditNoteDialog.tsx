"use client";

import { editNoteAction } from "@/actions/notes";
import { Note } from "@/db/schemas/notes";
import { useTransition, type Dispatch, type SetStateAction } from "react";
import toast from "react-hot-toast";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  note: Note;
};

const EditNoteDialog = ({ setOpen, note }: Props) => {
  const [isPending, startTransition] = useTransition();
  const handleEditNote = async (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await editNoteAction(formData);
      if (!errorMessage) {
        setOpen(false);
        toast.success("Successfully edited note");
      } else {
        toast.error(errorMessage);
      }
    });
  };
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>edit Note</DialogHeader>

      <form action={handleEditNote}>
        <Textarea
          id="text"
          name="text"
          disabled={isPending}
          className="mb-6 mt-2 min-h-[300px]"
        />

        <DialogFooter>
          <Button
            type="submit"
            disabled={isPending}
            variant={"secondary"}
            className="w-40"
          >
            {isPending ? "Updating Note..." : "Update Note"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default EditNoteDialog;
