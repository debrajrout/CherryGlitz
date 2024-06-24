"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { filterShops } from "@/actions/fetchAll";
import ShopListing from "@/components/ShopListing";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
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
import { Separator } from "@/components/ui/separator";
import { matchSorter } from "match-sorter";
import { fetchCitiesAndAreas, fetchCategories } from "@/actions/fetchAll";
import Footer from "@/components/footer/Footer";
import { Check, ChevronsUpDown } from "lucide-react";
import { HairCut } from "@/components/special-components/Scroll";
import { Spa } from "@/components/special-components/Scroll";
import { Tattoo } from "@/components/special-components/Scroll";
import { Beauty } from "@/components/special-components/Scroll";

export default function Page() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");
  const [subCityOpen, setSubCityOpen] = useState(false);
  const [subCity, setSubCity] = useState("");
  const [searchText, setSearchText] = useState("");
  const [tag, setTag] = useState("");
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shops, setShops] = useState([]);
  const [page, setPage] = useState(1);

  const router = useRouter();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const citiesResponse = await fetchCitiesAndAreas();
        setCities(citiesResponse);

        const categoriesResponse = await fetchCategories();
        setCategories(categoriesResponse);

        const { category, city, subCity, search } = parseQueryString();
        setCategory(category);
        setCity(city);
        setSubCity(subCity);
        setSearchText(search);
        setTag(search);

        fetchShopsData(category, city, subCity, 1);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const parseQueryString = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      category: params.get("category") || "",
      city: params.get("city") || "",
      subCity: params.get("subCity") || "",
      search: params.get("search") || "",
    };
  };

  const fetchShopsData = async (category, city, subCity, page) => {
    try {
      const results = await filterShops(category, city, subCity, page);
      setShops(results);
      console.log("Shops fetched:", results);
    } catch (error) {
      console.error("Error fetching shops:", error);
    }
  };

  const handleNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchShopsData(category, city, subCity, nextPage);
  };

  const handlePrevious = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchShopsData(category, city, subCity, prevPage);
    }
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    fetchShopsData(value, city, subCity, 1);
  };

  const handleCityChange = (value) => {
    setCity(value);
    setSubCity(""); // Reset subCity when city changes
    fetchShopsData(category, value, "", 1);
  };

  const handleSubCityChange = (value) => {
    setSubCity(value);
    fetchShopsData(category, city, value, 1);
  };

  const handleSearchTextChange = (value) => {
    setSearchText(value);
    // Since the searchText is not used in filterShops, we do not call fetchShopsData here.
  };

  const filteredSubCities = city
    ? matchSorter(
      cities.find((c) => c.name === city)?.areas || [],
      subCity,
      { threshold: matchSorter.rankings.CONTAINS }
    )
    : [];

  return (
    <div className="mt-[65px] flex w-full  flex-col items-center">
      <div className="w-full px-2 my-2">
        <Input
          placeholder="Search for services"
          className="bg-slate-400 shadow-md shadow-blue-200/30"
          icon={<IoSearchOutline />}
          value={searchText}
          onChange={(e) => handleSearchTextChange(e.target.value)}
        />
      </div>

      {category === "Beauty Parlour" && <Beauty />}
      {category === "Spa" && <Spa />}
      {category === "Tattoo" && <Tattoo />}
      {category === "Men’s Salon" && <HairCut />}
      {category === "Massage" && <Spa />}

      <div className="flex overflow-x-auto gap-2 w-full bg-slate-100 p-2">
        <Popover open={categoryOpen} onOpenChange={setCategoryOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={categoryOpen}
              className="justify-between"
            >
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
                        className={cn(
                          "mr-2 h-4 w-4",
                          category === categoryName
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {categoryName}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="justify-between"
            >
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
                        className={cn(
                          "mr-2 h-4 w-4",
                          city === cityObj.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {cityObj.name}
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
              className="justify-between"
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
                        className={cn(
                          "mr-2 h-4 w-4",
                          subCity === subCityName ? "opacity-100 " : "opacity-0"
                        )}
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

      <Separator className="mt-1 bg-blue-500/40" />
      <span className="bg-gradient-to-r from-blue-700 to-lime-600 bg-clip-text text-transparent text-lg font-medium w-full px-2 -mb-3">
        {tag.toLowerCase()}
      </span>




      <ShopListing shopResults={shops} />

      <div className=" mb-1 flex w-full flex-row items-center justify-end gap-6">
        <Button variant="outline" onClick={handlePrevious} disabled={page === 1}>
          <IoIosArrowBack className="mr-2" />
          Previous
        </Button>
        <Button variant="ghost" onClick={handleNext}>
          Next
          <IoIosArrowForward className="ml-2" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}
