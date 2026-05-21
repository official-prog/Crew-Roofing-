import { motion } from "framer-motion";
import { ShieldCheck, Award, MessageSquare, Heart, Clock, DollarSign, Sparkles, Users } from "lucide-react";
import blueprint from "@/assets/blueprint.jpg";

const items = [
  { i: ShieldCheck, t: "Licensed & Insured", d: "Fully licensed and insured roofing contractor operating in Hamilton, Ontario." },
  { i: Award, t: "Quality Materials", d: "We use only proven, high-quality roofing materials built for Ontario's climate." },
  { i: Heart, t: "Integrity First", d: "Honest assessments, fair pricing, and no upselling — ever." },
  { i: MessageSquare, t: "Clear Communication", d: "You'll always know what's happening on your roof, start to finish." },
  { i: Clock, t: "On Time, Every Time", d: "We respect your time and show up when we say we will." },
  { i: DollarSign, t: "Fair & Transparent Pricing", d: "Detailed written quotes with no hidden fees or surprise charges." },
  { i: Users, t: "Local Hamilton Crew", d: "We live and work in the Hamilton community we serve." },
  { i: Sparkles, t: "Attention to Detail", d: "Every job is inspected before we leave. We don't cut corners." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <img src={blueprint} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Why Choose Us</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Dependability you can <em className="copper-text not-italic">count on.</em>
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
