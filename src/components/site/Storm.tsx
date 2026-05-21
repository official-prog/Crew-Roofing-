import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import storm from "@/assets/storm.jpg";
import { Phone, Zap } from "lucide-react";

export function Storm() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <section id="events" ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={storm} alt="Storm damage roofing Hamilton" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <Zap className="w-3 h-3" /> Emergency Roof Repair
          </span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-6 text-balance">
            Storm hit? <em className="copper-text not-italic">Call the Crew.</em>
          </h2>
          <p className="text-foreground/70 mt-6 leading-relaxed">
            Rapid response to wind, hail and ice damage across the Hamilton area. We assess, document and restore your roof fast — protecting your home when it matters most.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+12894897141" className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:shadow-[var(--shadow-glow)] transition-shadow">
              <Phone className="w-4 h-4" /> 289-489-7141
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full glass px-7 py-4 font-medium hover:bg-white/10 transition">
              Get Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
