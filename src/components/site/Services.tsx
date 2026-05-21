import { motion } from "framer-motion";
import { BookOpen, Shield, Users, Award, FileCheck, Megaphone, Wrench, Star } from "lucide-react";

const services = [
  { icon: BookOpen, title: "Licensing Bootcamp", desc: "Structured preparation and resources to help Texas roofing contractors get licensed with confidence.", tags: ["Licensing", "Exam Prep", "Training"] },
  { icon: Megaphone, title: "Industry Advocacy", desc: "Legislative representation in Austin fighting for fair policies and contractor rights across Texas.", tags: ["Legislation", "Policy", "Austin"] },
  { icon: Users, title: "Statewide Network", desc: "Connect with 500+ licensed Texas roofing contractors for referrals, partnerships, and peer support.", tags: ["Network", "Referrals", "Community"] },
  { icon: Award, title: "Member Benefits", desc: "Exclusive discounts on materials, insurance, tools, and services through our trusted partner network.", tags: ["Discounts", "Insurance", "Suppliers"] },
  { icon: FileCheck, title: "Code Compliance", desc: "Stay current with Texas building codes, OSHA standards, and local inspection requirements.", tags: ["Building Codes", "OSHA", "Compliance"] },
  { icon: Shield, title: "Insurance Guidance", desc: "Expert guidance navigating insurance claims, adjusters, and documentation for storm restoration work.", tags: ["Claims", "Adjusters", "Storm"] },
  { icon: Star, title: "Annual Conference", desc: "The Texas Roofing Conference and Expo — the premier annual event for roofing professionals statewide.", tags: ["Conference", "Expo", "Networking"] },
  { icon: Wrench, title: "Technical Training", desc: "Hands-on training programs covering installation standards, safety protocols, and new materials.", tags: ["Safety", "Installation", "Materials"] },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 blueprint-grid">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Member Services</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Everything a Texas roofer <em className="copper-text not-italic">needs.</em>
          </h2>
          <p className="text-foreground/70 mt-6 max-w-xl">
            RCAT is your single point of support for licensing, advocacy, training, and the connections that grow your roofing business across Texas.
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
