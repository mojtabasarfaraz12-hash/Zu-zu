import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Datenschutz | Zusammen Zuhause GmbH",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <div className="rounded-lg px-2 py-1 bg-white border border-gray-100">
              <Image
                src="/logo.jpg"
                alt="Zusammen Zuhause GmbH"
                width={160}
                height={54}
                className="h-8 w-auto"
              />
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#6B7063] hover:text-[#1B4D2E] transition-colors"
          >
            <ArrowLeft size={14} />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-12">
          <span className="block w-12 h-0.5 bg-[#C8962E] mb-5" />
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-[#1B4D2E] mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-[#6B7063]">
            Informationen gemäß Art. 13 DSGVO
          </p>
        </div>

        {/* Placeholder */}
        <div className="bg-white rounded-2xl border border-gray-100 p-10 shadow-sm">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E4EDE4] flex items-center justify-center mb-5">
              <span className="text-2xl">🔒</span>
            </div>
            <h2 className="font-display text-2xl font-semibold text-[#1B4D2E] mb-3">
              Inhalt folgt in Kürze
            </h2>
            <p className="text-[#6B7063] max-w-md leading-relaxed">
              Die vollständige Datenschutzerklärung wird hier hinterlegt, sobald
              sie bereitgestellt wurde.
            </p>
            <p className="mt-6 text-sm text-[#6B7063]">
              Bei Fragen wenden Sie sich an:{" "}
              <a
                href="mailto:seniorenwohnen@zenveo.de"
                className="text-[#1B4D2E] font-medium hover:text-[#C8962E] transition-colors"
              >
                seniorenwohnen@zenveo.de
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer mini */}
      <footer className="border-t border-gray-100 py-6 mt-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#6B7063]">
          <p>&copy; {new Date().getFullYear()} Zusammen Zuhause GmbH</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-[#1B4D2E] transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-[#1B4D2E] font-medium">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
