"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import CoachingDetailsDialog from "./CoachingDetailsDialog";
import { coachingOptions, whatsappUrl, type CoachingOptionId } from "./coachingContent";

const primaryClass = "inline-flex min-h-11 items-center justify-center rounded-xl bg-[#f5b533] px-5 py-2 text-center text-sm font-semibold text-black shadow-sm hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#946200]";
const outlineClass = "inline-flex min-h-11 items-center justify-center rounded-xl border border-gray-400 bg-white px-5 py-2 text-center text-sm font-semibold text-gray-900 hover:border-[#f5b533] hover:bg-[#fff9ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#946200]";
const sectionHeadingClass = "mb-2 text-xl font-bold leading-tight text-gray-900 md:text-[28px]";

function ServiceCard({ id, onOpen, prose = false }: { id: CoachingOptionId; onOpen: (id: CoachingOptionId) => void; prose?: boolean }) {
  const option = coachingOptions[id];
  const isPersonalTraining = id === "one-to-one" || id === "semi-private";
  return (
    <article className="relative flex min-w-0 flex-col rounded-xl border border-gray-200 border-t-[3px] border-t-[#f5b533] bg-white px-3 pt-3 pb-0 shadow-sm md:px-5 md:pt-3">
      <h3 className="text-base font-bold leading-tight md:text-lg text-gray-900">{option.title}</h3>
      {id === "online" && <p className="mt-1 text-sm font-semibold leading-snug text-gray-600 md:text-base">{option.supporting}</p>}
      {prose ? <p className="mt-1 text-sm leading-snug text-gray-600 md:text-base">{option.summary[0]}</p> : (
        <ul className="mt-1 list-disc pl-5 text-sm leading-tight md:text-base text-gray-600 marker:text-[#f5b533]">
          {option.summary.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
      <button type="button" aria-label={`View details: ${option.title}`} aria-haspopup="dialog" onClick={() => onOpen(id)} className={`mt-auto inline-flex ${isPersonalTraining ? "min-h-9" : "min-h-11"} cursor-pointer items-center self-start rounded-sm text-sm font-medium text-[#946200] after:absolute after:inset-0 after:rounded-xl hover:underline focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-[#946200]`}>View Details <span aria-hidden="true" className="ml-1">+</span></button>
    </article>
  );
}

export default function CoachingServices() {
  const [selected, setSelected] = useState<CoachingOptionId | null>(null);
  const closeDialog = useCallback(() => setSelected(null), []);
  return (
    <>
      <section aria-labelledby="coaching-heading" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 md:py-5">
          <h1 id="coaching-heading" className="text-[28px] font-extrabold leading-tight text-gray-900 md:text-5xl">Choose Your <span className="text-[#f5b533]">Coaching</span></h1>
          <p className="mt-1 text-sm leading-snug text-gray-600 md:text-lg">Three ways to train. Choose what fits your goals and lifestyle.</p>
          <Link href="/book" className={`${primaryClass} mt-2 w-full sm:w-auto`}>Book a Complimentary Session</Link>
        </div>
      </section>
      <div id="services" className="scroll-mt-14 bg-[#f7f7f7] md:scroll-mt-16">
        <div className="mx-auto max-w-6xl space-y-4 px-4 py-4 sm:px-6 md:space-y-5 md:py-4">
          <section aria-labelledby="personal-training-heading">
            <h2 id="personal-training-heading" className={sectionHeadingClass}>Personal Training</h2>
            <div className="grid gap-3 md:grid-cols-2 md:gap-5">
              <ServiceCard id="one-to-one" onOpen={setSelected} />
              <ServiceCard id="semi-private" onOpen={setSelected} />
            </div>
          </section>
          <section aria-labelledby="online-coaching-heading">
            <h2 id="online-coaching-heading" className={sectionHeadingClass}>Online Coaching</h2>
            <ServiceCard id="online" onOpen={setSelected} />
          </section>
          <section aria-labelledby="transformation-programs-heading">
            <h2 id="transformation-programs-heading" className={sectionHeadingClass}>Transformation Programs</h2>
            <div className="grid gap-3 lg:grid-cols-3 lg:gap-5">
              <ServiceCard id="six-week" onOpen={setSelected} prose />
              <ServiceCard id="twelve-week" onOpen={setSelected} prose />
              <ServiceCard id="summer" onOpen={setSelected} prose />
            </div>
          </section>
          <section aria-labelledby="coaching-results-heading" className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white/60 px-3 py-2 md:flex-row md:items-center md:justify-between md:px-6">
            <div className="min-w-0">
              <h2 id="coaching-results-heading" className="text-lg font-bold text-gray-900 md:text-xl">Real People. Real Progress.</h2>
              <p className="mt-1 text-sm leading-snug text-gray-600">Existing RavFitness clients building strength, energy and confidence.</p>
            </div>
            <Link href="/results" className={`${outlineClass} shrink-0`}>See Client Results <span aria-hidden="true" className="ml-2">→</span></Link>
          </section>
          <section aria-labelledby="coaching-start-heading" className="grid gap-3 rounded-xl bg-neutral-950 p-3 text-white md:grid-cols-2 md:items-center md:px-6 md:py-3">
            <div>
              <h2 id="coaching-start-heading" className="text-xl font-bold md:text-[28px]">Not Sure Where to Start?</h2>
              <p className="mt-1 text-sm leading-snug text-neutral-300">Tell me your goal and I’ll help you choose the right option.</p>
            </div>
            <div className="flex flex-col gap-2 md:pl-6">
              <Link href="/book" className={`${primaryClass} focus-visible:outline-white`}>Book a Complimentary Session</Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#f5b533] px-5 py-2 text-center text-sm font-semibold text-white hover:bg-[#f5b533]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5b533]">WhatsApp Rav</a>
            </div>
          </section>
        </div>
      </div>
      {selected && <CoachingDetailsDialog option={coachingOptions[selected]} onClose={closeDialog} />}
    </>
  );
}
