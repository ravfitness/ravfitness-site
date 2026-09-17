import Link from "next/link";

const whatsappUrl = "https://wa.me/61412197390?text=Hi%20Rav%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20coaching.";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Goodlife%20Health%20Clubs%20Glen%20Iris%201438%20High%20St%20Glen%20Iris%20VIC%203146";
const contactLinkClass = "inline-flex min-h-11 max-w-full items-center rounded-sm py-2 text-[#f5b533] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5b533] [overflow-wrap:anywhere]";

export default function HomeBookingCta() {
  return (
    <section id="contact" aria-labelledby="home-booking-heading" className="relative scroll-mt-14 border-t border-neutral-800 bg-neutral-950 text-white md:scroll-mt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,181,51,0.10),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-9 sm:px-6">
        <div className="grid min-w-0 gap-5 lg:grid-cols-3 lg:gap-6">
          <div className="min-w-0 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f5b533]">READY TO START?</p>
            <h2 id="home-booking-heading" className="text-2xl font-bold leading-tight sm:text-3xl">Let’s Build Strength You Can Rely On.</h2>
            <p className="leading-relaxed text-neutral-300">Personal training and coaching designed for people who want lasting results — not quick fixes.</p>
          </div>
          <div className="min-w-0 md:flex md:flex-col md:justify-center lg:border-l lg:border-[#f5b533]/25 lg:pl-6">
            <div className="flex flex-col gap-4">
              <Link href="/book" className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#f5b533] px-4 py-3 text-center text-sm font-semibold text-black hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Book a Complimentary Session</Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[#f5b533] px-4 py-3 text-center text-sm font-semibold text-[#f5b533] hover:bg-[#f5b533]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">WhatsApp Me</a>
            </div>
            <address className="mt-4 text-sm not-italic text-neutral-300">
              <p>Phone / WhatsApp: <a href={whatsappUrl} target="_blank" rel="noreferrer" className={contactLinkClass}>0412 197 390</a></p>
              <p>Email: <a href="mailto:info@ravfitness.com.au" className={contactLinkClass}>info@ravfitness.com.au</a></p>
              <p>Instagram: <a href="https://www.instagram.com/rav_fitnesscoach" target="_blank" rel="noreferrer" className={contactLinkClass}>@rav_fitnesscoach</a></p>
            </address>
          </div>
          <div className="flex min-w-0 items-center lg:border-l lg:border-[#f5b533]/25 lg:pl-6">
            <div className="w-full space-y-4 rounded-xl border border-[#f5b533]/40 bg-neutral-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#f5b533]">TRAINING LOCATION</p>
              <address className="space-y-4 not-italic">
                <p className="text-lg font-semibold text-white">Goodlife Health Clubs Glen Iris</p>
                <p className="leading-relaxed text-neutral-300">1438 High St<br />Glen Iris VIC 3146</p>
              </address>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className={`${contactLinkClass} text-sm`}>Open in Google Maps →</a>
              <p className="text-sm text-neutral-300">In-gym personal training available.</p>
            </div>
          </div>
        </div>
        <p className="mt-5 text-center text-sm font-semibold uppercase tracking-widest text-[#f5b533]">Never Break The Chain</p>
      </div>
    </section>
  );
}
