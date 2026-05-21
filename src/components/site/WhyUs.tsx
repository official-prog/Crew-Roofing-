import { motion } from "framer-motion";
import { ShieldCheck, Award, MessageSquare, Heart, DollarSign, FileCheck, Sparkles, Users } from "lucide-react";
import blueprint from "@/assets/blueprint.jpg";

const items = [
  { i: ShieldCheck, t: "Licensed & Recognized", d: "RCAT membership is recognized statewide as the mark of a professional Texas roofing contractor." },
  { i: Award, t: "Premium Resources", d: "Access exclusive licensing materials, training courses, and compliance guides." },
  { i: FileCheck, t: "Advocacy-Backed", d: "Your interests represented in Austin by a dedicated non-profit trade association." },
  { i: MessageSquare, t: "Rapid Support", d: "A knowledgeable RCAT team member answers your call or email promptly." },
  { i: Heart, t: "Texas-Based", d: "Founded by Texas roofing professionals, for Texas roofing professionals." },
  { i: DollarSign, t: "Member Savings", d: "Exclusive discounts on materials, insurance, and business services." },
  { i: Users, t: "Statewide Network", d: "500+ member contractors across all 254 Texas counties." },
  { i: Sparkles, t: "Industry Standard", d: "RCAT sets and promotes the highest standards for roofing in Texas." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <img src={blueprint} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Why Join RCAT</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Built by roofers, for <em className="copper-text not-italic">roofers.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.7 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors group"
            >
              <it.i className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-display text-xl">{it.t}</div>
              <div className="text-sm text-foreground/60 mt-2">{it.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
