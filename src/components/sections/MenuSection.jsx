import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PiPlusLight } from "react-icons/pi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { TbApps } from "react-icons/tb";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LuLogOut } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutMenu from "../buttons/menuLogout";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function MenuSection() {
  const session = await getServerSession(authOptions);
  return (
    <Sheet side="left">
      <SheetTrigger>
        <CgMenuLeftAlt className=" mr-1 h-7 w-7 text-black/70" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex w-80 flex-col items-center gap-3 px-[1px]"
      >
        <SheetHeader>
          <SheetTitle className="flex flex-row items-center gap-2">
            <h1>Cherry Glitz</h1> <TbApps className="text-blue-500" />
          </SheetTitle>
          <Separator className="bg-blue-600/50 " />
        </SheetHeader>
        <div className="flex w-full items-center justify-center">
          <button className="mx-auto flex h-9 w-4/5 animate-shimmer items-center justify-center gap-1 rounded-md border border-slate-300 bg-[linear-gradient(110deg,#6366f1,45%,#818cf8,55%,#6366f1)] bg-[length:200%_100%] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-indigo-600">
            <PiPlusLight className="text-xl text-white" />
            <span className="text-sm text-white">List your shop</span>
          </button>
        </div>
        <Select>
          <SelectTrigger className="w-4/5">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="z-[1000]">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-4/5">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="z-[1000]">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-4/5">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="z-[1000]">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div className="absolute bottom-0  w-full bg-gray-100 px-5 py-4 ">
          {session ? (
            <div className="inline-flex w-full items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-3">
                {" "}
                <Avatar>
                  <AvatarImage src={session?.user?.image} />
                  <AvatarFallback>{session?.user?.name}</AvatarFallback>
                </Avatar>
                <span>{session?.user?.name}</span>
              </div>

              <LogoutMenu />
            </div>
          ) : (
            <>Login</>
          )}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="z-[2000]">
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Themes</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

            </BreadcrumbList>
          </Breadcrumb>
        </div>

      </SheetContent>{" "}
    </Sheet>
  );
}
