import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const euclidCircularB = localFont({
  src: [
    { path: "./fonts/EuclidCircularB-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/EuclidCircularB-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/EuclidCircularB-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/EuclidCircularB-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/EuclidCircularB-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-euclid",
  display: "swap",
});

const yogaSansPro = localFont({
  src: [
    { path: "./fonts/YogaSansPro-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/YogaSansPro-Italic.otf", weight: "400", style: "italic" },
    { path: "./fonts/YogaSansPro-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-yoga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zusammen Zuhause GmbH | Selbstbestimmt wohnen. Gut versorgt leben.",
  description:
    "Die Zusammen Zuhause GmbH vermietet barrierefreien, zentrumsnahen Wohnraum für Seniorinnen und Senioren, mit professioneller Pflege und Betreuung direkt vor Ort.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${euclidCircularB.variable} ${yogaSansPro.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAF8]">{children}</body>
    </html>
  );
}
