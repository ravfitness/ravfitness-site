export default function AboutRavi() {
  return (
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
  );
}
