"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { advitaLocations } from "@/data/advita-locations";

const GEO_URL = "/germany.json";

export default function GermanyMapSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="standorte" className="py-20 bg-[#1B4D2E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
          {/* Text */}
          <div>
            <span className="section-divider mb-5" />
            <p className="text-[#C8962E] text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Standorte
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-5">
              Bundesweit
              <br />
              für Sie da.
            </h2>
            <p className="text-white/60 leading-relaxed text-lg max-w-md mb-6">
              Mit über 73 advita-Standorten in ganz Deutschland sind wir nah bei
              Ihnen, egal wo Sie leben.
            </p>

            {hovered ? (
              <div className="inline-flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3 border border-white/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#C8962E] shrink-0" />
                <p className="text-white font-medium text-sm">{hovered}</p>
              </div>
            ) : (
              <p className="text-white/35 text-sm italic mb-6">
                Fahren Sie über einen Punkt für den Standort …
              </p>
            )}

            <a
              href="https://www.advita.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Alle Standorte auf advita.de
              <span>→</span>
            </a>
          </div>

          {/* Map */}
          <div
            className="bg-[#0F2E1A] rounded-2xl p-3 overflow-hidden cursor-pointer"
            onClick={() => window.open("https://www.advita.de", "_blank")}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [10.5, 52.8], scale: 3600 }}
              style={{ width: "100%", height: "auto" }}
              viewBox="0 0 800 900"
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1B4D2E"
                      stroke="#C8DDB0"
                      strokeWidth={0.7}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#2E7D47", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {advitaLocations.map((loc) => (
                <Marker
                  key={loc.city}
                  coordinates={[loc.lng, loc.lat]}
                  onMouseEnter={() => setHovered(loc.city)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => window.open("https://www.advita.de", "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    r={hovered === loc.city ? 6 : 3.5}
                    fill={hovered === loc.city ? "#C8962E" : "#C8DDB0"}
                    stroke={hovered === loc.city ? "#fff" : "#1B4D2E"}
                    strokeWidth={hovered === loc.city ? 1.5 : 0.8}
                    style={{ transition: "all 0.15s ease" }}
                  />
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  );
}
