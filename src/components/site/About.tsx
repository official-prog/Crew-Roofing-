import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import crew from "@/assets/crew.jpg";
import roof from "@/assets/roof-detail.jpg";

const stats = [
  { v: "10+", l: "Years experience" },
  { v: "500+", l: "Roofs completed" },
  { v: "100%", l: "Satisfaction rate" },
  { v: "24/7", l: "Emergency response" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section ref={ref} id="about" className="relative py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">About Crew Roofing</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Hamilton's most <em className="copper-text not-italic">dependable</em> roofing crew.
          </h2>
          <p className="text-foreground/70 leading-relaxed max-w-md">
            We are a full service Roofing Company! From the simplest of repairs to full roof installations, we "Cover" it all. We serve residential roofing customers in the greater Hamilton area, operating with dependability, integrity and attention to detail.
          </p>
          <div className="grid grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card p-6"
              >
                <div className="font-display text-4xl md:text-5xl copper-text">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-foreground/60 mt-2">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[60%] h-[70%] rounded-3xl overflow-hidden shadow-[var(--shadow-elevate)]">
            <img src={crew} alt="Crew Roofing team on site" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-[var(--shadow-elevate)]">
            <img src={roof} alt="Quality roof installation" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <div className="absolute -bottom-4 right-10 glass rounded-2xl p-5 max-w-[240px]">
            <div className="text-xs uppercase tracking-widest text-primary mb-1">Hamilton, ON</div>
            <div className="text-sm text-foreground/80">Fully licensed and insured roofing contractor serving the Hamilton area.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
