import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const stats = ["1,000+ Happy Travelers", "4.9/5 Average Rating", "50+ Destinations", "99% Satisfaction Rate"];

export default function ReviewsSection() {
  return (
    <section className="relative border-b border-border bg-secondary px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,hsl(var(--primary)/0.14),transparent_35%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.26em] text-primary">Verified Voices</p>
        <h2 className="font-display text-5xl font-light sm:text-7xl">What Our Travelers Say</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-white/10 bg-background p-8 shadow-2xl shadow-black/35 sm:p-12"
        >
          <Quote className="mx-auto h-12 w-12 text-primary" />
          <div className="mt-5 flex justify-center gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-primary" />)}</div>
          <p className="mt-7 text-xl italic leading-9 text-foreground/86">“Outstanding attention to detail and customer care. From temple tours to beachfront yoga, every moment was thoughtfully curated.”</p>
          <div className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Emma Thompson · Bali Wellness Retreat</div>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const [value, ...label] = stat.split(" ");
            return <div key={stat} className="rounded-2xl border border-white/10 bg-background/55 p-6 backdrop-blur-xl"><div className="text-3xl font-extrabold text-primary">{value}</div><div className="mt-2 text-sm text-muted-foreground">{label.join(" ")}</div></div>;
          })}
        </div>
      </div>
    </section>
  );
}