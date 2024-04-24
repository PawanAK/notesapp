"use server";

import db from "@/db";
import { notes } from "@/db/schemas/notes";
import { getUser } from "@/lib/auth";
import { getErrorMessage } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { use } from "react";

export const addNewNoteAction = async (formData: FormData) => {
  try {
    const user = await getUser();
    const text = formData.get("text") as String;
    await db.insert(notes).values({ text, userId: user.id });

    revalidatePath("/");

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};
