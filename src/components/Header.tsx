import { getUser } from "@/lib/auth";
import React from "react";

const Header = async () => {
  const user = await getUser();
  return (
    <div className="relative mt-2 flex h-20 w-full max-w-5xl items-center justify-between rounded-lg bg-popover px-4">
      <h1>Notees</h1>
    </div>
  );
};

export default Header;
