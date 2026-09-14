import Image from "next/image";

export default function ClientResults() {
  return (
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
  );
}
