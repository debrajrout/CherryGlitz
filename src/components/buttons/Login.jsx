"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { VscAccount } from "react-icons/vsc";
export default function Login() {
  function handleClick() {
    signIn("google");
  }
  return (
    <Button onClick={handleClick} variant="ghost" className=" rounded-full ">
      <VscAccount className=" h-7 w-7 text-black/80" />
    </Button>
  );
}
