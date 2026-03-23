import { Sparkles, Wrench, Car, Clock, Users, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Hauswirtschaft",
    description:
      "Reinigung, Wäscheservice, Verpflegung und hauswirtschaftliche Unterstützung, professionell und zuverlässig.",
  },
  {
    icon: Wrench,
    title: "Hausmeisterservice",
    description:
      "Instandhaltung, Reparaturen und technische Betreuung der Immobilien, schnell und kompetent erledigt.",
  },
  {
    icon: Car,
    title: "Fahrdienst",
    description:
      "Sicherer Transport zu Arztterminen, Einkäufen und Freizeitaktivitäten für mehr Mobilität im Alltag.",
  },
  {
    icon: Clock,
    title: "24h Erreichbarkeit",
    description:
      "Rund um die Uhr ansprechbar. Im Bedarfsfall ist immer jemand zur Stelle, für Sicherheit und Vertrauen.",
  },
  {
    icon: Users,
    title: "Soziale Betreuung",
    description:
      "Gemeinschaftsevents, Ausflüge und individuelle Begleitung fördern soziale Teilhabe und ein lebendiges Miteinander.",
  },
  {
    icon: ShieldCheck,
    title: "Zertifizierte Qualität",
    description:
      "Regelmäßige Schulungen und Qualitätskontrollen sichern ein konstant hohes Versorgungsniveau nach aktuellen Standards.",
  },
];

export default function ServicesSection() {
  return (
    <section id="freizeit" className="py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <span className="section-divider mb-5" />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1B4D2E] leading-tight">
              Mehr als
              <br />
              nur Wohnen.
            </h2>
          </div>
          <p className="text-[#6B7063] text-lg leading-relaxed">
            Seit Oktober 2023 sorgen über{" "}
            <span className="font-semibold text-[#1B4D2E]">350 Mitarbeiterinnen und Mitarbeiter</span>{" "}
            für einen reibungslosen, angenehmen Alltag in unseren Häusern.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`rounded-2xl p-7 flex flex-col gap-4 ${
                  i === 0
                    ? "bg-[#1B4D2E] text-white"
                    : "bg-white border border-gray-100 hover:border-[#C8DDB0] hover:shadow-md transition-all duration-200"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    i === 0 ? "bg-white/15" : "bg-[#E4EDE4]"
                  }`}
                >
                  <Icon
                    size={20}
                    className={i === 0 ? "text-[#C8962E]" : "text-[#1B4D2E]"}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className={`font-display text-lg font-semibold ${
                    i === 0 ? "text-white" : "text-[#1B4D2E]"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    i === 0 ? "text-white/65" : "text-[#6B7063]"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
