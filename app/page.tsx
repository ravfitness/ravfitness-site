import HomeCoachingPreview from "@/components/home/HomeCoachingPreview";
import HomeResultsPreview from "@/components/home/HomeResultsPreview";
import HomeFitnessHubPreview from "@/components/home/HomeFitnessHubPreview";
import HomeBookingCta from "@/components/home/HomeBookingCta";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import HomeHero from "@/components/home/HomeHero";
import HomeTransformation from "@/components/home/HomeTransformation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1 pt-14 md:pt-16">


        <HomeHero />
        <HomeTransformation />




        <HomeCoachingPreview />




        <HomeResultsPreview />









        <HomeFitnessHubPreview />




        <HomeBookingCta />


      </main>

      {/* FOOTER – BLACK */}
      <SiteFooter />
    </div>
  );
}
