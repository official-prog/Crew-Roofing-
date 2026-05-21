import { motion } from "framer-motion";

const quotes = [
  { q: "RCAT helped me get licensed and connected with contractors across Texas. Best investment I made in my roofing business.", n: "John Martinez", l: "Dallas, TX" },
  { q: "The licensing bootcamp was exactly what I needed. Clear, organized, and worth every minute. I passed my exam on the first try.", n: "Sarah Chen", l: "Houston, TX" },
  { q: "RCAT advocates for us in Austin. Having a statewide voice for our industry is invaluable as a small contractor.", n: "Mike Rodriguez", l: "Fort Worth, TX" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 md:py-48 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Member Stories</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance max-w-3xl">
            The trust of Texas <em className="copper-text not-italic">roofers.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((qu, i) => (
            <motion.figure
              key={qu.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-8 flex flex-col h-full"
            >
              <div className="font-display text-6xl copper-text leading-none mb-4">"</div>
              <blockquote className="text-lg leading-relaxed text-foreground/85 flex-1">{qu.q}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/40">
                <div className="font-medium">{qu.n}</div>
                <div className="text-xs text-foreground/60 mt-1">{qu.l}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
