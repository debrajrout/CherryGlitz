import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/sections/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Cherry Glitz",
    template: "%s - Cherry Glitz",
  },
  description: "Explore top-rated beauty parlors, hair salons, massage centers, spas, and tattoo shops across India. Find the best places for bridal makeup, haircuts, full body massages, luxury spa treatments, and unique tattoo designs near you.",
  keywords: [
    "Best beauty parlor in [city name]",
    "Women's beauty parlor near me",
    "Bridal makeup parlor",
    "Facial parlor",
    "Skin treatment parlor",
    "Waxing parlor",
    "Manicure pedicure parlor",
    "Best hair salon in [city name]",
    "Hair cutting salon",
    "Hair coloring salon",
    "Hair straightening salon",
    "Hair styling salon",
    "Hair spa",
    "Hair rebonding salon",
    "Hair extensions salon",
    "Best massage center in [city name]",
    "Full body massage",
    "Couple massage",
    "Aromatherapy massage",
    "Thai massage",
    "Swedish massage",
    "Deep tissue massage",
    "Head massage",
    "Best spa in [city name]",
    "Luxury spa",
    "Ayurvedic spa",
    "Wellness spa",
    "Spa packages",
    "Spa treatments",
    "Spa resorts",
    "Best tattoo artist in [city name]",
    "Tattoo studio",
    "Tattoo designs",
    "Tribal tattoo",
    "3D tattoo",
    "Watercolor tattoo",
    "Temporary tattoo",
    "Tattoo removal",
    "Makeup artist near me",
    "Bridal makeup packages",
    "Facial treatment",
    "Anti-aging facial",
    "Skin whitening treatment",
    "Body polishing",
    "Laser hair removal",
    "Hair cut for women",
    "Hair color trends",
    "Keratin hair treatment",
    "Hair botox",
    "Hair smoothening",
    "Hair volume boost",
    "Haircut for men",
    "Couples massage near me",
    "Pregnancy massage",
    "Sports massage",
    "Lymphatic drainage massage",
    "Reflexology massage",
    "Hot stone massage",
    "Shiatsu massage",
    "Luxury spa packages",
    "Spa retreats",
    "Spa day deals",
    "Spa memberships",
    "Spa gift cards",
    "Spa party",
    "Spa staycation",
    "Tattoo ideas",
    "Small tattoo designs",
    "Minimalist tattoos",
    "Couple tattoos",
    "Meaningful tattoos",
    "Cover up tattoos",
    "Tattoo aftercare",
    "Beauty and wellness services",
    "Salon and spa treatments",
    "Holistic healing",
    "Relaxation and rejuvenation",
    "Pampering experiences",
    "Luxury self-care",
    "Organic and natural products",
    "Vegan and cruelty-free",
    "Best beauty salon",
    "Top rated beauty parlors",
    "Affordable beauty services",
    "Expert makeup artists",
    "Professional hair stylists",
    "Relaxing spa experiences",
    "Therapeutic massages",
    "Unique tattoo designs",
    "Beauty treatment packages",
    "Health and wellness spa",
    "Permanent makeup",
    "Tattoo consultations",
    "Top beauty services",
    "Customized beauty treatments"
  ],
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@cherryglitz",
  //   title: "Cherry Glitz - Discover the Best Beauty Parlors, Hair Salons, Massage Centers, Spas, and Tattoo Shops in India",
  //   description: "Explore top-rated beauty parlors, hair salons, massage centers, spas, and tattoo shops across India. Find the best places for bridal makeup, haircuts, full body massages, luxury spa treatments, and unique tattoo designs near you.",

  // },
  // openGraph: {
  //   title: "Cherry Glitz - Discover the Best Beauty Parlors, Hair Salons, Massage Centers, Spas, and Tattoo Shops in India",
  //   description: "Explore top-rated beauty parlors, hair salons, massage centers, spas, and tattoo shops across India. Find the best places for bridal makeup, haircuts, full body massages, luxury spa treatments, and unique tattoo designs near you.",
  //   url: "https://www.cherryglitz.com",
  //   type: "website",
  // },
  // facebook: {
  //   app_id: "your-facebook-app-id",  // Optional, if you have a Facebook App ID

  // },
  // instagram: {

  //   title: "Cherry Glitz on Instagram",
  //   description: "Discover top beauty and wellness tips, trends, and services on Cherry Glitz's Instagram."
  // },
  // linkedIn: {
  //   title: "Cherry Glitz - Top Beauty and Wellness Services in India",
  //   description: "Connect with the best beauty parlors, hair salons, massage centers, spas, and tattoo shops in India. Professional and top-rated services for all your beauty and wellness needs.",
  //   url: "https://www.cherryglitz.com",

  // }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster position="top-right" theme="light" richColors />
      </body>
    </html>
  );
}
