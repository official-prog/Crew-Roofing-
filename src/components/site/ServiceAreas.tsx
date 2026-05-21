import { motion } from "framer-motion";

const regions = ["Hamilton", "Burlington", "Stoney Creek", "Ancaster", "Dundas", "Waterdown", "Grimsby", "Oakville", "Flamborough", "Binbrook"];

export function ServiceAreas() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Service Areas</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Greater Hamilton, <em className="copper-text not-italic">fully covered.</em>
          </h2>
          <p className="text-foreground/70 mt-6 max-w-md leading-relaxed">
            Based in Hamilton, Ontario — we serve residential roofing customers across the entire greater Hamilton area and surrounding communities.
          </p>
          <div className="flex flex-wrap gap-2 mt-10">
            {regions.map((r, i) => (
              <motion.span
                key={r}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full border border-border/60 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition cursor-default"
              >
                {r}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Ontario / Hamilton visual */}
        <div className="relative aspect-square max-w-lg mx-auto flex items-center justify-center">
          <div className="glass rounded-3xl p-10 w-full text-center space-y-6">
            <div className="font-display text-7xl md:text-8xl copper-text leading-none">ON</div>
            <div className="text-foreground/60 text-sm uppercase tracking-widest">Ontario, Canada</div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { city: "Hamilton", note: "HQ" },
                { city: "Burlington", note: "Serviced" },
                { city: "Stoney Creek", note: "Serviced" },
                { city: "Ancaster", note: "Serviced" },
              ].map((p) => (
                <motion.div
                  key={p.city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-3 text-left"
                >
                  <div className="text-xs text-primary uppercase tracking-widest">{p.note}</div>
                  <div className="font-medium text-sm mt-0.5">{p.city}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
