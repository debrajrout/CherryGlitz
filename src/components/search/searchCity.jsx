"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CiSearch } from "react-icons/ci";

// City and Sub-City Data
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

export function ComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [city, setCity] = React.useState("");
    const [subCityOpen, setSubCityOpen] = React.useState(false);
    const [subCity, setSubCity] = React.useState("");
    const [categoryOpen, setCategoryOpen] = React.useState(false);
    const [category, setCategory] = React.useState("");

    const selectedCity = cities.find((c) => c.value === city);

    return (
        <div className="flex w-full  flex-col  items-center ">
            <div className="flex flex-row gap-2">
                {" "}
                {/* <Popover open={categoryOpen} onOpenChange={setCategoryOpen}>
                    <PopoverTrigger asChild className="mb-4">
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={categoryOpen}
                            className="justify-between"
                        >
                            {category
                                ? categories.find((c) => c.value === category)?.label
                                : "Category"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="z-[1001] w-[200px] p-0 ">
                        <Command>
                            <CommandInput placeholder="Search category..." />
                            <CommandList>
                                <CommandEmpty>No category found.</CommandEmpty>
                                <CommandGroup>
                                    {categories.map((categoryObj) => (
                                        <CommandItem
                                            key={categoryObj.value}
                                            value={categoryObj.value}
                                            onSelect={(currentValue) => {
                                                setCategory(currentValue);
                                                setCategoryOpen(false);
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    category === categoryObj.value
                                                        ? "opacity-100"
                                                        : "opacity-0",
                                                )}
                                            />
                                            {categoryObj.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover> */}
                {/* <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="justify-between "
                        >
                            {city ? selectedCity.label : "Select City"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="z-[1001] w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search city..." />
                            <CommandList>
                                <CommandEmpty>No city found.</CommandEmpty>
                                <CommandGroup>
                                    {cities.map((cityObj) => (
                                        <CommandItem
                                            key={cityObj.value}
                                            value={cityObj.value}
                                            onSelect={(currentValue) => {
                                                setCity(currentValue);
                                                setOpen(false);
                                                setSubCity(""); // Reset sub-city when city changes
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    city === cityObj.value ? "opacity-100" : "opacity-0",
                                                )}
                                            />
                                            {cityObj.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <Popover open={subCityOpen} onOpenChange={setSubCityOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={subCityOpen}
                            className="justify-between  "
                        >
                            {subCity ? subCity : "Select Area"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="z-[1001] max-h-60 w-[200px] overflow-y-auto p-0">
                        <Command>
                            <CommandInput placeholder="Search sub-city..." />
                            <CommandList>
                                <CommandEmpty>No area found.</CommandEmpty>
                                <CommandGroup>
                                    {selectedCity?.subCities.map((subCityName) => (
                                        <CommandItem
                                            key={subCityName}
                                            value={subCityName}
                                            onSelect={() => {
                                                setSubCity(subCityName);
                                                setSubCityOpen(false);
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    subCity === subCityName ? "opacity-100" : "opacity-0",
                                                )}
                                            />
                                            {subCityName}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover> */}
            </div>


        </div>
    );
}
