import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ClientResults from "@/components/results/ClientResults";

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-14 md:pt-16">
        <ClientResults />
      </main>
      <SiteFooter />
    </div>
  );
}
