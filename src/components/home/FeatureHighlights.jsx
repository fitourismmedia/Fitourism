import React from "react";
import { motion } from "framer-motion";
import { Compass, Heart, Camera } from "lucide-react";

const features = [
  { icon: Compass, title: "Expert Guidance", text: "Personalized itineraries shaped around your pace, taste, and travel dreams." },
  { icon: Heart, title: "Unforgettable Moments", text: "Every detail is curated to create rare memories that feel effortless and premium." },
  { icon: Camera, title: "Picture Perfect", text: "Discover scenic destinations, hidden corners, and Instagram-worthy experiences." }
];

export default function FeatureHighlights() {
  return (
    <section id="about" className="relative border-b border-border bg-background px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary)/0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.26em] text-primary">Precision Travel Design</p>
          <h2 className="font-display text-5xl font-light tracking-tight sm:text-7xl">Discover Your Next Adventure</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">We craft extraordinary travel experiences that transform wanderlust into lifelong memories.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.12, duration: 0.65 }}
              whileHover={{ y: -8 }}
              className="group rounded-[2rem] border border-white/10 bg-card/70 p-8 shadow-2xl shadow-black/25 backdrop-blur-xl"
            >
              <div className="mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[0_15px_55px_hsl(var(--primary)/0.25)] transition group-hover:rotate-6 group-hover:scale-110">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight">{feature.title}</h3>
              <p className="leading-7 text-muted-foreground">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}