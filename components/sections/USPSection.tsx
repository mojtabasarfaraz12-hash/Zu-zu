import { Accessibility, MapPin, Building2, Heart } from "lucide-react";

const usps = [
  {
    icon: Accessibility,
    title: "Vollständig barrierefrei",
    description:
      "Alle Wohnungen und Zimmer sind nach aktuellsten Standards barrierefrei gestaltet, für maximale Mobilität, Sicherheit und Komfort im Alltag.",
  },
  {
    icon: MapPin,
    title: "Zentrumsnah gelegen",
    description:
      "Unsere Häuser befinden sich in zentraler Lage mit bester Anbindung an Einkaufsmöglichkeiten, Ärzte, Apotheken und den öffentlichen Nahverkehr.",
  },
  {
    icon: Building2,
    title: "Frisch saniert",
    description:
      "Moderne, lichtdurchflutete Räume in frisch sanierten Gebäuden, hochwertig eingerichtet für ein Zuhause, in dem man sich rundum wohlfühlt.",
  },
  {
    icon: Heart,
    title: "Pflege direkt vor Ort",
    description:
      "In Kooperation mit der advita Pflegedienst GmbH ist professionelle Pflege und individuelle Betreuung direkt in unseren Häusern verfügbar.",
  },
];

export default function USPSection() {
  return (
    <section id="pflege" className="py-28 bg-[#1B4D2E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="section-divider mb-5" />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
              Warum Zusammen
              <br />
              Zuhause?
            </h2>
          </div>
          <p className="text-white/60 text-lg leading-relaxed">
            Wir verbinden modernes, barrierefreies Wohnen mit professioneller
            Pflegekompetenz, für ein Leben in Würde, Sicherheit und Gemeinschaft.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="bg-[#1B4D2E] p-8 hover:bg-[#2E7D47]/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C8962E]/15 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-[#C8962E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {usp.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
