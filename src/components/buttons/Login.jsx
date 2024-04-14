"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
export default function Login() {
  function handleClick() {
    signIn("google");
  }
  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className="w-10 text-lg  text-white"
    >
      Login
    </Button>
  );
}
