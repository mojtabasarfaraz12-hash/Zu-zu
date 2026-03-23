import { Briefcase, ArrowRight, Star } from "lucide-react";

const KARRIERE_URL =
  "https://www.advita-karriere.de/stellenangebote?regionen=Sachsen&utm_term=pflege%20stellenangebote&utm_campaign=adc+-+advita+-+Jobs+-+always+on+-+Sachsen&utm_source=online&utm_medium=google-ads&hsa_acc=5892082869&hsa_cam=20785228961&hsa_grp=155332838546&hsa_ad=681237729811&hsa_src=g&hsa_tgt=kwd-1061516315&hsa_kw=pflege%20stellenangebote&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=20785228961&gbraid=0AAAAADgCAop1RA6UYeuy1N5qcKD-y2HR6&gclid=CjwKCAjwyYPOBhBxEiwAgpT8P-tmutgUTqtLbUi4UGi4SIGMwIw4ZBsjtlYOIc-ythmjZXcrfdQScxoCZ44QAvD_BwE";

const highlights = [
  "Pflege & Betreuung",
  "Hauswirtschaft & Service",
  "Verwaltung & Management",
  "Hausmeister & Technik",
];

export default function KarriereSection() {
  return (
    <section id="karriere" className="py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="section-divider mb-5" />
            <p className="text-[#C8962E] text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Karriere
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1B4D2E] leading-tight mb-6">
              Werden Sie
              <br />
              Teil unseres Teams.
            </h2>
            <p className="text-[#6B7063] text-lg leading-relaxed mb-8">
              Die Zusammen Zuhause GmbH und die advita Pflegedienst GmbH bieten
              vielfältige Karrieremöglichkeiten in einem sinnstiftenden Umfeld.
              Alle aktuellen Stellenangebote finden Sie direkt auf der
              advita-Karriereseite.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Star
                    size={14}
                    className="text-[#C8962E] shrink-0 fill-[#C8962E]"
                  />
                  <span className="text-sm text-[#4A5540] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={KARRIERE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#1B4D2E] text-white font-medium hover:bg-[#0F2E1A] transition-colors group"
            >
              <Briefcase size={18} />
              Alle Stellenangebote ansehen
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-[#1B4D2E] rounded-2xl p-10 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#C8962E]/10 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#C8962E]/20 flex items-center justify-center mb-8">
                  <Briefcase size={26} className="text-[#C8962E]" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  Ihr nächster Schritt
                  <br />
                  in der Pflege.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Wir suchen engagierte Menschen, die mit Herz und Fachkompetenz
                  dazu beitragen, das Leben unserer Bewohnerinnen und Bewohner
                  schöner zu gestalten.
                </p>

                <div className="pt-6 border-t border-white/15">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">
                    Alle Stellen auf
                  </p>
                  <p className="text-white font-semibold">advita-karriere.de</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
