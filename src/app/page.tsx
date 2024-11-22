import { Hero } from "@/components/sections/Hero";
import { InvestorFeatures } from "@/components/sections/InvestorFeatures";
import { OwnerFeatures } from "@/components/sections/OwnerFeatures";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <Hero />
      <InvestorFeatures />
      <OwnerFeatures />
      <CTA />
    </main>
  );
}
