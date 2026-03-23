import Image from "next/image";

export default function PartnerSection() {
  return (
    <section className="py-28 bg-[#F7F3ED]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Echtes advita Foto */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/advita-pflege.jpg"
                alt="advita Pflegekraft im Gespräch mit Seniorin"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-[#C8962E]/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#1B4D2E]/8 -z-10" />

            {/* Badge */}
            <div className="absolute top-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg">
              <p className="text-[10px] text-[#6B7063] uppercase tracking-widest mb-0.5">
                Partner
              </p>
              <p className="text-sm font-semibold text-[#1B4D2E]">
                advita Pflegedienst GmbH
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="section-divider mb-5" />
            <p className="text-[#C8962E] text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Unser starker Partner
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1B4D2E] leading-tight mb-6">
              Pflege und Wohnen
              <br />
              nahtlos verbunden.
            </h2>
            <p className="text-[#6B7063] leading-relaxed mb-5">
              Die Zusammen Zuhause GmbH arbeitet eng mit der{" "}
              <strong className="text-[#1B4D2E]">advita Pflegedienst GmbH</strong> zusammen,
              einem der größten ambulanten Pflegedienste Deutschlands mit über{" "}
              <strong className="text-[#1B4D2E]">73 Niederlassungen</strong> und{" "}
              <strong className="text-[#1B4D2E]">4.000 Mitarbeiterinnen und Mitarbeitern</strong>.
            </p>
            <p className="text-[#6B7063] leading-relaxed mb-8">
              In unseren Häusern stellt advita die pflegerische Versorgung sicher:
              von der ambulanten Grundpflege über Tagespflege bis hin zur
              Intensivpflege. So entsteht ein Gesamtkonzept, das Wohnen und
              professionelle Versorgung nahtlos miteinander verbindet.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-[#1B4D2E]/10">
              {[
                { value: "73+", label: "Standorte" },
                { value: "4.000+", label: "Mitarbeiter" },
                { value: "30+", label: "Jahre Erfahrung" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold text-[#1B4D2E]">
                    {s.value}
                  </p>
                  <p className="text-[#6B7063] text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.advita.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B4D2E] text-white text-sm font-medium hover:bg-[#0F2E1A] transition-colors"
            >
              Mehr über advita erfahren
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
