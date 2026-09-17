import Link from "next/link";

type CoachingIconName = "dumbbell" | "people" | "laptop";

const options: ReadonlyArray<{ title: string; copy: string; cta: string; icon: CoachingIconName }> = [
  {
    title: "One-to-One Personal Training",
    copy: "Private, personalised coaching built around your body, schedule and goals.",
    cta: "Explore One-to-One →",
    icon: "dumbbell",
  },
  {
    title: "Partner & Semi-Private Coaching",
    copy: "Coaching for partners, friends or appropriately matched people — 2–3 people maximum.",
    cta: "Explore Semi-Private →",
    icon: "people",
  },
  {
    title: "Online Coaching",
    copy: "An individual program, progress tracking, accountability and a weekly connection/check-in.",
    cta: "Explore Online Coaching →",
    icon: "laptop",
  },
];

function CoachingIcon({ name }: { name: CoachingIconName }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-gray-900">
      {name === "dumbbell" && (
        <>
          <path d="M10 16h12" stroke="#b07812" />
          <rect x="6" y="9" width="4" height="14" rx="1" />
          <rect x="22" y="9" width="4" height="14" rx="1" />
          <path d="M3 12v8m26-8v8" />
        </>
      )}
      {name === "people" && (
        <>
          <circle cx="11" cy="10" r="4" />
          <circle cx="23" cy="11" r="3" stroke="#b07812" />
          <path d="M3 26v-3a8 8 0 0 1 16 0v3H3Z" />
          <path d="M23 18a6 6 0 0 1 6 6v2h-6" stroke="#b07812" />
        </>
      )}
      {name === "laptop" && (
        <>
          <rect x="6" y="6" width="20" height="16" rx="2" />
          <path d="M3 22h26l-2 4H5l-2-4Z" />
          <path d="m12 14 3 3 5-6" stroke="#b07812" />
        </>
      )}
    </svg>
  );
}

export default function HomeCoachingPreview() {
  return (
    <section id="services" aria-labelledby="home-coaching-heading" className="scroll-mt-14 border-t border-gray-200 bg-[#f7f7f7] md:scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-9">
        <h2 id="home-coaching-heading" className="text-2xl font-bold text-gray-900 sm:text-3xl">How We Can Train</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">Choose the coaching style that fits your goals, schedule and personality.</p>
        <div className="mt-6 grid auto-rows-fr gap-4 lg:grid-cols-3">
          {options.map(({ title, copy, cta, icon }) => (
            <article key={title} className="flex min-w-0 flex-col break-words rounded-2xl border border-gray-200 border-t-4 border-t-[#f5b533] bg-white p-5 shadow-sm md:py-4.5">
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff3d6] md:mb-2">
                <CoachingIcon name={icon} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:mt-2">{copy}</p>
              <div className="mt-auto pt-4 md:pt-1">
                <Link href="/coaching" className="inline-flex min-h-11 items-center rounded-sm py-2 text-sm font-semibold text-[#946200] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                  {cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
