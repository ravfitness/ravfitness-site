import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import Image from "next/image";

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
                  href="#services"
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
        <section
          id="services"
          className="bg-[#f7f7f7] border-t border-gray-200 scroll-mt-14 md:scroll-mt-16
             min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)]"
        >
          <div className="px-6 md:px-10 lg:px-14 pt-8 pb-20">
            <div className="max-w-screen-2xl mx-auto">
              {/* Section heading */}
              <h2 className="text-3xl md:text-[2rem] font-bold mb-2 text-center text-gray-900">
                How We Can Train
              </h2>

              <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-[15px] md:text-base leading-relaxed">
                Choose the coaching style that fits your goals, schedule and personality —{" "}
                I&apos;ll handle the plan, the progression and the accountability.
              </p>

              {/* Cards */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* 1:1 PT */}
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition">
                  <h3 className="text-[1.05rem] md:text-lg font-semibold mb-2 text-gray-900">
                    1-on-1 Coaching (Premium PT)
                  </h3>

                  <p className="text-xs text-gray-500 mb-3 font-medium">
                    Best for: People who want structure and accountability
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    Private, personalised coaching built around your body, schedule and goals.
                    Ideal if you want expert guidance, clear structure and strong accountability.
                  </p>

                  <ul className="text-xs text-gray-600 space-y-1 mb-4">
                    <li>• Strength &amp; mobility focused</li>
                    <li>• Technique-first coaching</li>
                    <li>• Adjusted around injuries &amp; limitations</li>
                    <li>• Fits your work &amp; family life</li>
                  </ul>

                  <p className="text-xs font-semibold text-[#f5b533] mt-auto pt-4">
                    Goal: Build real strength • Boost energy • Rebuild confidence
                  </p>
                </div>

                {/* Small Group */}
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col transition hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-[1.05rem] md:text-lg font-semibold mb-1 text-gray-900">
                    Small Group Training
                  </h3>

                  <p className="text-xs text-gray-500 mb-1">3–6 People</p>

                  <p className="text-xs text-gray-500 mb-3">
                    Best for: Consistency, energy, and community
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    Train with a small crew in a focused, high-energy environment.
                    Enough hype to push you, small enough for proper coaching on every set.
                  </p>

                  <ul className="text-xs text-gray-600 space-y-1 mb-4">
                    <li>• Strength + conditioning based sessions</li>
                    <li>• Great value with real coaching time</li>
                    <li>• Supportive, like-minded community</li>
                    <li>• Built to keep you consistent long-term</li>
                  </ul>

                  <p className="text-xs font-semibold text-[#f5b533] mt-auto pt-4">
                    Goal: Community • Consistency • Progress
                  </p>
                </div>

                {/* Online Coaching */}
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col transition hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-[1.05rem] md:text-lg font-semibold mb-2 text-gray-900">
                    Online Coaching (Anywhere)
                  </h3>

                  <p className="text-xs text-gray-500 mb-3">
                    Best for: Beginners or experienced trainees who want structure, guidance, and accountability
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    For people already training who want structure, progression and weekly
                    accountability — without needing to be in the same gym as me.
                  </p>

                  <ul className="text-xs text-gray-600 space-y-1 mb-4">
                    <li>• App-based training plans tailored to you</li>
                    <li>• Weekly check-ins &amp; program adjustments</li>
                    <li>• Video form feedback &amp; support</li>
                    <li>• Clear progression month to month</li>
                  </ul>

                  <p className="text-xs font-semibold text-[#f5b533] mt-auto pt-4">
                    Goal: Structure • Steady progression • Accountability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* ABOUT – CLEAN 2-COLUMN (DESKTOP) */}
        <section
          id="about"
          className="bg-white border-t border-gray-200 scroll-mt-14 md:scroll-mt-16 pt-2 md:pt-4 pb-10 md:pb-12"

        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm px-6 pb-6 pt-4 md:px-10 md:pb-10 md:pt-5">



              <div className="grid gap-8 md:grid-cols-12 w-full items-start">


                {/* LEFT: STORY */}
                <div className="md:col-span-12">

                  <p className="text-xs uppercase tracking-[0.22em] text-[#f5b533] mb-2">
                    About Rav Fitness
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    Turning Passion Into Purpose
                  </h2>

                  <p className="text-sm md:text-base font-medium text-[#b8860b] mb-4">
                    Your Personal Trainer in Glen Iris, Melbourne
                  </p>

                  <p className="text-sm md:text-base text-gray-600 italic mb-2">
                    Strong body. Clear mindset. Better life. One habit, one session, one day at a time.
                  </p>

                  {/* Mission – Lead Optimised */}
                  <div className="mb-3 rounded-xl border border-[#f5b533]/45 bg-[#fff9ec] px-6 py-2.5 md:px-10 md:py-3 max-w-4xl">




                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#b88212] mb-1">

                      My Mission
                    </p>

                    <p className="text-[14px] md:text-[15px] text-gray-800 leading-[1.5] md:max-w-none">


                      My mission is simple:{" "}
                      <span className="font-semibold">
                        to help you move better, feel stronger, stay balanced and build confidence from the inside out
                      </span>{" "}
                      — no matter where you&apos;re starting from or what life has thrown your way.
                    </p>

                    <p className="mt-2 text-xs text-gray-600 md:max-w-none">


                      Consistency beats motivation — every time.
                    </p>
                  </div>


                  {/* Step 3: tighter rhythm + pull story up */}
                  <div className="mt-1 border-l-4 border-[#f5b533] pl-5 space-y-4 text-[14px] md:text-[15px] text-gray-700 leading-[1.65]">


                    <p>
                      After 15 years in the corporate world — a career I genuinely enjoyed —
                      I chose to follow a lifelong passion for movement, strength training,
                      and helping people live healthier, more confident lives.
                    </p>

                    <p>
                      Through consistent strength training, calisthenics, and disciplined
                      self-development, I experienced firsthand how structured training
                      can change the way you move, feel, and show up in life. That personal
                      transformation shaped how I coach today — helping people build
                      strength, confidence, and sustainable habits through a clear,
                      repeatable system.
                    </p>

                    <p>
                      Today, I run my coaching business at Goodlife Glen Iris, delivering
                      structured, strength-focused training designed to build capable,
                      confident bodies. Every session is purposeful, progressive, and
                      grounded in accountability — because results come from consistency,
                      not motivation.
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>








        {/* RESULTS → TESTIMONIALS (LAUNCH VERSION) */}
        <section
          id="results"
          className="bg-white border-t border-b border-gray-200 scroll-mt-14 md:scroll-mt-16 pt-3 pb-16 md:pt-4 md:pb-20 relative z-30"

        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-[2rem] font-bold mb-2 text-center text-gray-900">
                Real People. Real Results.
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                Short stories from clients who built strength, energy, and confidence — with a plan they could stick to.
              </p>
            </div>

            {/* Testimonials grid */}
            <div className="mt-4 grid gap-6 md:grid-cols-3 items-stretch">

              {/* Card 1 — Anthea */}
              <div className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col">

                <div className="flex items-center gap-4">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#f5b533]/60 bg-gray-100">
                    <Image
                      src="/images/testimonials/anthea.jpg"
                      alt="Anthea"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="leading-tight">
                    <div className="font-semibold text-gray-900">Anthea</div>
                    <div className="text-xs text-gray-500">Goodlife Glen Iris • Gym Member</div>
                  </div>
                </div>

                <p className="mt-3 text-[13px] leading-[1.55] text-gray-700">
                  “I started training with Ravi after a 15-year break from weight training. I was nervous and needed
                  someone to keep me accountable. From the first session I felt calm and confident.
                  <br />
                  Ravi is warm, caring, and truly dedicated — he leads by example with his own fitness journey. Over the
                  past five months I’ve noticed improved mood, energy, strength, motivation, fitness, and self-confidence.
                  I’m now able to function better in my daily life.
                  <br />
                  I’m still training with Ravi, and it’s one of the best decisions I’ve made for my health.&quot;
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs font-semibold text-gray-900">
                    Results: <span className="text-[#b8860b]">Strength • Energy • Confidence • Vitality</span>
                  </span>
                  <span className="text-xs text-gray-500">5 months (still training)</span>
                </div>
              </div>

              {/* Card 2 — Andrew */}
              <div className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col">

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full border border-[#f5b533]/60 bg-gray-100" />
                  <div className="leading-tight">
                    <div className="font-semibold text-gray-900">Andrew</div>
                    <div className="text-xs text-gray-500">Goodlife Glen Iris • Real Estate Professional</div>
                  </div>
                </div>

                <p className="mt-3 text-[13px] leading-[1.55] text-gray-700">
                  “For years I avoided the gym — time, money, and intimidation always got in the way. Deep down I knew my health
                  wasn’t where it needed to be.
                  <br />
                  Ravi helped me unlock the mindset to change. Within the first week my energy lifted, and I started to feel
                  lighter, stronger, and more capable.
                  <br />
                  Over the past five months my weight, blood pressure, mobility, and confidence have improved. Ravi’s calm,
                  supportive coaching made the journey feel achievable and rewarding.
                  <br />
                  I’m still training with Ravi, and it’s one of the best decisions I’ve made for my health.”
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs font-semibold text-gray-900">
                    Results: <span className="text-[#b8860b]">Energy • Confidence • Health • Vitality</span>
                  </span>
                  <span className="text-xs text-gray-500">5 months (still training)</span>
                </div>
              </div>


              {/* Card 3 – David */}
              <div className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col">

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full border border-[#f5b533]/60 bg-gray-100" />
                  <div className="leading-tight">
                    <div className="font-semibold text-gray-900">David, 74</div>
                    <div className="text-xs text-gray-500">Goodlife Glen Iris • Managing Director</div>
                  </div>
                </div>

                <p className="mt-3 text-[13px] leading-[1.55] text-gray-700">
                  “At nearly 75, returning to the gym after decades, I was looking for clear guidance,
                  encouragement, and a trainer who could tailor a program to my needs and goals.
                  <br /><br />
                  Having completed long-distance walks including the French Camino, the Inca Trail,
                  and the Portuguese Camino, I’m not slowing down — I’m preparing for my next adventure.
                  <br /><br />
                  Ravi’s coaching is calm, knowledgeable, and delivered at the right pace. Each session
                  builds confidence and capability. This isn’t rushed training — it’s a sustainable,
                  life-changing journey.”
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs font-semibold text-gray-900">
                    Results: <span className="text-[#b8860b]">Energy • Confidence • Health • Vitality</span>
                  </span>
                  <span className="text-xs text-gray-500">6 months (still training)</span>
                </div>
              </div>

            </div>
          </div>



        </section>




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
