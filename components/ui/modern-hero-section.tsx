"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface HeroCollageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle: string;
  stats: { value: string; label: string }[];
  images: string[];
}

const HeroCollage = React.forwardRef<HTMLDivElement, HeroCollageProps>(
  ({ className, title, subtitle, stats, images, ...props }, ref) => {
    const displayImages = images.slice(0, 7);

    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full bg-white py-20 sm:py-28 overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Main Content */}
        <div className="relative z-10 mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A4520] leading-tight">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-[#4B5563]">
            {subtitle}
          </p>
        </div>

        {/* Image Collage */}
        <div className="relative z-0 mt-16 h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="relative h-full w-full max-w-6xl">
            {displayImages[0] && (
              <img
                src={displayImages[0]}
                alt="Hauptbild"
                className="absolute left-1/2 top-1/2 h-auto w-[240px] md:w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl z-20 animate-float-up object-cover"
                style={{ animationDelay: "0s", aspectRatio: "3/4" }}
              />
            )}
            {displayImages[1] && (
              <img
                src={displayImages[1]}
                alt="Bild 2"
                className="absolute left-[20%] top-[12%] h-auto w-44 md:w-52 rounded-xl shadow-lg z-10 animate-float-up object-cover"
                style={{ animationDelay: "-1.2s", aspectRatio: "4/3" }}
              />
            )}
            {displayImages[2] && (
              <img
                src={displayImages[2]}
                alt="Bild 3"
                className="absolute right-[22%] top-[8%] h-auto w-40 md:w-48 rounded-xl shadow-lg z-10 animate-float-up object-cover"
                style={{ animationDelay: "-2.5s", aspectRatio: "4/3" }}
              />
            )}
            {displayImages[3] && (
              <img
                src={displayImages[3]}
                alt="Bild 4"
                className="absolute right-[18%] bottom-[10%] h-auto w-52 md:w-60 rounded-xl shadow-lg z-30 animate-float-up object-cover"
                style={{ animationDelay: "-3.5s", aspectRatio: "16/9" }}
              />
            )}
            {displayImages[4] && (
              <img
                src={displayImages[4]}
                alt="Bild 5"
                className="absolute right-[3%] top-1/2 -translate-y-[60%] h-auto w-44 md:w-52 rounded-xl shadow-lg z-10 animate-float-up object-cover"
                style={{ animationDelay: "-4.8s", aspectRatio: "3/4" }}
              />
            )}
            {displayImages[5] && (
              <img
                src={displayImages[5]}
                alt="Bild 6"
                className="absolute left-[16%] bottom-[6%] h-auto w-48 md:w-56 rounded-xl shadow-lg z-30 animate-float-up object-cover"
                style={{ animationDelay: "-5.2s", aspectRatio: "4/3" }}
              />
            )}
            {displayImages[6] && (
              <img
                src={displayImages[6]}
                alt="Bild 7"
                className="absolute left-[3%] top-[22%] h-auto w-40 md:w-48 rounded-xl shadow-lg z-10 animate-float-up object-cover"
                style={{ animationDelay: "-6s", aspectRatio: "3/4" }}
              />
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 mx-auto mt-12 px-4 max-w-5xl">
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold tracking-tight text-[#2E6B35]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-[#6B7280]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

HeroCollage.displayName = "HeroCollage";

export { HeroCollage };
