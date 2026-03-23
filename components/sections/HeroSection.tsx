import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="start" className="relative min-h-screen flex flex-col">
      {/* Background: echtes Haus-Foto */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/haus-schoene-aussicht.jpg"
          alt="Haus Schöne Aussicht, Zusammen Zuhause GmbH"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2E1A]/75 via-[#0F2E1A]/45 to-[#0F2E1A]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 justify-end pb-24 px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[#C8962E]" />
            <span className="text-[#C8962E] text-sm font-medium tracking-[0.2em] uppercase">
              Betreutes Wohnen & Pflege
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6">
            Selbstbestimmt
            <br />
            <em className="not-italic text-[#C8962E]">wohnen.</em>
            <br />
            Gut versorgt
            <br />
            <em className="not-italic">leben.</em>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-10">
            Die Zusammen Zuhause GmbH vermietet barrierefreien, zentrumsnahen
            Wohnraum für Seniorinnen und Senioren, mit professioneller Pflege
            und Betreuung direkt vor Ort.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#standorte"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C8962E] text-white font-medium text-sm hover:bg-[#B07E20] transition-colors"
            >
              Unsere Einrichtungen
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-medium text-sm hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5">
          <div className="grid grid-cols-3 divide-x divide-white/20 text-center">
            {[
              { value: "350+", label: "Mitarbeiter" },
              { value: "73+", label: "advita-Standorte" },
              { value: "Seit 2023", label: "In Betrieb" },
            ].map((s) => (
              <div key={s.label} className="px-4">
                <p className="font-display text-2xl font-semibold text-white">{s.value}</p>
                <p className="text-white/60 text-xs mt-0.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#einrichtung"
        className="absolute bottom-36 right-10 z-10 hidden lg:flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
      >
        <span className="text-[11px] tracking-[0.15em] uppercase rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce mt-6" />
      </a>
    </section>
  );
}
