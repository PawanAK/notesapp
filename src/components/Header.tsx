import { getUser } from "@/lib/auth";
import { Lilita_One } from "next/font/google";
import React from "react";
import NewNoteButton from "./NewNoteButton";
import UserButton from "./UserButton";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });

const Header = async () => {
  const user = await getUser();
  return (
    <div className="relative mt-2 flex h-20 w-full max-w-5xl items-center justify-between rounded-lg bg-popover px-4">
      <UserButton user={user} />
      <h1 className={`text-4xl text-secondary sm:text-5xl ${lilita.className}`}>
        Notees
      </h1>
      <NewNoteButton />
    </div>
  );
};

export default Header;
