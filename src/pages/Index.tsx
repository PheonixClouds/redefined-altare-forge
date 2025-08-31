import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
