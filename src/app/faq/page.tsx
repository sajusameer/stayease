import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import FAQ from "@/components/home/FAQ";

export default function FAQPage() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20">
      <Container>

        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to the most common questions about booking hotels, payments, cancellations, and using StayEase."
        />

        <div className="mt-12">
          <FAQ />
        </div>

      </Container>
    </section>
  );
}