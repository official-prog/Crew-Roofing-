import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Showcase } from "@/components/site/Showcase";
import { Process } from "@/components/site/Process";
import { Storm } from "@/components/site/Storm";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useLenis } from "@/lib/lenis";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Crew Roofing | Hamilton's Trusted Roofing Company" },
      { name: "description", content: "Crew Roofing serves residential roofing customers in the greater Hamilton area. Full replacements, repairs, storm damage and inspections — dependability, integrity and attention to detail." },
      { property: "og:title", content: "Crew Roofing | Hamilton, Ontario" },
      { property: "og:description", content: "Full service residential roofing in the greater Hamilton area. Repairs, replacements, storm damage and inspections." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  useLenis();
  return (
    <div className="dark relative">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Showcase />
        <Process />
        <Storm />
        <WhyUs />
        <Testimonials />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
