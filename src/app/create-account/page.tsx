"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const createAccountPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 pb-24">
      <div className="p8 relative flex w-full max-w-full flex-col items-center rounded-lg border bg-popover">
        <h1 className="mb-6 text-2xl font-semibold">Create Account</h1>

        <form action="" className="flex w-full flex-col gap-4">
          <input type="text" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Button> Create Account</Button>
          <p className="mt-3 text-center text-xs">
            Already have an Account <Link href="login">Login</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default createAccountPage;
