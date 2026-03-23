import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export default function KontaktSection() {
  return (
    <section id="kontakt" className="py-28 bg-[#F7F3ED]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Intro */}
          <div>
            <span className="section-divider mb-5" />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1B4D2E] leading-tight mb-6">
              So erreichen
              <br />
              Sie uns.
            </h2>
            <p className="text-[#6B7063] text-lg leading-relaxed mb-8">
              Alle Anfragen rund um Mietverhältnisse, Wohnangebote und Besichtigungen
              werden durch unseren Immobilienverwalter{" "}
              <strong className="text-[#1B4D2E]">Zenveo GmbH</strong> bearbeitet.
              Bitte wenden Sie sich direkt an folgende Kontaktdaten:
            </p>

            {/* Zenveo Hinweis-Box */}
            <div className="bg-[#1B4D2E]/5 border border-[#1B4D2E]/15 rounded-2xl p-6 mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1B4D2E] mb-3">
                Ihr Ansprechpartner
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7063] uppercase tracking-widest mb-0.5">E-Mail</p>
                    <a
                      href="mailto:seniorenwohnen@zenveo.de"
                      className="text-[#1B4D2E] font-semibold hover:text-[#C8962E] transition-colors"
                    >
                      seniorenwohnen@zenveo.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7063] uppercase tracking-widest mb-0.5">Telefon</p>
                    <a
                      href="tel:+493416587396"
                      className="text-[#1B4D2E] font-semibold hover:text-[#C8962E] transition-colors"
                    >
                      +49 (0) 341 65873968
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D2E] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7063] uppercase tracking-widest mb-0.5">Postadresse</p>
                    <p className="text-[#1B4D2E] font-semibold">
                      Härtelstraße 4<br />04107 Leipzig
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7063] uppercase tracking-widest mb-1">Telefonische Sprechzeiten</p>
                    <div className="flex flex-col gap-0.5">
                      {[
                        { tag: "Montag", zeit: "10:00 bis 12:00 Uhr" },
                        { tag: "Mittwoch", zeit: "10:00 bis 12:00 Uhr" },
                        { tag: "Freitag", zeit: "10:00 bis 12:00 Uhr" },
                      ].map((s) => (
                        <div key={s.tag} className="flex gap-4 text-sm">
                          <span className="text-[#1B4D2E] font-medium w-24">{s.tag}</span>
                          <span className="text-[#6B7063]">{s.zeit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-[#6B7063] mt-2 italic">
                      Außerhalb der Sprechzeiten können Sie eine Nachricht auf dem
                      Anrufbeantworter hinterlassen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Ansprechpartner + Zenveo */}
          <div className="flex flex-col gap-6">
            {/* Zenveo Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7063] mb-5">
                Geschäftsführung
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    name: "Ralf Stähler",
                    title: "Geschäftsführer",
                    company: "Zusammen Zuhause GmbH",
                  },
                  {
                    name: "Moritz Aepfelbacher",
                    title: "Geschäftsführer",
                    company: "Zenveo GmbH",
                  },
                ].map((p) => (
                  <div key={p.name} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E4EDE4] flex items-center justify-center shrink-0">
                      <span className="text-[#1B4D2E] font-semibold text-sm">
                        {p.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1B4D2E]">{p.name}</p>
                      <p className="text-sm text-[#6B7063]">
                        {p.title} · {p.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zenveo Info */}
            <div className="bg-[#1B4D2E] rounded-2xl p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
                Hinweis
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Die <strong className="text-white">Zenveo GmbH</strong> ist der
                Immobilienverwalter der Zusammen Zuhause GmbH und Ihr direkter
                Ansprechpartner für alle Fragen rund um Ihr Mietverhältnis,
                Wohnungsanfragen und Besichtigungen.
              </p>
              <a
                href="mailto:seniorenwohnen@zenveo.de"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <Mail size={14} />
                seniorenwohnen@zenveo.de
              </a>
            </div>

            {/* Quick CTA */}
            <a
              href="mailto:seniorenwohnen@zenveo.de"
              className="flex items-center justify-between gap-4 bg-[#C8962E] rounded-2xl p-6 text-white hover:bg-[#B07E20] transition-colors group"
            >
              <div>
                <p className="font-semibold text-lg">Jetzt Anfrage stellen</p>
                <p className="text-white/75 text-sm">seniorenwohnen@zenveo.de</p>
              </div>
              <ExternalLink
                size={20}
                className="shrink-0 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
