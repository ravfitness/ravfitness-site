"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { CoachingOption } from "./coachingContent";

export default function CoachingDetailsDialog({ option, onClose }: { option: CoachingOption; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const backdropStart = useRef(false);
  const isTransformation = option.id === "six-week" || option.id === "twelve-week" || option.id === "summer";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const body = document.body;
    const root = document.documentElement;
    const previousBody = { position: body.style.position, top: body.style.top, left: body.style.left, width: body.style.width };
    const previousRoot = { overflow: root.style.overflow, scrollbarGutter: root.style.scrollbarGutter, scrollBehavior: root.style.scrollBehavior };
    root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = `-${scrollX}px`;
    body.style.width = "100%";
    dialog.showModal();
    headingRef.current?.focus({ preventScroll: true });

    return () => {
      dialog.close();
      Object.assign(body.style, previousBody);
      root.style.overflow = previousRoot.overflow;
      root.style.scrollbarGutter = previousRoot.scrollbarGutter;
      root.style.scrollBehavior = "auto";
      window.scrollTo(scrollX, scrollY);
      trigger?.focus({ preventScroll: true });
      root.style.scrollBehavior = previousRoot.scrollBehavior;
    };
  }, []);

  function outside(event: React.PointerEvent<HTMLDialogElement>): boolean {
    const rect = event.currentTarget.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  }

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="coaching-dialog-title"
      aria-describedby="coaching-dialog-description"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onPointerDown={(event) => { backdropStart.current = outside(event); }}
      onPointerUp={(event) => { if (backdropStart.current && outside(event)) onClose(); backdropStart.current = false; }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === headingRef.current)) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first?.focus();
        }
      }}
      className="fixed inset-x-0 top-auto bottom-0 m-0 max-h-[92dvh] w-full max-w-none flex-col overflow-hidden rounded-t-2xl border border-gray-200 bg-white p-0 text-gray-900 shadow-xl backdrop:bg-black/50 open:flex md:inset-0 md:m-auto md:max-h-[85dvh] md:w-[calc(100%-3rem)] md:max-w-[560px] md:rounded-2xl"
    >
      <header className="flex shrink-0 items-start justify-between gap-3 border-b border-gray-200 px-4 py-4 md:px-6">
        <h2 ref={headingRef} id="coaching-dialog-title" tabIndex={-1} className="min-w-0 self-center text-xl font-bold outline-none md:text-2xl">{option.title}</h2>
        <button type="button" onClick={onClose} aria-label="Close coaching details" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-300 text-2xl hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#946200]">×</button>
      </header>
      <div className={`min-h-0 overflow-y-auto overscroll-contain px-4 md:px-6 ${isTransformation ? "py-4" : "py-5"}`}>
        <p id="coaching-dialog-description" className="mb-4 font-semibold leading-relaxed text-gray-600">{option.supporting}</p>
        <div className="space-y-5">
          {option.groups.map((group, index) => (
            <section key={group.title ?? index} aria-label={group.title ?? `${option.title} inclusions`}>
              {group.title && <h3 className="mb-2 text-lg font-semibold">{group.title}</h3>}
              <ul className={`list-disc pl-5 leading-relaxed text-gray-700 marker:text-[#f5b533] ${isTransformation ? "space-y-1.5" : "space-y-2"}`}>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          ))}
        </div>
        {option.howItWorks && <section className="mt-4 rounded-lg bg-[#f7f7f7] p-3 text-sm leading-relaxed text-gray-700"><h3 className="font-semibold">How it works</h3><p className="mt-1">{option.howItWorks}</p></section>}
      </div>
      <footer className="shrink-0 border-t border-gray-200 px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:px-6">
        <Link href={option.href} onClick={onClose} target={option.href.startsWith("https:") ? "_blank" : undefined} rel={option.href.startsWith("https:") ? "noreferrer" : undefined} className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#f5b533] px-4 py-3 text-center text-sm font-semibold text-black hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">{option.cta}</Link>
      </footer>
    </dialog>
  );
}
