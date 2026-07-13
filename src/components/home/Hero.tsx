import Container from "@/components/common/Container";

import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      <Container className="min-h-[85vh] flex items-center py-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}