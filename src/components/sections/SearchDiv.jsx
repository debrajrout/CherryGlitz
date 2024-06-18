"use client";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-input";
import { useEffect, useState, useRef, useMemo } from "react";
import { grabShop } from "@/actions/Search";
import { PiFlowArrow } from "react-icons/pi";
import { Separator } from "../ui/separator";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Express Yourself with Stunning Tattoos!",
    "Find Your Perfect Piercing Style!",
    "Unleash Your Beauty at Our Parlour!",
    "Elevate Your Look at Our Unisex Salon!",
    "Relax and Rejuvenate with Our Massages!",
    "Escape to Tranquility at Our Spa Centre!",
  ];



  const categorizedPhrases = useMemo(() => ({
    "Tattoo": [
      "Top-rated 3D tattoo artist",
      "Lip piercing services at home",
      "Best tattoo artist in the city",
      "Eyebrow piercing at home",
      "Super realistic tattoo artist",
      "Best piercing studios near me",
      "Tattoo removal and coverup services",
      "Top-rated minimalist tattoo artist",
      "Watercolor tattoo at your location",
      "Geometric tattoo doorstep service",
      "Ear piercing at home",
      "Customized piercing services at home",
      "Custom tattoo designs at home",
      "Nose piercing near me",
      "Professional tattoo artist at doorstep",
      "3D tattoo artist near me",
      "Lip piercing services in the city",
      "Realistic tattoo artist at home",
      "Best piercing parlors near me",
      "Watercolor tattoo artists nearby",
      "Geometric tattoo artist in my city",
      "Custom tattoo designs near me",
      "Professional tattoo artists nearby"
    ],
    "Massage": [
      "Top-rated Swedish massage therapist",
      "Couples massage session at home",
      "Deep tissue massage services at home",
      "Thai massage studio in the city",
      "Best massage therapist in the city",
      "Hot stone massage near me",
      "Relaxation massage at your location",
      "Sports massage therapist for athletes",
      "Chair massage services at events",
      "Reflexology session near me",
      "Prenatal massage at home",
      "Aromatherapy massage with essential oils",
      "Shiatsu massage practitioner nearby",
      "Indian head massage at your location",
      "Professional masseuse for mobile services",
      "Swedish massage therapy near me",
      "Deep tissue massage therapists nearby",
      "Hot stone massage at home",
      "Relaxation massage services in the city",
      "Sports massage therapists near me",
      "Reflexology sessions at your location",
      "Aromatherapy massage therapists nearby",
      "Indian head massage in my city"
    ],
    "Beauty Parlour": [
      "Top-rated beauty parlour near by",
      "Best LED and LASER therapy near by",
      "Microdermabrasion at home",
      "Oxygen facial at home",
      "Best beauty salon in the city",
      "Bikini waxing at home",
      "Eyelash extensions near me",
      "Top-rated Bridal makeup at home",
      "Professional makeup at home",
      "Skin tightening treatment near me",
      "Hair coloring services at home",
      "Brazilian waxing near me",
      "Haircut and styling near me",
      "Nail art at home",
      "Eyebrow threading at home",
      "Full body waxing and polishing at home",
      "Manicure and pedicure at home",
      "Beauty parlors offering LED therapy nearby",
      "Microdermabrasion treatments at home",
      "Best beauty salons nearby",
      "Eyelash extensions in my city",
      "Top-rated Bridal makeup artists near me",
      "Professional makeup artists nearby",
      "Skin tightening treatments at home",
      "Hair coloring services nearby",
      "Brazilian waxing services in the city",
      "Haircut and styling services at home",
      "Nail art services nearby",
      "Eyebrow threading services at home",
      "Full body waxing and polishing services nearby",
      "Manicure and pedicure services at home"
    ],
    "Men’s Salon": [
      "Best UNISEX salon in my city",
      "Haircutting and coloring services NEAR ME",
      "Beard trimming nearby",
      "Best oxygen facial at home",
      "Anti-aging facial treatments nearby",
      "Moustache care services",
      "Top-rated MENS salon nearby",
      "Kids haircutting and grooming services",
      "Men's haircutting and grooming at home",
      "Best hair coloring service",
      "Beard sculpting at home",
      "Polishing services nearby",
      "Therapeutic massages nearby",
      "Eyebrow threading at home",
      "Chest waxing services",
      "Unisex salons in my area",
      "Haircutting and coloring services in the city",
      "Beard trimming services nearby",
      "Oxygen facial treatments at home",
      "Anti-aging facial treatments in the city",
      "Moustache care services nearby",
      "Men's salon services in my area",
      "Kids haircutting and grooming services nearby",
      "Men's haircutting and grooming services at home",
      "Best hair coloring services nearby",
      "Beard sculpting services at home",
      "Polishing services in the city",
      "Therapeutic massages in my area",
      "Eyebrow threading services nearby",
      "Chest waxing services in the city"
    ]
  }), []);

  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const router = useRouter();
  const [query] = useDebounce(text, 500);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const fetchData = async () => {
      if (!query) {
        setSuggestions([]);
        setResults([]);
        return;
      }

      // Filter and limit suggestions
      const allPhrases = Object.values(categorizedPhrases).flat();
      const filteredPhrases = allPhrases
        .filter((phrase) => phrase.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 10);
      setSuggestions(filteredPhrases);

      try {
        const result = await grabShop(query);
        setResults(result);
        console.log("Results:", result);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };

    fetchData();
  }, [query, categorizedPhrases]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSuggestionClick = (phrase) => {
    // Determine the category of the phrase
    let selectedCategory = null;
    for (const [category, phrases] of Object.entries(categorizedPhrases)) {
      if (phrases.includes(phrase)) {
        selectedCategory = category;
        break;
      }
    }

    if (selectedCategory) {
      router.push(`/search?search=${phrase}&category=${selectedCategory}`);
    } else {
      router.push(`/search?search=${phrase}`);
    }
  };

  const handleShopClick = (shop) => {
    const { _id, City, Area, Category, Category2 } = shop;
    router.push(`/search?uid=${_id}&city=${City}&area=${Area}&category=${Category}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      router.push('/');
    } else {
      router.push(`/search?search=${query}`);
    }
  };

  const SuggestionList = ({ suggestions }) => (
    <div className="mt-2 p-2 flex flex-col gap-1 border rounded shadow-lg">
      {suggestions.map((phrase, index) => (
        <div
          key={index}
          className="px-2 py-1 cursor-pointer bg-white rounded-md flex flex-row items-center justify-between"
          onClick={() => handleSuggestionClick(phrase)}
        >
          <span className="text-sm">{phrase}</span>
          <PiFlowArrow className="mr-3 mt-1 text-2xl text-blue-500" />
        </div>
      ))}
    </div>
  );

  const ShopList = ({ results }) => (
    <div className="p-2">
      {results.map((shop) => (
        <div
          key={shop._id}
          className="p-4 mb-2 border rounded shadow-sm bg-white cursor-pointer"
          onClick={() => handleShopClick(shop)}
        >
          <h3 className="text-sm font-medium text-black">{shop.Name}</h3>
          <Separator className="bg-black/30" />
          <p className="text-gray-600">{shop.Category} - {shop.Category2}</p>
          <p className="text-gray-500">{shop.Area} - {shop.City}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-[95%]">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        value={text}
      />
      {suggestions.length > 0 && <SuggestionList suggestions={suggestions} />}
      {results.length > 0 && <ShopList results={results} />}
    </div>
  );
}
