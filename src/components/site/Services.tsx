import { motion } from "framer-motion";
import { Home, CloudLightning, Shield, Wrench, Hammer, Droplets, Search, CheckSquare } from "lucide-react";

const services = [
  { icon: Hammer, title: "Full Roof Replacement", desc: "Complete tear-off and replacement with quality materials, built to last through Hamilton's harsh winters.", tags: ["Shingles", "Tear-off", "Residential"] },
  { icon: Wrench, title: "Roof Repairs", desc: "From minor leaks to major damage — fast, reliable repairs that stop problems before they grow.", tags: ["Leaks", "Patches", "Emergency"] },
  { icon: Home, title: "Residential Roofing", desc: "Full service residential roofing for Hamilton homeowners. No job too big or too small.", tags: ["Homes", "Residential", "Hamilton"] },
  { icon: CloudLightning, title: "Storm Damage Repair", desc: "Rapid response to wind, hail and ice damage. We assess, document and restore your roof fast.", tags: ["Storm", "Hail", "Emergency"] },
  { icon: Droplets, title: "Leak Detection", desc: "Advanced leak tracing and waterproofing to protect your home from water damage year-round.", tags: ["Waterproofing", "Leaks", "Inspection"] },
  { icon: Shield, title: "Flat Roofing", desc: "Expert flat and low-slope roofing systems for garages and home additions across the Hamilton area.", tags: ["Flat", "Low-slope", "Membrane"] },
  { icon: Search, title: "Roof Inspections", desc: "Thorough inspections with detailed written reports — ideal for home buyers and insurance claims.", tags: ["Reports", "Insurance", "Buyers"] },
  { icon: CheckSquare, title: "Eavestroughs & Gutters", desc: "Installation, repair and cleaning of eavestroughs to protect your roof and foundation.", tags: ["Gutters", "Eavestrough", "Drainage"] },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 blueprint-grid">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">What We Do</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            We <em className="copper-text not-italic">"Cover"</em> it all.
          </h2>
          <p className="text-foreground/70 mt-6 max-w-xl">
            From the simplest of repairs to full roof installations, Crew Roofing is Hamilton's trusted choice for residential roofing services done right the first time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-card p-8 min-h-[300px] flex flex-col justify-between overflow-hidden hover:bg-card/60 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/10 transition-all duration-700" />
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl leading-tight mb-3">{s.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
              </div>
              <div className="relative flex flex-wrap gap-1.5 mt-6">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border/60 text-foreground/60">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
