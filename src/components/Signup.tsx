import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const Signup = () => {
  const { user } = useUser();
  return (
    <button className="p-4 text-xs">
      {" "}
      {!user && (
        <>
          <Link href={"/api/auth/signup"}>
            <h1>Login</h1>{" "}
          </Link>
        </>
      )}
      {user && (
        <>
          <Link href={"/api/auth/logout"}>
            <h1>logout</h1>
          </Link>
        </>
      )}
    </button>
  );
};

export default Signup;
