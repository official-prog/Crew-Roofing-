import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Contact Us", d: "Call or fill out our form — we respond fast, same day wherever possible." },
  { n: "02", t: "Free Inspection", d: "We come to your property and assess your roof thoroughly at no charge." },
  { n: "03", t: "Written Quote", d: "You receive a clear, itemized quote with no hidden costs or pressure." },
  { n: "04", t: "Schedule the Work", d: "We book at a time that works for you and confirm 24 hours in advance." },
  { n: "05", t: "Crew on Site", d: "Our experienced crew arrives on time and gets straight to work." },
  { n: "06", t: "Quality Install", d: "Every installation follows manufacturer specs using proven materials." },
  { n: "07", t: "Site Cleanup", d: "We clean up completely — nails, debris, packaging. Your yard is left spotless." },
  { n: "08", t: "Final Walkthrough", d: "We inspect the finished roof with you before we consider the job done." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="relative py-32 md:py-48 bg-card/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">How It Works</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Simple process. <em className="copper-text not-italic">Zero stress.</em>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />
          <motion.div style={{ height: lineH }} className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 shadow-[0_0_20px_var(--copper)]" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="font-display text-7xl md:text-8xl copper-text leading-none">{s.n}</div>
                  <h3 className="font-display text-3xl md:text-4xl mt-2">{s.t}</h3>
                  <p className="text-foreground/60 mt-3 max-w-sm md:inline-block">{s.d}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background shadow-[0_0_20px_var(--copper)]" />
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
