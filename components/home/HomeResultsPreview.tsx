import Image from "next/image";
import Link from "next/link";

const testimonials: ReadonlyArray<{ name: string; details: string; quote: string; portrait?: string }> = [
  {
    name: "Anthea",
    details: "Goodlife Glen Iris • Gym Member",
    quote: "I started training with Ravi after a 15-year break from weight training. I was nervous and needed someone to keep me accountable. From the first session I felt calm and confident.",
    portrait: "/images/testimonials/anthea.jpg",
  },
  {
    name: "Andrew",
    details: "Goodlife Glen Iris • Real Estate Professional",
    quote: "For years I avoided the gym — time, money, and intimidation always got in the way. Ravi helped me unlock the mindset to change. With a clear plan and consistent support, I’m stronger, have more energy and feel better in myself.",
  },
];

export default function HomeResultsPreview() {
  return (
    <section id="results" aria-labelledby="home-results-heading" className="scroll-mt-14 border-t border-gray-200 bg-white md:scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 id="home-results-heading" className="text-2xl font-bold text-gray-900 sm:text-3xl">Real People. Real Results.</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-gray-600">Short stories from clients who built strength, energy, and confidence — with a plan they could stick to.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {testimonials.map(({ name, details, quote, portrait }) => (
            <figure key={name} className="flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <figcaption className="flex items-center gap-3">
                {portrait ? (
                  <Image src={portrait} alt="Anthea" width={56} height={56} className="h-14 w-14 shrink-0 rounded-full border border-[#f5b533] object-cover" />
                ) : (
                  <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f5b533] bg-[#fff3d6] text-xl font-semibold text-gray-900">A</span>
                )}
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{details}</p>
                </div>
              </figcaption>
              <blockquote className="relative mt-3 text-base leading-relaxed text-gray-800">
                <span aria-hidden="true" className="pointer-events-none absolute -left-4 top-0 text-2xl leading-none text-[#f5b533]">“</span>
                <p>{quote}</p>
              </blockquote>
            </figure>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link href="/results" className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-gray-400 bg-white px-5 py-3 text-center text-sm font-semibold text-gray-900 transition-colors hover:border-[#f5b533] hover:bg-[#fff9ec] focus-visible:border-[#f5b533] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b07812] sm:w-[300px]">See More Client Results →</Link>
        </div>
      </div>
    </section>
  );
}
