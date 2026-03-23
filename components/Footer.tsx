import Image from "next/image";

const KARRIERE_URL =
  "https://www.advita-karriere.de/stellenangebote?regionen=Sachsen&utm_term=pflege%20stellenangebote&utm_campaign=adc+-+advita+-+Jobs+-+always+on+-+Sachsen&utm_source=online&utm_medium=google-ads&hsa_acc=5892082869&hsa_cam=20785228961&hsa_grp=155332838546&hsa_ad=681237729811&hsa_src=g&hsa_tgt=kwd-1061516315&hsa_kw=pflege%20stellenangebote&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=20785228961&gbraid=0AAAAADgCAop1RA6UYeuy1N5qcKD-y2HR6&gclid=CjwKCAjwyYPOBhBxEiwAgpT8P-tmutgUTqtLbUi4UGi4SIGMwIw4ZBsjtlYOIc-ythmjZXcrfdQScxoCZ44QAvD_BwE";

export default function Footer() {
  return (
    <footer className="bg-[#0F2E1A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="inline-block bg-white rounded-lg px-3 py-2 mb-5">
              <Image
                src="/logo.jpg"
                alt="Zusammen Zuhause GmbH"
                width={160}
                height={54}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Barrierefreier, zentrumsnaher Wohnraum mit professioneller Pflege,
              in Kooperation mit der advita Pflegedienst GmbH.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Unsere Einrichtung", href: "#einrichtung" },
                { label: "Pflege", href: "#pflege" },
                { label: "Services", href: "#freizeit" },
                { label: "Karriere", href: "#karriere" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-white/55 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Kontakt
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/55">
              <a
                href="mailto:seniorenwohnen@zenveo.de"
                className="hover:text-white transition-colors"
              >
                seniorenwohnen@zenveo.de
              </a>
              <a
                href="tel:+493416587396"
                className="hover:text-white transition-colors"
              >
                +49 (0) 341 65873968
              </a>
              <p>Härtelstraße 4, 04107 Leipzig</p>
              <p className="text-white/35 text-xs mt-1">
                Mo / Mi / Fr 10:00 bis 12:00 Uhr
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="/impressum"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Datenschutz
              </a>
              <a
                href={KARRIERE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Karriere bei advita
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Zusammen Zuhause GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/30 text-xs">
            Immobilienverwaltung:{" "}
            <a
              href="https://www.zenveo.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8962E]/70 hover:text-[#C8962E] transition-colors"
            >
              Zenveo GmbH
            </a>
            {" · "}
            Pflege:{" "}
            <a
              href="https://www.advita.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8962E]/70 hover:text-[#C8962E] transition-colors"
            >
              advita Pflegedienst GmbH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
