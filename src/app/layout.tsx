import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Penang Photo Booth | Premium Photo Booth Rental Penang",
  description:
    "Malaysia's most exciting photo booth rental service in Penang. Perfect for weddings, corporate events, birthday parties & more. Book your booth today!",
  keywords: ["photo booth", "Penang", "wedding", "corporate event", "rental", "Malaysia"],
  icons: {
    icon: "/penang-photobooth-logo.png",
    apple: "/penang-photobooth-logo.png",
  },
  openGraph: {
    title: "Penang Photo Booth | Premium Photo Booth Rental",
    description: "Strike a Pose. Create Memories. Book your photo booth for your next event in Penang.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
