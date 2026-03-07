import { Hero } from "@/components/hero";
import { AppsSection } from "@/components/apps-section";
import { Features } from "@/components/features";
import { Downloads } from "@/components/downloads";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AppsSection />
      <Features />
      <Downloads />
      <Footer />
    </main>
  );
}
