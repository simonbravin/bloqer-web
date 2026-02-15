import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { ValueCards } from "@/components/home/ValueCards";
import { ModulesTeaser } from "@/components/home/ModulesTeaser";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABand } from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ValueCards />
      <ModulesTeaser />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  );
}
