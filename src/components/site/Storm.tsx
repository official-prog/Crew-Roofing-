import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import storm from "@/assets/storm.jpg";
import { Phone, Calendar } from "lucide-react";

export function Storm() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <section id="events" ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={storm} alt="Texas roofing bootcamp" className="w-full h-full object-cover" loading="lazy" />
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
            <Calendar className="w-3 h-3" /> Upcoming Event
          </span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-6 text-balance">
            Get Licensed <em className="copper-text not-italic">with RCAT.</em>
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-foreground/70">
            <span>Tuesday, June 16, 2026 &nbsp;·&nbsp; 9:00 AM – 4:00 PM CST</span>
            <span>QXO, 108 Denson Dr, Austin, TX</span>
          </div>
          <p className="text-foreground/70 mt-4 leading-relaxed">
            If you want to stand out in Texas roofing, this is where it starts. The bootcamp gives you the structure and preparation needed to move forward with confidence. Application deadline: <strong className="text-foreground">June 2 at 5 PM.</strong>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:shadow-[var(--shadow-glow)] transition-shadow">
              <Calendar className="w-4 h-4" /> Register Now
            </a>
            <a href="tel:+15122517690" className="inline-flex items-center gap-3 rounded-full glass px-7 py-4 font-medium hover:bg-white/10 transition">
              <Phone className="w-4 h-4" /> (512) 251-7690
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
