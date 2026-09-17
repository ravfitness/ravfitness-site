import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section id="home" className="bg-white scroll-mt-14 md:scroll-mt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 pt-8 pb-4 md:pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-8 lg:pb-8">
        <div className="min-w-0 break-words">
          <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gray-500">
            Glen Iris • Melbourne • Personal Trainer
          </p>
          <h1 className="sr-only">Personal Trainer in Glen Iris, Melbourne</h1>
          <h2 className="mb-4 text-[1.9rem] font-extrabold leading-tight text-gray-900 md:text-[2.4rem]">
            Get <span className="text-[#f5b533]">Stronger.</span> Move{" "}
            <span className="text-[#f5b533]">Better.</span> Feel Like{" "}
            <span className="underline decoration-[#f5b533] underline-offset-4">Yourself</span>{" "}
            Again.
          </h2>
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f5b533]">
            Strong Body • Clear Mind • Real Confidence
          </p>
          <div className="space-y-4">
            <p className="text-base text-gray-700 md:text-lg">
              I’m a <span className="font-semibold">personal trainer in Glen Iris</span> helping people rebuild{" "}
              <span className="font-semibold">strength</span>,{" "}
              <span className="font-semibold">energy</span>, and{" "}
              <span className="font-semibold">confidence</span> — without extremes or burnout.
            </p>
            <p className="text-base text-gray-700 md:text-lg">
              <span className="block font-semibold">Simple training. Clear structure. Real consistency.</span>
              One session, one habit, one day at a time.{" "}
              <span className="font-extrabold text-gray-900">Never break the chain.</span>
            </p>
          </div>
          <div className="mt-5 mb-3 flex min-w-0 flex-col gap-3 sm:flex-row">
            <Link href="/book" className="flex min-h-11 min-w-0 w-full items-center justify-center rounded-2xl bg-[#f5b533] px-4 py-3 text-center text-sm font-semibold text-black shadow-[0_14px_40px_rgba(245,181,51,0.45)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 sm:w-auto">
              Book a Complimentary Session
            </Link>
            <Link href="/coaching" className="flex min-h-11 min-w-0 w-full items-center justify-center rounded-2xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 sm:w-auto">
              Explore Coaching
            </Link>
          </div>
          <p className="text-xs leading-relaxed text-gray-500">
            Training at Goodlife Health Clubs Glen Iris • One-to-one, partner &amp; semi-private, and online coaching
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[480px] min-w-0">
          {/* The glow stays beside the opaque original photo; no filters or retouching. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[30%] bg-[radial-gradient(ellipse_at_center,rgba(245,181,51,0.18),transparent_70%)]" />
          <div className="relative mx-auto aspect-[4/5] w-[78%]">
            <Image
              src="/images/ravi-hero-original.jpg"
              alt="Ravi smiling in his black Goodlife Health Clubs coaching shirt"
              fill
              priority
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 375px, 78vw"
              className="object-cover object-[48%_top]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
