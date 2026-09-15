export default function BookSession() {
  return (
        <section id="contact" className="relative scroll-mt-14 md:scroll-mt-16 border-t border-neutral-900">



          {/* Background */}
          <div className="absolute inset-0 bg-neutral-950" />
          <div className="absolute inset-0 bg-[radial-gradient(550px_circle_at_18%_30%,rgba(245,181,51,0.14),transparent_60%)]" />


          {/* Content */}
          <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-16">
            <div className="grid gap-8 md:grid-cols-2 items-center">


              {/* LEFT: CTA + Contact */}
              <div className="space-y-4">
                <span className="text-xs tracking-[0.3em] uppercase text-[#f5b533]">
                  Ready To Start?
                </span>

                <h2 className="text-3xl md:text-[2rem] font-semibold leading-tight text-white">
                  Let’s Build Strength You Can Rely On.
                </h2>

                <p className="text-neutral-300 max-w-md">
                  Personal training and coaching designed for people who want lasting results — not quick fixes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@ravfitness.com.au?subject=Rav%20Fitness%20Website%20Enquiry"
                    className="inline-flex items-center justify-center rounded-md border border-[#f5b533] px-6 py-3 text-sm font-medium text-[#f5b533] hover:bg-[#f5b533] hover:text-black transition"
                  >
                    Email Enquiry
                  </a>

                  <a
                    href="https://wa.me/61412197390?text=Hi%20Rav%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20coaching."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 hover:border-neutral-500 hover:text-white transition"
                  >
                    WhatsApp Me
                  </a>
                </div>
                <div className="h-px w-24 bg-neutral-800/80" />
                <div className="space-y-1 text-sm text-neutral-300">
                  <p className="text-neutral-400">
                    Phone / WhatsApp:{" "}
                    <a
                      href="https://wa.me/61412197390?text=Hi%20Rav%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20coaching."
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#f5b533] hover:brightness-110 transition"
                    >
                      0412 197 390
                    </a>
                  </p>



                  <p className="text-neutral-400">
                    Email:{" "}
                    <a
                      href="mailto:info@ravfitness.com.au"
                      className="text-[#f5b533] hover:brightness-110 transition"
                    >
                      info@ravfitness.com.au
                    </a>
                  </p>

                  <p className="text-neutral-400">
                    Instagram:{" "}
                    <a
                      href="https://www.instagram.com/rav_fitnesscoach"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#f5b533] hover:brightness-110 transition"
                    >
                      @rav_fitnesscoach
                    </a>
                  </p>


                </div>

                <p className="text-sm text-neutral-400">
                  Book a session, ask a question, or start with a simple conversation.
                </p>
              </div>

              {/* RIGHT: Location */}
              <div className="rounded-xl border border-[#f5b533]/20 bg-neutral-900/50 p-5 space-y-2 shadow-[0_0_40px_rgba(245,181,51,0.06)]">
                <span className="text-xs tracking-widest uppercase text-neutral-400">
                  Training Location
                </span>

                <p className="text-lg font-medium text-white">
                  Goodlife Health Clubs Glen Iris
                </p>

                <p className="text-neutral-300 leading-snug">
                  1438 High St<br />
                  Glen Iris VIC 3146
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Goodlife%20Health%20Clubs%20Glen%20Iris%201438%20High%20St%20Glen%20Iris%20VIC%203146"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit cursor-pointer text-sm text-[#f5b533] hover:brightness-110 transition"
                >
                  Open in Google Maps →
                </a>

                <p className="text-sm text-neutral-400">
                  In-gym personal training available.
                </p>

              </div>
            </div>
            {/* Brand Close */}
            <div className="mt-12 flex justify-center">
              <span className="text-[#f5b533] font-semibold uppercase tracking-[0.32em] text-lg md:text-xl">
                NEVER BREAK THE CHAIN
              </span>
            </div>

            <div className="mt-8 border-t border-neutral-800/70" />









          </div>  {/* ✅ closes: <div className="relative max-w-6xl ..."> */}
        </section>
  );
}
