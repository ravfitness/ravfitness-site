export default function CoachingServices() {
  return (
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
  );
}
