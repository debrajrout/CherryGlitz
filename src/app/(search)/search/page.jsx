"use client"

import Image from "next/image"
import React, { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IoSearchOutline } from "react-icons/io5";
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
import { Input } from "@/components/ui/input"

const cities = [
  {
    value: "delhi",
    label: "Delhi",
    subCities: [
      "Connaught Place",
      "Karol Bagh",
      "Chandni Chowk",
      "Lajpat Nagar",
      "Hauz Khas",
      "Saket",
      "Dwarka",
      "Rohini",
      "Vasant Kunj",
      "Nehru Place",
      "Mayur Vihar",
      "Pitampura",
      "Rajouri Garden",
      "Greater Kailash",
      "Defence Colony",
      "Paharganj",
      "South Extension",
      "Janakpuri",
      "Noida",
      "Gurgaon",
      "Ghaziabad",
      "Faridabad",
      "Okhla",
      "Shahdara",
      "Patel Nagar",
      "Malviya Nagar",
      "Paschim Vihar",
      "Green Park",
      "Indirapuram",
      "Vasundhara",
      "Uttam Nagar",
      "Vasant Vihar",
      "New Friends Colony",
      "Narela",
      "Sarita Vihar",
      "Kalkaji",
      "Tilak Nagar",
      "Punjabi Bagh",
      "Kirti Nagar",
      "Ashok Vihar",
      "Dilshad Garden",
      "Jamia Nagar",
      "Sarojini Nagar",
      "Model Town",
      "Mehrauli",
      "Jangpura",
      "Dwarka",
    ],
  },
  {
    value: "mumbai",
    label: "Mumbai",
    subCities: [
      "Andheri",
      "Bandra",
      "Borivali",
      "Chembur",
      "Colaba",
      "Dadar",
      "Dahisar",
      "Dharavi",
      "Goregaon",
      "Jogeshwari",
      "Juhu",
      "Kandivali",
      "Khar",
      "Malad",
      "Matunga",
      "Mulund",
      "Powai",
      "Santacruz",
      "Sion",
      "Versova",
      "Vile Parle",
      "Wadala",
      "Worli",
      "Lower Parel",
      "Mahim",
      "Marine Lines",
      "Ghatkopar",
      "Byculla",
      "Panvel",
      "Navi Mumbai",
      "Tardeo",
      "Parel",
      "Kurla",
      "Kalbadevi",
      "Fort",
      "Grant Road",
      "Churchgate",
      "Vikhroli",
      "Malabar Hill",
      "Kanjurmarg",
      "Bhayandar",
      "Mira Road",
      "Thane",
      "Vashi",
      "Airoli",
      "Ghodbunder Road",
      "Sanpada",
      "Nerul",
      "Belapur",
      "Kalyan",
    ],
  },
  {
    value: "kolkata",
    label: "Kolkata",
    subCities: [
      "Salt Lake City",
      "Park Street",
      "Howrah",
      "Ballygunge",
      "Alipore",
      "Esplanade",
      "New Town",
      "Dum Dum",
      "Behala",
      "Tollygunge",
      "Rajarhat",
      "Garia",
      "Jadavpur",
      "Sealdah",
      "Barrackpore",
      "Shyambazar",
      "Barasat",
      "Lake Town",
      "Kalighat",
      "Kasba",
      "Dharmatala",
      "Beliaghata",
      "Ultadanga",
      "Jodhpur Park",
      "Baguiati",
      "Santoshpur",
      "Kestopur",
      "Sonarpur",
      "Rajpur-Sonarpur",
      "Narendrapur",
      "Gariahat",
      "Kankurgachi",
      "Maniktala",
      "Salt Lake Sector V",
      "Hatibagan",
      "Baranagar",
      "Park Circus",
      "Metiabruz",
      "Topsia",
      "Haltu",
      "Jadavgarh",
      "Parnasree Pally",
      "Shibpur",
      "Bansdroni",
      "Phoolbagan",
      "Belgachia",
      "Joka",
      "Madhyamgram",
      "Kalikapur",
      "Barisha",
    ],
  },
];

const categories = [
  { value: "tattoo-piercing", label: "Tattoo and Piercing" },
  { value: "beauty-parlour", label: "Beauty Parlour" },
  { value: "mens-unisex-salon", label: "Men’s and Unisex Salon" },
  { value: "massage-parlour", label: "Massage Parlour" },
  { value: "spa-centre", label: "Spa Centre" },
];

export default function Page() {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [category, setCategory] = useState("")

  return (
    <div className="mt-[65px] flex w-full gap-2 flex-col items-center">

      <div className="w-[95%] mt-3">
        <Input
          placeholder="Search for services"
          className="w-full"
          icon={<IoSearchOutline />}
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
