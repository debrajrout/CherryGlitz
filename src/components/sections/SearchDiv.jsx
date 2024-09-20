"use client";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-input";
import { useEffect, useState, useMemo } from "react";
import { PiFlowArrow } from "react-icons/pi";
import useLocationStore from "@/store/useLocationStore";
import { motion } from 'framer-motion';

export function PlaceholdersAndVanishInputDemo() {
  const { nearestCity } = useLocationStore();
  console.log("City Name testing 2:", nearestCity);

  const cityName = nearestCity || "Your City"; // Fallback to "Your City" if no nearest city is found
  console.log("City Name testing 1:", cityName);


  const placeholders = useMemo(() => {
    return nearestCity ? [
      `Get the Perfect Look at the Best Beauty Salon in ${cityName}`,
      `Experience the Top-Rated Tattoo Artists in ${cityName}`,
      `Relax and Rejuvenate with Premium Spa Treatments in ${cityName}`,
      `Transform Your Style at the Best Unisex Salon in ${cityName}`,
      `Indulge in the Best Massage Services in ${cityName}`,
      `Find Your Unique Style with Custom Tattoo Designs in ${cityName}`,
    ] : [
      "Get the Perfect Look at the Best Beauty Salon Near You",
      "Experience the Top-Rated Tattoo Artists in Your City",
      "Relax and Rejuvenate with Premium Spa Treatments",
      "Transform Your Style at the Best Unisex Salon",
      "Indulge in the Best Massage Services Nearby",
      "Find Your Unique Style with Custom Tattoo Designs",
    ];
  }, [nearestCity, cityName]);

  // Memoize categorizedPhrases to avoid recalculating on each render
  const categorizedPhrases = useMemo(() => {
    return nearestCity ? {
      "Tattoo": [
        `Best tattoo artist in ${cityName}`,
        `Top-rated 3D tattoo artist in ${cityName}`,
        `Tattoo removal services in ${cityName}`,
        `Custom tattoo designs in ${cityName}`,
        `Professional piercing services in ${cityName}`,
        `Nose and ear piercing in ${cityName}`,
        `Watercolor tattoo artist in ${cityName}`,
        `Realistic tattoo artist in ${cityName}`,
        `Minimalist tattoo designs in ${cityName}`,
        `Tattoo studios with highest reviews in ${cityName}`,
        `Best piercing studios in ${cityName}`,
        `Professional tattoo artists in ${cityName}`,
        `Customized piercing services in ${cityName}`,
        `Geometric tattoo service in ${cityName}`,
        `Super realistic tattoo artist in ${cityName}`
      ],
      "Massage": [
        `Best massage therapist in ${cityName}`,
        `Deep tissue massage in ${cityName}`,
        `Thai massage for stress relief in ${cityName}`,
        `Hot stone massage in ${cityName}`,
        `Aromatherapy massage services in ${cityName}`,
        `Couples massage in ${cityName}`,
        `Sports massage therapist for athletes in ${cityName}`,
        `Prenatal massage in ${cityName}`,
        `Reflexology massage in ${cityName}`,
        `Swedish massage for relaxation in ${cityName}`,
        `Relaxation massage in ${cityName}`,
        `Indian head massage in ${cityName}`,
        `Shiatsu massage practitioner in ${cityName}`,
        `Professional masseuse services in ${cityName}`,
        `Chair massage services at events in ${cityName}`
      ],
      "Beauty Parlour": [
        `Top beauty parlour in ${cityName}`,
        `LED and LASER therapy services in ${cityName}`,
        `Best bridal makeup artist in ${cityName}`,
        `Microdermabrasion treatment in ${cityName}`,
        `Eyelash extensions in ${cityName}`,
        `Full body waxing and polishing services in ${cityName}`,
        `Hair coloring services in ${cityName}`,
        `Oxygen facial treatment in ${cityName}`,
        `Professional nail art services in ${cityName}`,
        `Brazilian waxing services in ${cityName}`,
        `Best beauty salons in ${cityName}`,
        `Haircut and styling in ${cityName}`,
        `Nail art in ${cityName}`,
        `Eyelash extensions in ${cityName}`,
        `Bridal makeup artists in ${cityName}`
      ],
      "Men’s Salon": [
        `Top unisex salon in ${cityName}`,
        `Men's haircut and grooming services in ${cityName}`,
        `Best beard trimming and sculpting in ${cityName}`,
        `Kids haircut services in ${cityName}`,
        `Oxygen facial for men in ${cityName}`,
        `Hair coloring services for men in ${cityName}`,
        `Chest and back waxing services in ${cityName}`,
        `Therapeutic massages for men in ${cityName}`,
        `Eyebrow threading and shaping for men in ${cityName}`,
        `Anti-aging facial treatments for men in ${cityName}`,
        `Best haircuts for men in ${cityName}`,
        `Moustache care services in ${cityName}`,
        `Men's grooming packages in ${cityName}`,
        `Beard trimming services in ${cityName}`,
        `Polishing services in ${cityName}`
      ]
    } : {
      "Tattoo": [
        "Best tattoo artist near me",
        "Top-rated 3D tattoo artist",
        "Tattoo removal services nearby",
        "Custom tattoo designs in my city",
        "Professional piercing services at home",
        "Nose and ear piercing near me",
        "Watercolor tattoo artist at your location",
        "Realistic tattoo artist near me",
        "Minimalist tattoo designs at your doorstep",
        "Tattoo studios with highest reviews near me",
        "Best piercing studios near me",
        "Professional tattoo artists nearby",
        "Customized piercing services at home",
        "Geometric tattoo doorstep service",
        "Super realistic tattoo artist near me"
      ],
      "Massage": [
        "Best massage therapist in my area",
        "Deep tissue massage near me",
        "Thai massage for stress relief",
        "Hot stone massage at home",
        "Aromatherapy massage services near me",
        "Couples massage in the city",
        "Sports massage therapist for athletes",
        "Prenatal massage at home",
        "Reflexology massage nearby",
        "Swedish massage for relaxation",
        "Relaxation massage at your location",
        "Indian head massage in my city",
        "Shiatsu massage practitioner nearby",
        "Professional masseuse for mobile services",
        "Chair massage services at events"
      ],
      "Beauty Parlour": [
        "Top beauty parlour near me",
        "LED and LASER therapy services nearby",
        "Best bridal makeup artist in the city",
        "Microdermabrasion treatment at home",
        "Eyelash extensions near me",
        "Full body waxing and polishing services at home",
        "Hair coloring services near me",
        "Oxygen facial treatment at home",
        "Professional nail art services near me",
        "Brazilian waxing services near me",
        "Best beauty salons in the city",
        "Haircut and styling near me",
        "Nail art at home",
        "Eyelash extensions in my city",
        "Bridal makeup artists at home"
      ],
      "Men’s Salon": [
        "Top unisex salon near me",
        "Men's haircut and grooming services nearby",
        "Best beard trimming and sculpting at home",
        "Kids haircut services near me",
        "Oxygen facial for men at home",
        "Hair coloring services for men in the city",
        "Chest and back waxing services near me",
        "Therapeutic massages for men nearby",
        "Eyebrow threading and shaping for men at home",
        "Anti-aging facial treatments for men",
        "Best haircuts for men near me",
        "Moustache care services nearby",
        "Men's grooming packages in my city",
        "Beard trimming services nearby",
        "Polishing services in the city"
      ]
    };
  }, [nearestCity, cityName]);

  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const router = useRouter();
  const [debouncedQuery] = useDebounce(text, 700);

  useEffect(() => {
    if (!debouncedQuery) {
      setSuggestions([]);
      return;
    }

    const allPhrases = Object.values(categorizedPhrases).flat();
    const filteredPhrases = allPhrases
      .filter((phrase) => phrase.toLowerCase().includes(debouncedQuery.toLowerCase()))
      .slice(0, 10);
    setSuggestions(filteredPhrases);
  }, [debouncedQuery, categorizedPhrases]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSuggestionClick = (phrase) => {
    const cityName = nearestCity || "Aligarh";
    console.log("Selected phrase:", cityName);

    let selectedCategory = null;
    for (const [category, phrases] of Object.entries(categorizedPhrases)) {
      if (phrases.includes(phrase)) {
        selectedCategory = category;
        break;
      }
    }

    const searchUrl = selectedCategory
      ? `/${cityName}?search=${phrase}&category=${selectedCategory}`
      : `/${cityName}?search=${phrase}`;

    router.push(searchUrl);

    const drawerElement = document.querySelector('.drawer');
    if (drawerElement) {
      drawerElement.classList.remove('open');
    }

    router.refresh();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!debouncedQuery) {
      router.push('/');
    } else {
      const cityName = nearestCity || "Aligarh";
      router.push(`/${cityName}?search=${debouncedQuery}`);
    }
  };

  const SuggestionList = ({ suggestions }) => (
    <motion.div
      className="mt-2 p-2 flex flex-col gap-1 border rounded shadow-lg bg-white overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {suggestions.map((phrase, index) => (
        <motion.div
          key={index}
          className="px-2 py-1 cursor-pointer bg-white rounded-md flex flex-row items-center justify-between"
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSuggestionClick(phrase)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <span className="text-sm">{phrase}</span>
          <PiFlowArrow className="mr-3 mt-1 text-2xl text-blue-500" />
        </motion.div>
      ))}
    </motion.div>
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
    </div>
  );
}
