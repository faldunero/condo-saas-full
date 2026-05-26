import { LandingHero } from "@/components/landing/LandingHero";
import { LandingStats } from "@/components/landing/LandingStats";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingPortals } from "@/components/landing/LandingPortals";
import { LandingLey } from "@/components/landing/LandingLey";
import { LandingPricing } from "@/components/landing/LandingPricing";
import { LandingCTA } from "@/components/landing/LandingCTA";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <LandingHero />
      <LandingStats />
      <LandingFeatures />
      <LandingPortals />
      <LandingLey />
      <LandingPricing />
      <LandingCTA />
      <LandingFooter />
    </main>
  );
}
