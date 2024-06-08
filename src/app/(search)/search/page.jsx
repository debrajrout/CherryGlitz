"use client"

import Image from "next/image"
import React, { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// Define the categories
const categories = [
  { value: "tattoo-piercing", label: "Tattoo and Piercing" },
  { value: "beauty-parlour", label: "Beauty Parlour" },
  { value: "mens-unisex-salon", label: "Men’s and Unisex Salon" },
  { value: "massage-parlour", label: "Massage Parlour" },
  { value: "spa-centre", label: "Spa Centre" },
]

export default function Page() {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [category, setCategory] = useState("")

  return (
    <div className="mt-[65px] flex w-full gap-3 flex-col items-center">


      <div className="relative mt-2 w-[90%]">
        <div className="absolute inset-y-0  left-0 flex items-center bg-slate-300 px-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M19.71 18.29l-3.4-3.39A8 8 0 1 0 15 16l3.39 3.39a1 1 0 0 0 1.42-1.42zM2 10a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
          </svg>
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-gray-50 border px-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search wuth CherryGlitz"
        />
      </div>


      <div>
        <Image
          src="/search/sear.png"
          alt=""
          className="shadow-md shadow-black/30"
          width={2400}
          height={800}
        />
      </div>
    </div>
  )
}
