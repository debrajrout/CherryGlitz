"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import Image from "next/image";
import { IoIosLogOut } from "react-icons/io";
export default function LogoutMenu(url) {
    function handleClick() {
        signOut("google");
        toast.success("See you soon!");
    }
    return (
        <Button
            onClick={handleClick}
            variant="ghost"

        >
            <IoIosLogOut className="text-xl text-black" />
        </Button>
    );
}
