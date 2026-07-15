import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import FeaturedHotels from "@/components/home/FeaturedHotels";
import Hero from "@/components/home/Hero";
import PopularDestinations from "@/components/home/PopularDestinations";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedHotels />
      <WhyChooseUs />
      <PopularDestinations />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}