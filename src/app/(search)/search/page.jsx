"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoSearchOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
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
import { useRouter } from "next/navigation";
import { filterShops } from "@/actions/filterShop"; // Adjust this import path as necessary
import { Separator } from "@/components/ui/separator";
import { matchSorter } from "match-sorter";
import FetchCity from "@/actions/fetchCity";
import { fetchCategoriesFromServer } from "@/actions/fetchCategory";

export default function Page() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");
  const [subCityOpen, setSubCityOpen] = useState(false);
  const [subCity, setSubCity] = useState("");
  const [searchText, setSearchText] = useState("");
  const [shopResults, setShopResults] = useState([]);
  const [tag, setTag] = useState("");
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const citiesResponse = await FetchCity();
        setCities(citiesResponse);

        const categoriesResponse = await fetchCategoriesFromServer();
        setCategories(categoriesResponse);

        const { category, city, subCity, search } = parseQueryString();
        setCategory(category);
        setCity(city);
        setSubCity(subCity);
        setSearchText(search);
        setTag(search)
        filterShopData(category, city, subCity);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const filterShopData = async (category, city, subCity) => {
    try {
      const results = await filterShops(category, city, subCity);
      setShopResults(results);
    } catch (error) {
      console.error("Error filtering shop data:", error);
    }
  };

  const parseQueryString = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      category: params.get("category") || "",
      city: params.get("city") || "",
      subCity: params.get("subCity") || "",
      search: params.get("search") || "",
    };
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    filterShopData(value, city, subCity);
  };

  const handleCityChange = (value) => {
    setCity(value);
    setSubCity(""); // Reset subCity when city changes
    filterShopData(category, value, "");
  };

  const handleSubCityChange = (value) => {
    setSubCity(value);
    filterShopData(category, city, value);
  };

  const handleSearchTextChange = (value) => {
    setSearchText(value);
    // Since the searchText is not used in filterShops, we do not call filterShopData here.
  };

  const filteredSubCities = city
    ? matchSorter(cities.find(c => c.name === city)?.areas || [], subCity, { threshold: matchSorter.rankings.CONTAINS })
    : [];

  return (
    <div className="mt-[65px] flex w-full gap-2 flex-col items-center">
      <div className="w-full px-2 mt-1">
        <Input
          placeholder="Search for services"
          className="bg-slate-400 shadow-md shadow-blue-200/30"
          icon={<IoSearchOutline />}
          value={searchText}
          onChange={(e) => handleSearchTextChange(e.target.value)}
        />
      </div>

      <Image
        src="/search/sear.png"
        alt=""
        className="shadow-md shadow-black/30"
        width={2400}
        height={800}
      />

      <div className="flex overflow-x-auto gap-2 w-full bg-slate-100 p-2">
        {/* Category Popover */}
        <Popover open={categoryOpen} onOpenChange={setCategoryOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={categoryOpen} className="justify-between">
              {category ? category : "Category"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="z-[1001] w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search category..." />
              <CommandList>
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {categories.map((categoryName) => (
                    <CommandItem
                      key={categoryName}
                      value={categoryName}
                      onSelect={(currentValue) => {
                        handleCategoryChange(currentValue);
                        setCategoryOpen(false);
                      }}
                    >
                      <Check
                        className={cn("mr-2 h-4 w-4", category === categoryName ? "opacity-100" : "opacity-0")}
                      />
                      {categoryName}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* City Popover */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="justify-between">
              {city ? city : "Select City"}
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
                      key={cityObj.name}
                      value={cityObj.name}
                      onSelect={(currentValue) => {
                        handleCityChange(currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn("mr-2 h-4 w-4", city === cityObj.name ? "opacity-100" : "opacity-0")}
                      />
                      {cityObj.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* SubCity Popover */}
        <Popover open={subCityOpen} onOpenChange={setSubCityOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={subCityOpen} className="justify-between">
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
                  {filteredSubCities.map((subCityName) => (
                    <CommandItem
                      key={subCityName}
                      value={subCityName}
                      onSelect={() => {
                        handleSubCityChange(subCityName);
                        setSubCityOpen(false);
                      }}
                    >
                      <Check
                        className={cn("mr-2 h-4 w-4", subCity === subCityName ? "opacity-100 " : "opacity-0")}
                      />
                      {subCityName}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <span className="bg-gradient-to-r from-blue-700 to-lime-600 bg-clip-text text-transparent text-lg font-medium w-full px-3 -mt-1">
        {tag.toLowerCase()}
      </span>
      <Separator className="-mt-1 bg-blue-500/40 " />
      {/* Display shop results */}
      <div className="w-full mt-4">
        {shopResults.length > 0 ? (
          shopResults.map((shop) => (
            <div key={shop._id} className="p-2 mb-4 shadow-black/15 shadow-md flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <div className="w-32 h-40 p-2">
                  <Image alt="" src="/city/agra.png" width={200} height={200} className="rounded-md shadow-md" />
                </div>
                <div>
                  <p>
                    {shop.Area}, {shop.City}
                  </p>
                  <p>Rating: {shop.Rating}</p>
                  <p>Reviews: {shop.Reviews}</p>
                  <p>category: {shop.Category}</p>
                  <span>{shop.Name}</span>
                </div>
              </div>
              <div className="bg-green-200 w-full h-10">button</div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
