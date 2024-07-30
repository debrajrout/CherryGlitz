"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  filterShops,
  fetchCitiesAndAreas,
  fetchCategories,
} from "@/actions/fetchAll";
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
import { Separator } from "@/components/ui/separator";
import { BsFillLightningChargeFill, BsLightningCharge } from "react-icons/bs";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import {
  TbCheck,
  TbClockCheck,
  TbSortAscendingShapes,
  TbStar,
  TbX,
} from "react-icons/tb";
import { grabShop } from "@/actions/Search";

export default function Page() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
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
  const [todayDeal, setTodayDeal] = useState(false);
  const [verified, setVerified] = useState(false);
  const [responseTime, setResponseTime] = useState(false);

  const updateQueryString = (key, value) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const citiesResponse = await fetchCitiesAndAreas();
        setCities(citiesResponse);
        const categoriesResponse = await fetchCategories();
        setCategories(categoriesResponse);
        const params = new URLSearchParams(window.location.search);
        const category = params.get("category") || "";
        const city = params.get("city") || "";
        const subCity = params.get("subCity") || "";
        const search = params.get("search") || "";
        const starRating = parseInt(params.get("starRating") || "0");
        const responseTime = params.get("responseTime") === "true";
        const openNow = params.get("openNow") === "true";
        const verified = params.get("verified") === "true";
        const todayDeal = params.get("todayDeal") === "true";
        setCategory(category);
        setCity(city);
        setSubCity(subCity);
        setSearchText(search);
        setTag(search);
        setStarRating(starRating);
        setResponseTime(responseTime);
        setOpenNow(openNow);
        setVerified(verified);
        setTodayDeal(todayDeal);
        fetchShopsData(category, city, subCity, starRating, responseTime, 1);
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

  const fetchShopsData = async (
    category,
    city,
    subCity,
    starRating,
    responseTime,
    page,
  ) => {
    try {
      const results = await filterShops(
        category,
        city,
        subCity,
        starRating,
        responseTime,
        page,
      );
      setShops(results);
      console.log("Shops fetched:", results);
      console.log("Star Rating:", starRating, "Response Time:", responseTime);
    } catch (error) {
      console.error("Error fetching shops:", error);
    }
  };

  const handleNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchShopsData(category, city, subCity, starRating, responseTime, nextPage);
  };

  const handlePrevious = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchShopsData(
        category,
        city,
        subCity,
        starRating,
        responseTime,
        prevPage,
      );
    }
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    updateQueryString("category", value);
    fetchShopsData(value, city, subCity, starRating, responseTime, 1);
  };

  const handleCityChange = (value) => {
    setCity(value);
    setSubCity(""); // Reset subCity when city changes
    fetchShopsData(category, value, "", starRating, responseTime, 1);
  };

  const handleSubCityChange = (value) => {
    setSubCity(value);
    fetchShopsData(category, city, value, starRating, responseTime, 1);
  };

  const handleStarRatingChange = (value) => {
    setStarRating(value);
    updateQueryString("starRating", value);
    fetchShopsData(category, city, subCity, value, responseTime, 1);
  };

  const handleOpenNowToggle = () => {
    setOpenNow(!openNow);
    updateQueryString("openNow", !openNow ? "true" : "");
  };

  const handleQuickResponseToggle = () => {
    setResponseTime(!responseTime);
    updateQueryString("responseTime", !responseTime ? "true" : "");
    fetchShopsData(value, city, subCity, starRating, responseTime, 1);
  };

  const handleTodayDealToggle = () => {
    setTodayDeal(!todayDeal);
    updateQueryString("todayDeal", !todayDeal ? "true" : "");
  };

  const handleSearchTextChange = (value) => {
    setSearchText(value);
    fetchSuggestions(value);
  };

  const handleVerifiedToggle = () => {
    setVerified(!verified);
    updateQueryString("verified", !verified ? "true" : "");
  };

  const fetchSuggestions = async (query) => {
    if (query.trim() === "") {
      // setSuggestions([]);
      return;
    }

    try {
      const response = await grabShop(query);
      setShops(response);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const filteredSubCities = city
    ? matchSorter(cities.find((c) => c.name === city)?.areas || [], subCity, {
      threshold: matchSorter.rankings.CONTAINS,
    })
    : [];

  return (
    <div className="mt-[50px] flex w-full flex-col items-center">
      <div
        className={cn(
          "w-full transition-transform duration-300",
          showSearch ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="mt-2 w-full px-2">
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
      <div
        className={cn(
          "z-10 w-full bg-white transition-transform duration-300",
          shopFixed ? "fixed " : "",
        )}
      >
        {category === "Beauty Parlour" && <Beauty />}
        {category === "Spa" && <Spa />}
        {category === "Tattoo" && <Tattoo />}
        {category === "Men’s Salon" && <HairCut />}
        {category === "Massage" && <Spa />}

        <div className="flex w-full  items-center gap-2 overflow-x-auto bg-slate-100 p-1">
          <Drawer>
            <DrawerTrigger className="flex items-center justify-center rounded-lg bg-white p-2 shadow-md transition duration-300 hover:bg-gray-100">
              <TbSortAscendingShapes className="text-2xl text-blue-800" />
            </DrawerTrigger>
            <DrawerContent className="rounded-lg bg-gray-50 p-4 shadow-lg">
              <DrawerHeader>
                <DrawerTitle className="text-lg font-semibold text-gray-900">
                  Filter Options
                </DrawerTitle>
                <DrawerDescription className="text-sm text-gray-600">
                  Choose your preferences below.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className=" mt-4">
                <DrawerClose>
                  <Button
                    onClick={() => {
                      /* Add logic to handle submit */
                    }}
                  >
                    Submit
                  </Button>
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
                              : "opacity-0",
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
                    <FaStar className="text-yellow-400" />{" "}
                    {/* Adjust styles as needed */}
                    <span className="ml-1">{`Above ${starRating} Star`}</span>
                  </>
                ) : (
                  <>
                    <FaStar className="text-blue-600" />{" "}
                    {/* Adjust styles as needed */}
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
                            starRating === rating ? "opacity-100" : "opacity-0",
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
              ? "border-blue-400 bg-blue-200 text-blue-800"
              : "bg-transparent text-blue-600"
              } rounded-lg border-2  transition-all duration-300`}
          >
            {openNow ? (
              <TbClockCheck className="text-pink-700" />
            ) : (
              <LuClock className="text-black" />
            )}
            <span className="ml-1">{openNow ? "Open Now" : "Open"}</span>
          </Button>

          <Button
            variant={responseTime ? "solid" : "outline"}
            onClick={handleQuickResponseToggle}
            className={`flex items-center space-x-2 ${responseTime
              ? "border-green-700 bg-green-200 text-green-600"
              : "bg-transparent text-blue-600"
              } rounded-lg border-2  transition-all duration-300`}
          >
            {responseTime ? (
              <BsLightningCharge className="text-yellow-600" />
            ) : (
              <BsFillLightningChargeFill className="text-green-600" />
            )}
            <span className="ml-1">
              {responseTime ? "Quick response" : "Quick response"}
            </span>
          </Button>

          <Button
            variant={verified ? "solid" : "outline"}
            onClick={handleVerifiedToggle}
            className={`flex items-center space-x-2 ${verified
              ? "border-green-400 bg-green-200 text-green-800"
              : "bg-transparent text-green-600 "
              } rounded-lg border-2 transition-all duration-300`}
          >
            {verified ? (
              <TbCheck className="text-green-800" />
            ) : (
              <TbCheck className="text-blue-500" />
            )}
            <span className="ml-1">
              {verified ? "CZ Verified" : "Verified"}
            </span>
          </Button>

          <Button
            variant={todayDeal ? "solid" : "outline"}
            onClick={handleTodayDealToggle}
            className={`flex items-center space-x-2 ${todayDeal
              ? "border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-transparent text-blue-600"
              } transform rounded-lg border-2 transition-all duration-300 ${todayDeal ? "scale-105" : "scale-100"}`}
          >
            {todayDeal ? (
              <TbStar className="text-white" />
            ) : (
              <TbStar className="text-blue-600" />
            )}
            <span className="ml-1 ">
              {todayDeal ? "Today’s Deal" : "Deal of the Day"}
            </span>
          </Button>
        </div>
      </div>

      <span className="-mb-3 w-full bg-gradient-to-r from-blue-700 to-lime-600 bg-clip-text px-2 text-lg font-medium text-transparent">
        {tag.toLowerCase()}
      </span>
      <Separator className=" mt-3.5 bg-black/30" />

      <ShopListing shopResults={shops} />

      <div className="mb-1 flex w-full flex-row items-center justify-end gap-6">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={page === 1}
        >
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
