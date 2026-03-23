import Image from "next/image";

const wohnformen = [
  {
    nr: "01",
    title: "Betreutes Wohnen",
    description:
      "Eigene Wohnung, eigenes Leben, mit Sicherheit im Hintergrund. Barrierefreie Wohnungen bieten volle Unabhängigkeit mit der Gewissheit, dass qualifizierte Hilfe jederzeit erreichbar ist.",
    image: "/wohnform-betreutes-wohnen.jpg",
  },
  {
    nr: "02",
    title: "Pflege-Wohngemein­schaften",
    description:
      "Gemeinsam statt einsam. In unseren Pflege-WGs leben Seniorinnen und Senioren in familiärer Gemeinschaft, individuell betreut, persönlich begleitet und fürsorglich versorgt.",
    image: "/wohnform-pflege-wg.jpg",
  },
  {
    nr: "03",
    title: "Servicegesellschaft",
    description:
      "Mehr als nur Wohnen. Über 350 Mitarbeiterinnen und Mitarbeiter sorgen für einen reibungslosen Alltag, von der Hauswirtschaft über den Hausmeisterservice bis zum persönlichen Fahrdienst.",
    image: "/wohnform-service.jpg",
  },
];

export default function WohnformenSection() {
  return (
    <section id="einrichtung" className="py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <span className="section-divider mb-5" />
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1B4D2E] leading-tight">
            Unsere Wohnformen
          </h2>
          <p className="mt-4 text-[#6B7063] text-lg max-w-xl">
            Individuelle Wohnlösungen für jeden Lebensabschnitt, damit Sie
            selbstbestimmt leben können.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wohnformen.map((item) => (
            <div
              key={item.nr}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D2E]/60 to-transparent" />
                <span className="absolute bottom-4 left-5 font-display text-5xl font-bold text-white/20 leading-none">
                  {item.nr}
                </span>
              </div>

              {/* Body */}
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-[#1B4D2E] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B7063] text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center text-sm font-medium text-[#C8962E] hover:text-[#B07E20] transition-colors group/link"
                >
                  Mehr erfahren
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
