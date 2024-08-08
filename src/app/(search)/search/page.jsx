"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  filterShops,
  fetchCitiesAndAreas,
  fetchCategories,
} from "@/actions/fetchAll";
import ShopListing from "@/components/ShopListing";
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
import { FaCrown, FaCut, FaSpa, FaStar, FaTabletAlt, FaWarehouse } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import {
  TbCheck,
  TbClockCheck,
  TbSortAscendingShapes,
  TbStar,
  TbX,
} from "react-icons/tb";
import { grabShop } from "@/actions/Search";
import { GiHummingbird } from "react-icons/gi";
import { Slider } from "@/components/ui/slider";
import debounce from "lodash.debounce";
import SearchbarResult from "@/components/SearchbarResult";
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
  const [starRating, setStarRating] = useState(0);
  const [openNow, setOpenNow] = useState(false);
  const [todayDeal, setTodayDeal] = useState(false);
  const [verified, setVerified] = useState(false);
  const [responseTime, setResponseTime] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [priceRange, setPriceRange] = useState([500]);
  const [starRatingOpen, setStarRatingOpen] = useState(false);

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
      `${window.location.pathname}?${params.toString()}`
    );
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [citiesResponse, categoriesResponse] = await Promise.all([
          fetchCitiesAndAreas(),
          fetchCategories(),
        ]);
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
        const latitude = parseFloat(params.get("latitude") || "0");
        const longitude = parseFloat(params.get("longitude") || "0");
        setCities(citiesResponse);
        setCategories(categoriesResponse);
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
        setLatitude(latitude);
        setLongitude(longitude);
        fetchShopsData(category, city, subCity, starRating, responseTime, latitude, longitude, 1);
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
    latitude,
    longitude,
    page
  ) => {
    try {
      const results = await filterShops(
        category,
        city,
        subCity,
        starRating,
        responseTime,
        latitude,
        longitude,
        page
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
    fetchShopsData(category, city, subCity, starRating, responseTime, latitude, longitude, nextPage);
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
        latitude,
        longitude,
        prevPage
      );
    }
  };

  const handleCategoryChange = useCallback((value) => {
    setCategory(value);
    updateQueryString("category", value);
    fetchShopsData(
      value,
      city,
      subCity,
      starRating,
      responseTime,
      latitude,
      longitude,
      1
    );
  }, [city, subCity, starRating, responseTime, latitude, longitude]);

  const handleCityChange = (value) => {
    setCity(value);
    setSubCity(""); // Reset subCity when city changes
    fetchShopsData(category, value, "", starRating, responseTime, latitude, longitude, 1);
  };

  const handleSubCityChange = (value) => {
    setSubCity(value);
    fetchShopsData(category, city, value, starRating, responseTime, latitude, longitude, 1);
  };

  const handleStarRatingChange = (value) => {
    setStarRating(value);
    updateQueryString("starRating", value);
    fetchShopsData(category, city, subCity, value, responseTime, latitude, longitude, 1);
  };

  const handleOpenNowToggle = () => {
    setOpenNow(!openNow);
    updateQueryString("openNow", !openNow ? "true" : "");
  };

  const handleQuickResponseToggle = () => {
    setResponseTime(!responseTime);
    updateQueryString("responseTime", !responseTime ? "true" : "");
    fetchShopsData(category, city, subCity, starRating, !responseTime, latitude, longitude, 1);
  };

  const handleTodayDealToggle = () => {
    setTodayDeal(!todayDeal);
    updateQueryString("todayDeal", !todayDeal ? "true" : "");
  };

  const handleSearchTextChange = debounce((value) => {
    setSearchText(value);
    fetchSuggestions(value);
  }, 300);

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

  const filteredSubCities = useMemo(() => {
    return city
      ? matchSorter(cities.find((c) => c.name === city)?.areas || [], subCity, {
        threshold: matchSorter.rankings.CONTAINS,
      })
      : [];
  }, [city, subCity, cities]);

  const handleLocationUpdate = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
    updateQueryString("latitude", latitude);
    updateQueryString("longitude", longitude);
  };

  return (
    <div className="mt-[50px] flex w-full flex-col items-center">
      <div
        className={cn(
          "w-full transition-transform duration-300",
          showSearch ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <SearchbarResult />
      </div>
      <SelectSection onLocationUpdate={handleLocationUpdate} />
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
              <div className="w-full flex flex-col justify-start gap-3">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-800 mb-4">Top Categories</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className="inline-flex items-center gap-2 rounded-lg border border-pink-600 px-5 py-2.5 text-sm font-semibold text-pink-600 bg-white transition hover:scale-105 hover:shadow-lg focus:outline-none active:bg-pink-500 active:text-white"
                      onClick={() => handleCategoryChange('Beauty Parlour')}
                    >
                      <FaSpa className="text-lg text-pink-600" />
                      Beauty Parlour
                    </button>
                    <button
                      className="inline-flex items-center gap-2 rounded-lg border border-teal-600 px-5 py-2.5 text-sm font-semibold text-teal-600 bg-white transition hover:scale-105 hover:shadow-lg focus:outline-none active:bg-teal-500 active:text-white"
                      onClick={() => handleCategoryChange('Spa')}
                    >
                      <GiHummingbird className="text-lg text-teal-600" />
                      Spa
                    </button>
                    <button
                      className="inline-flex items-center gap-2 rounded-lg border border-purple-600 px-5 py-2.5 text-sm font-semibold text-purple-600 bg-white transition hover:scale-105 hover:shadow-lg focus:outline-none active:bg-purple-500 active:text-white"
                      onClick={() => handleCategoryChange('Tattoo')}
                    >
                      <FaTabletAlt className="text-lg text-purple-600" />
                      Tattoo
                    </button>
                    <button
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-white transition hover:scale-105 hover:shadow-lg focus:outline-none active:bg-blue-500 active:text-white"
                      onClick={() => handleCategoryChange('Men’s Salon')}
                    >
                      <FaCut className="text-lg text-blue-600" />
                      Men’s Salon
                    </button>
                    <button
                      className="inline-flex items-center gap-2 rounded-lg border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-600 bg-white transition hover:scale-105 hover:shadow-lg focus:outline-none active:bg-green-500 active:text-white"
                      onClick={() => handleCategoryChange('Massage')}
                    >
                      <FaWarehouse className="text-lg text-green-600" />
                      Massage
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-800 mb-4">Sort By</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg focus:outline-none active:text-white ${openNow ? 'border-blue-400 bg-blue-200 text-blue-800' : 'border-green-600 text-green-600 bg-white active:bg-green-500'
                        }`}
                      onClick={handleOpenNowToggle}
                    >
                      {openNow ? <TbClockCheck className="text-pink-700" /> : <LuClock className="text-black" />}
                      <span className="ml-1">{openNow ? 'Open Now' : 'Open'}</span>
                    </button>
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg focus:outline-none active:text-white ${responseTime ? 'border-green-700 bg-green-200 text-green-600' : 'border-red-600 text-red-600 bg-white active:bg-red-500'
                        }`}
                      onClick={handleQuickResponseToggle}
                    >
                      <TbClockCheck className={responseTime ? 'text-yellow-600' : 'text-green-600'} />
                      <span className="ml-1">{responseTime ? 'Quick response' : 'Quick response'}</span>
                    </button>
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg focus:outline-none active:text-white ${verified ? 'border-green-400 bg-green-200 text-green-800' : 'border-blue-600 text-blue-600 bg-white active:bg-blue-500'
                        }`}
                      onClick={handleVerifiedToggle}
                    >
                      <TbCheck className={verified ? 'text-green-800' : 'text-blue-500'} />
                      <span className="ml-1">{verified ? 'CZ Verified' : 'Verified'}</span>
                    </button>
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg focus:outline-none active:text-white ${todayDeal ? 'border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'border-purple-600 text-purple-600 bg-white active:bg-purple-500'
                        } ${todayDeal ? 'scale-105' : 'scale-100'}`}
                      onClick={handleTodayDealToggle}
                    >
                      <TbStar className={todayDeal ? 'text-white' : 'text-blue-600'} />
                      <span className="ml-1">{todayDeal ? 'Today’s Deal' : 'Deal of the Day'}</span>
                    </button>
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border border-yellow-600 px-5 py-2.5 text-sm font-semibold text-yellow-600 bg-white transition hover:scale-105 hover:shadow-lg focus:outline-none active:bg-yellow-500 active:text-white`}

                    >
                      <FaCrown className="text-lg text-yellow-600" />
                      Luxury
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-800 mb-4">Rating</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg focus:outline-none active:text-white ${starRating === 0 ? 'border-gray-600 text-gray-600 bg-white active:bg-gray-500' : 'border-gray-600 text-gray-600 bg-white'
                        }`}
                      onClick={() => handleStarRatingChange(0)}
                    >
                      <FaStar className="text-lg text-gray-600" />
                      All
                    </button>
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg focus:outline-none active:text-white ${starRating === 5 ? 'border-yellow-600 text-yellow-600 bg-white active:bg-yellow-500' : 'border-yellow-600 text-yellow-600 bg-white'
                        }`}
                      onClick={() => handleStarRatingChange(5)}
                    >
                      <FaStar className="text-lg text-yellow-600" />
                      5 Star
                    </button>
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg focus:outline-none active:text-white ${starRating === 4 ? 'border-orange-600 text-orange-600 bg-white active:bg-orange-500' : 'border-orange-600 text-orange-600 bg-white'
                        }`}
                      onClick={() => handleStarRatingChange(4)}
                    >
                      <FaStar className="text-lg text-orange-600" />
                      4 Star +
                    </button>
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg focus:outline-none active:text-white ${starRating === 3 ? 'border-green-600 text-green-600 bg-white active:bg-green-500' : 'border-green-600 text-green-600 bg-white'
                        }`}
                      onClick={() => handleStarRatingChange(3)}
                    >
                      <FaStar className="text-lg text-green-600" />
                      3 Star +
                    </button>
                    <button
                      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg focus:outline-none active:text-white ${starRating === 2 ? 'border-blue-600 text-blue-600 bg-white active:bg-blue-500' : 'border-blue-600 text-blue-600 bg-white'
                        }`}
                      onClick={() => handleStarRatingChange(2)}
                    >
                      <FaStar className="text-lg text-blue-600" />
                      2 Star +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xl font-bold text-gray-800 mb-4">Price Range</span>
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-lg font-semibold text-indigo-600">
                      INR {priceRange[0]}
                    </span>
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    step={50}
                    className="w-full"
                  />
                </div>
              </div>
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
              <TbClockCheck className="text-yellow-600" />
            ) : (
              <TbClockCheck className="text-green-600" />
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