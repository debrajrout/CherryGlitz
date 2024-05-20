"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
export default function Login() {
  function handleClick() {
    signIn("google");
  }
  return (
    <Button onClick={handleClick} variant="ghost" className=" rounded-full ">
      <CgProfile className=" h-7 w-7 text-black" />
    </Button>
  );
}
