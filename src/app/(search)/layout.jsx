import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/sections/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cherry Glitz - Explore Top Beauty and Tattoo Services Across India",
  template: "%s - Cherry Glitz",
  description: "Discover top-rated beauty parlors, hair salons, massage centers, spas, and tattoo shops across major Indian cities. Find expert services for bridal makeup, haircuts, luxury spa treatments, and unique tattoos near you.",

  keywords: [
    "Best beauty parlor in India",
    "Top hair salon in India",
    "Affordable massage center",
    "Luxury spa treatments",
    "Expert tattoo artists in India",
    "Bridal makeup services",
    "Hair coloring and styling",
    "Full body massage and spa",
    "Tattoo designs and removal",
    "Beauty services in Mumbai",
    "Hair salons in Delhi",
    "Massage centers in Bangalore",
    "Spas in Chennai",
    "Tattoo studios in Hyderabad",
    "Beauty parlors in Kolkata",
    "Spa packages in Pune",
    "Luxury hair salons in India",
    "Affordable beauty services",
    "Top-rated spas and salons",
    "Unique tattoo designs"
  ],
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
