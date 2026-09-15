import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const videos: ReadonlyArray<{ title: string; description: string }> = [
  {
    title: "My Muscle-Up Journey",
    description: "Training, technique and consistency behind achieving a muscle-up.",
  },
  {
    title: "Client Muscle-Up Success",
    description: "A real coaching journey from building the foundations to achieving a muscle-up.",
  },
];

export default function FitnessHubPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-14 md:pt-16">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-sm font-semibold tracking-widest text-gray-600">
            FITNESS HUB
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Real Training. Real Progress.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            Practical training, movement skills and real coaching progress from RavFitness.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {videos.map(({ title, description }) => (
              <article key={title} className="min-w-0 rounded-2xl border border-gray-200 border-t-4 border-t-[#f5b533] bg-[#f7f7f7] p-6 md:p-8">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-3 inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-[#f5b533]">
                  Video Coming Soon
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Original videos are being prepared for the website.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/coaching" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-center text-sm font-semibold hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b533]">
              Explore Coaching
            </Link>
            <Link href="/book" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#f5b533] px-5 py-3 text-center text-sm font-semibold text-black hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b533]">
              Book a Complimentary Session
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
