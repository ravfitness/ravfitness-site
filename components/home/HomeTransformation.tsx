import Image from "next/image";

import Link from "next/link";

export default function HomeTransformation() {
  return (
    <section id="about" aria-labelledby="home-transformation-heading" className="scroll-mt-14 bg-white pt-4 pb-8 md:scroll-mt-16 lg:pt-0 lg:pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative rounded-[28px] border border-[#f5b533]/60 bg-[#050505] p-4 shadow-[0_0_24px_rgba(245,181,51,0.12)] lg:p-6">
          <h2 id="home-transformation-heading" className="mb-3 text-sm uppercase tracking-[0.22em] text-[#f5b533]">
            My Transformation
          </h2>
          <div className="grid min-w-0 grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,640px)_minmax(0,330px)] lg:gap-5">
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(2,minmax(0,310px))] lg:gap-5">
              <figure className="flex min-w-0 flex-col rounded-2xl border border-[#f5b533]/40 bg-black p-1">
                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl bg-black">
                  <Image
                    src="/images/rav-before-v2.jpg"
                    alt="Ravi before his transformation, standing with his arms relaxed at his sides"
                    fill
                    priority
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                    className="object-contain scale-[0.95]"
                  />
                </div>
                <figcaption className="mt-2 flex min-h-12 flex-1 items-center justify-center rounded-md bg-[#f5b533] px-2 py-1 text-center text-sm font-semibold leading-relaxed text-black lg:min-h-0 lg:leading-5">
                  Before • No structure. No consistency.
                </figcaption>
              </figure>
              <figure className="flex min-w-0 flex-col rounded-2xl border border-[#f5b533] bg-black p-1">
                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl bg-black">
                  <Image
                    src="/images/rav-after-v2.jpg"
                    alt="Ravi after his transformation, wearing a black training top and flexing both arms"
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                    className="object-contain scale-[1.09]"
                  />
                </div>
                <figcaption className="mt-2 flex min-h-12 flex-1 items-center justify-center rounded-md bg-[#f5b533] px-2 py-1 text-center text-sm font-semibold leading-relaxed text-black lg:min-h-0 lg:leading-5">
                  After • Structure. Consistency.
                </figcaption>
              </figure>
            </div>
            <div className="min-w-0 space-y-4 lg:max-w-[330px]">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Turning Passion Into Purpose
              </h3>
              <p className="text-base leading-relaxed text-gray-300">
                After 15 years in the corporate world, I chose to follow a lifelong passion for movement, strength training, and helping people live healthier, more confident lives.
              </p>
              <Link href="/about" className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[#f5b533] px-5 py-3 text-center text-sm font-semibold text-[#f5b533] hover:bg-[#f5b533]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto">
                Read My Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
