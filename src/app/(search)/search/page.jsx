"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { filterShops, fetchCitiesAndAreas, fetchCategories } from "@/actions/fetchAll";
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { matchSorter } from "match-sorter";
import Footer from "@/components/footer/Footer";
import { Check, ChevronsUpDown } from "lucide-react";
import { HairCut } from "@/components/special-components/Scroll";
import { Spa } from "@/components/special-components/Scroll";
import { Tattoo } from "@/components/special-components/Scroll";
import { Beauty } from "@/components/special-components/Scroll";
import SelectSection from "@/components/sections/SelectSection";
import { FaStar } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { TbCheck, TbClockCheck, TbSortAscendingShapes, TbX } from "react-icons/tb";

export default function Page() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [subCityOpen, setSubCityOpen] = useState(false);
  const [subCity, setSubCity] = useState("");
  const [searchText, setSearchText] = useState("");
  const [tag, setTag] = useState("");
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shops, setShops] = useState([]);
  const [page, setPage] = useState(1);
  const [showSearch, setShowSearch] = useState(true);
  const [shopFixed, setShopFixed] = useState(false);
  const [starRatingOpen, setStarRatingOpen] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [openNow, setOpenNow] = useState(false);
  const [verified, setVerified] = useState(false);


  const handleVerifiedToggle = () => {
    setVerified(!verified);
  };

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

        fetchShopsData(category, city, subCity, starRating, 1);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowSearch(false);
        setShopFixed(true);
      } else {
        setShowSearch(true);
        setShopFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  const fetchShopsData = async (category, city, subCity, starRating, page) => {
    try {
      const results = await filterShops(category, city, subCity, starRating, page);
      setShops(results);
      console.log("Shops fetched:", results);
      console.log("Star Rating:", starRating);
    } catch (error) {
      console.error("Error fetching shops:", error);
    }
  };

  const handleNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchShopsData(category, city, subCity, starRating, nextPage);
  };

  const handlePrevious = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchShopsData(category, city, subCity, starRating, prevPage);
    }
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    fetchShopsData(value, city, subCity, starRating, 1);
  };

  const handleCityChange = (value) => {
    setCity(value);
    setSubCity(""); // Reset subCity when city changes
    fetchShopsData(category, value, "", starRating, 1);
  };

  const handleSubCityChange = (value) => {
    setSubCity(value);
    fetchShopsData(category, city, value, starRating, 1);
  };

  const handleStarRatingChange = (value) => {
    setStarRating(value);
    fetchShopsData(category, city, subCity, value, 1);
  };
  const handleOpenNowToggle = () => {
    setOpenNow(!openNow);
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
    <div className="mt-[50px] flex w-full flex-col items-center">
      <div className={cn("transition-transform duration-300 w-full", showSearch ? "translate-y-0" : "-translate-y-full")}>
        <div className="w-full px-2 mt-2">
          <Input
            placeholder="Search for services"
            className="bg-slate-400 shadow-md shadow-blue-200/30"
            icon={<IoSearchOutline />}
            value={searchText}
            onChange={(e) => handleSearchTextChange(e.target.value)}
          />
        </div>
      </div>
      <SelectSection />
      <div className={cn("transition-transform duration-300 w-full z-10 bg-white", shopFixed ? "fixed " : "")}>
        {category === "Beauty Parlour" && <Beauty />}
        {category === "Spa" && <Spa />}
        {category === "Tattoo" && <Tattoo />}
        {category === "Men’s Salon" && <HairCut />}
        {category === "Massage" && <Spa />}

        <div className="flex items-center  overflow-x-auto gap-2 w-full bg-slate-100 p-1">
          <Drawer>
            <DrawerTrigger className=" p-1.5  flex justify-center items-center bg-white rounded-md shadow-sm shadow-black/30"><TbSortAscendingShapes className="text-2xl text-blue-900" /></DrawerTrigger>
            <DrawerContent className="bg-slate-200">
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

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

          <Popover open={starRatingOpen} onOpenChange={setStarRatingOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={starRatingOpen}
                className="justify-between"
              >
                {starRating > 0 ? (
                  <>
                    <FaStar className="text-yellow-400" /> {/* Adjust styles as needed */}
                    <span className="ml-1">{`Above ${starRating} Star`}</span>
                  </>
                ) : (
                  <>
                    <FaStar className="text-blue-600" /> {/* Adjust styles as needed */}
                    <span className="ml-1">Rating</span>
                  </>
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="z-[1001] w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search star rating..." />
                <CommandList>
                  <CommandEmpty>No star rating found.</CommandEmpty>
                  <CommandGroup>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <CommandItem
                        key={rating}
                        value={rating.toString()}
                        onSelect={(currentValue) => {
                          handleStarRatingChange(parseInt(currentValue));
                          setStarRatingOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            starRating === rating ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {`Above ${rating} Star`}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Button
            variant={openNow ? "solid" : "outline"}
            onClick={handleOpenNowToggle}
            className={`flex items-center space-x-2 ${openNow
              ? 'bg-blue-200 text-blue-800 border-blue-400'
              : 'bg-transparent text-blue-600'
              } border-2 rounded-lg  transition-all duration-300`}
          >
            {openNow ? (
              <TbClockCheck className="text-pink-700" />
            ) : (
              <LuClock className="text-black" />
            )}
            <span className="ml-1">{openNow ? 'Open Now' : 'Open'}</span>
          </Button>
          <Button
            variant={verified ? "solid" : "outline"}
            onClick={handleVerifiedToggle}
            className={`flex items-center space-x-2 ${verified
              ? 'bg-green-200 text-green-800 border-green-400'
              : 'bg-transparent text-green-600 '
              } border-2 rounded-lg transition-all duration-300`}
          >
            {verified ? (
              <TbCheck className="text-green-800" />
            ) : (
              <TbCheck className="text-blue-500" />
            )}
            <span className="ml-1">{verified ? 'CZ Verified' : 'Verified'}</span>
          </Button>
        </div>
      </div>


      <span className="bg-gradient-to-r from-blue-700 to-lime-600 bg-clip-text text-transparent text-lg font-medium w-full px-2 -mb-3">
        {tag.toLowerCase()}
      </span>

      <ShopListing shopResults={shops} />

      <div className="mb-1 flex w-full flex-row items-center justify-end gap-6">
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
