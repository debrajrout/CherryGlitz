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
