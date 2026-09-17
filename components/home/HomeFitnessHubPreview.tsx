import Link from "next/link";

const stories: ReadonlyArray<{ title: string; description: string }> = [
  {
    title: "My Muscle-Up Journey",
    description: "Training, technique and consistency behind achieving a muscle-up.",
  },
  {
    title: "Client Muscle-Up Success",
    description: "A real coaching journey from building the foundations to achieving a muscle-up.",
  },
];

export default function HomeFitnessHubPreview() {
  return (
    <section aria-labelledby="home-hub-heading" className="border-t border-gray-200 bg-[#f7f7f7]">
      <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6">
        <h2 id="home-hub-heading" className="text-2xl font-bold text-gray-900 sm:text-3xl">Fitness Hub</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">Practical training, movement skills and real coaching progress from RavFitness.</p>
        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
          <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
            {stories.map(({ title, description }) => (
              <article key={title} className="grid min-w-0 grid-cols-[40px_minmax(0,1fr)] items-start gap-3 break-words rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div aria-hidden="true" className="pointer-events-none flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f5b533] bg-white">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="h-5 w-5 text-gray-900" fill="currentColor">
                    <path d="M9 5.5 19 12 9 18.5Z" />
                  </svg>
                </div>
                <div className="flex min-w-0 flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 self-start rounded-full bg-black px-3 py-1 text-xs font-semibold text-[#f5b533]">Video Coming Soon</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/fitness-hub" className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-gray-400 bg-white px-5 py-3 text-center text-sm font-semibold text-gray-900 hover:border-[#f5b533] hover:bg-[#fff9ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b07812] md:mx-auto md:max-w-[300px] lg:max-w-none">Explore Fitness Hub →</Link>
        </div>
      </div>
    </section>
  );
}
