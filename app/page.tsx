import ClientResults from "@/components/results/ClientResults";
import AboutRavi from "@/components/about/AboutRavi";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import Image from "next/image";
import CoachingServices from "../components/coaching/CoachingServices";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1 pt-14 md:pt-16">


        {/* HERO – DRAMATIC VERSION */}
        <section
          id="home"
          className="relative overflow-hidden bg-white scroll-mt-14 md:scroll-mt-16 min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-start"
        >

          {/* Soft golden glow at the top */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-56 bg-gradient-to-b from-[#ffe9a8]/70 via-transparent to-transparent" />


          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-8 md:pt-12 md:pb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">












            {/* LEFT – TEXT / HOOK */}
            <div className="min-w-0 max-w-xl break-words">
              <p className="uppercase tracking-[0.22em] text-[11px] text-gray-500 mb-3">
                Glen Iris • Melbourne • Personal Trainer
              </p>

              {/* SEO H1 (screen-reader + Google friendly) */}
              <h1 className="sr-only">Personal Trainer in Glen Iris, Melbourne</h1>

              {/* Visual headline (keep your dramatic styling) */}
              <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold leading-tight text-gray-900 mb-6">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Get <span className="text-[#f5b533]">Stronger.</span> Move{" "}
                  <span className="text-[#f5b533]">Better.</span>
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Feel Like{" "}
                  <span className="underline decoration-[#f5b533] underline-offset-4">
                    Yourself
                  </span>{" "}
                  Again.
                </span>
              </h2>





              {/* Mini punchline */}
              <p className="uppercase tracking-[0.22em] text-[12px] font-semibold text-[#f5b533] mb-2">
                Strong Body • Clear Mind • Real Confidence
              </p>





              {/* Story – with bold keywords */}
              <div className="max-w-xl space-y-4">

                <p className="text-base md:text-lg text-gray-700">
                  I’m a <span className="font-semibold">personal trainer in Glen Iris</span> helping people rebuild{" "}
                  <span className="font-semibold">strength</span>,{" "}
                  <span className="font-semibold">energy</span>, and{" "}
                  <span className="font-semibold">confidence</span> — without extremes or burnout.
                </p>


                <p className="text-base md:text-lg text-gray-700">
                  <span className="font-semibold">Simple training.</span>{" "}
                  <span className="font-semibold">Clear structure.</span>{" "}
                  <span className="font-semibold">Real consistency.</span>{" "}
                  One session, one habit, one day at a time.{" "}
                  <span className="font-extrabold text-gray-900">Never break the chain.</span>
                </p>

              </div>










              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-1 md:mt-2 mb-3">
                <a
                  href="#contact"
                  className="min-w-0 w-full sm:w-auto text-center lg:text-left px-6 py-3 rounded-2xl text-sm font-semibold bg-[#f5b533] text-black shadow-[0_14px_40px_rgba(245,181,51,0.45)] hover:brightness-110 transition"
                >
                  Book a Complimentary Session
                </a>
                <a
                  href="/coaching"
                  className="min-w-0 w-full sm:w-auto text-center lg:text-left px-6 py-3 rounded-2xl text-sm font-semibold border border-gray-300 hover:bg-gray-50 transition"
                >
                  Explore Coaching
                </a>
              </div>

              {/* Trust line */}
              <p className="text-xs text-gray-500">
                Training out of Goodlife Health Clubs • 1-on-1 &amp; small group
                options • No crash diets • No 6-week BS challenges
              </p>
            </div>

            {/* RIGHT – TRANSFORMATION CARD */}
            <div className="min-w-0 w-full max-w-[480px] mx-auto lg:mx-0 lg:mt-0 lg:ml-auto relative">


              {/* Glowing background halo */}
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#f5b533]/35 via-transparent to-[#111827]/70 blur-lg" />


              {/* Outer gradient frame */}
              <div className="relative rounded-[28px] bg-gradient-to-br from-[#f5b533] via-[#f5b533]/40 to-transparent p-[1px] shadow-[0_20px_60px_rgba(15,23,42,0.7)]">
                <div className="rounded-[26px] bg-[#050505] border border-neutral-800/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#f5b533] mb-3">
                    My Transformation
                  </p>

                  <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-2 sm:gap-6 items-start">
                    {/* BEFORE */}
                    <div className="rounded-2xl overflow-hidden bg-black border border-neutral-700 min-w-0 flex flex-col p-2 sm:p-3">
                      <div className="relative h-[clamp(140px,54vw,260px)] lg:h-[260px] w-full overflow-hidden rounded-xl">
                        <Image
                          src="/images/rav-before-v2.jpg"
                          alt="Rav before starting his transformation"
                          fill
                          className="object-cover object-[50%_10%]"
                          priority
                        />
                      </div>
                      <p className="text-center text-[11px] text-black bg-[#f5b533] py-1 font-semibold mt-2 rounded-md">
                        Before • No structure. No consistency.
                      </p>
                    </div>

                    {/* AFTER */}
                    {/*<div className="rounded-2xl overflow-hidden bg-black border border-[#f5b533] min-w-0 flex flex-col p-2 sm:p-3">*/}
                    <div className="relative rounded-2xl overflow-hidden bg-black border border-[#f5b533] min-w-0 flex flex-col p-2 sm:p-3
  -translate-y-1 md:-translate-y-2 z-10
  shadow-[0_20px_60px_rgba(0,0,0,0.55)]
">
                      <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-[#f5b533]/25 blur-2xl" />


                      <div className="relative h-[clamp(140px,54vw,260px)] lg:h-[260px] w-full overflow-hidden rounded-xl">
                        <Image
                          src="/images/rav-after-v2.jpg"
                          alt="Rav after transforming his body and mindset"
                          fill
                          className="object-cover object-[50%_20%] scale-[1.05]"
                        />
                      </div>
                      <p className="text-center text-[11px] text-black bg-[#f5b533] px-2 py-[6px] font-semibold mt-2 rounded-md leading-[1.15]">
                        After • Structure.<br />
                        Consistency.
                      </p>

                    </div>
                  </div>





                  <p className="mt-3 text-[11px] text-gray-300 leading-relaxed">
                    This is what happens when you never break the chain and combine{" "}
                    <span className="font-semibold text-white">
                      smart training
                    </span>{" "}
                    with a{" "}
                    <span className="font-semibold text-white">stronger mindset</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* SERVICES – LIGHT GREY */}
        <CoachingServices />




        {/* ABOUT – CLEAN 2-COLUMN (DESKTOP) */}
        <AboutRavi />








        {/* RESULTS → TESTIMONIALS (LAUNCH VERSION) */}
        <ClientResults />




        {/* CONTACT – WHITE */}
        {/* CONTACT – STRONG FINAL CTA */}
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


      </main>

      {/* FOOTER – BLACK */}
      <SiteFooter />
    </div>
  );
}
