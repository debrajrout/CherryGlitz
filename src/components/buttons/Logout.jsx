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

import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import Image from "next/image";
export default function Logout(url) {
  function handleClick() {
    signOut("google");
    toast.success("See you soon!");
  }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="h-8 w-8 rounded-full bg-black">
            <Image
              className=" rounded-full  ring-2 ring-gray-700"
              src={url.url}
              alt="Profile Image Cherry Glitz user"
              width={40}
              height={40}
            />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogAction className="mt-2">
              <Button
                onClick={handleClick}
                variant="ghost"
                className="mx-auto w-10 text-base"
              >
                Logout
              </Button>
            </AlertDialogAction>

            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
