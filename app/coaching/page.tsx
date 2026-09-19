import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CoachingServices from "@/components/coaching/CoachingServices";

export const metadata: Metadata = {
  title: "Choose Your Coaching | RavFitness Glen Iris",
  description: "Three ways to train. Choose what fits your goals and lifestyle. Personal training, online coaching and transformation programs with Rav.",
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: "Choose Your Coaching | RavFitness Glen Iris",
    description: "Three ways to train. Choose what fits your goals and lifestyle.",
    url: "/coaching",
    siteName: "Rav Fitness",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Rav Fitness — Personal Trainer in Glen Iris, Melbourne" }],
  },
};

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-14 md:pt-16">
        <CoachingServices />
      </main>
      <SiteFooter />
    </div>
  );
}
