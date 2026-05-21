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
      { title: "RCAT | Roofing Contractors Association of Texas" },
      { name: "description", content: "RCAT is a statewide non-profit trade association supporting Texas roofing contractors with licensing, advocacy, training, and a powerful statewide network." },
      { property: "og:title", content: "RCAT | Roofing Contractors Association of Texas" },
      { property: "og:description", content: "Statewide non-profit supporting Texas roofing professionals with licensing, advocacy, and training." },
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
