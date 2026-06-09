import React from "react";
import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { destinations } from "./data";

export default function DestinationVault() {
  return (
    <section id="destinations" className="relative border-b border-border bg-secondary px-5 py-24 lg:px-8">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.26em] text-primary">The Curated Vault</p>
          <h2 className="font-display text-5xl font-light sm:text-7xl">Popular Destinations</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Explore the best of Asia — from futuristic skylines to tropical paradises.</p>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item, index) => (
            <motion.article
              key={item.city}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.65 }}
              className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-background shadow-2xl shadow-black/30"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={`${item.city} package`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-black/20" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1.5 text-xs font-bold backdrop-blur-xl"><Star className="h-3.5 w-3.5 fill-primary text-primary" /> {item.rating}</span>
                <span className="absolute bottom-4 right-4 rounded-full bg-accent px-4 py-2 text-xs font-extrabold text-accent-foreground shadow-xl">{item.price}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold tracking-tight">{item.city}</h3>
                <p className="mt-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"><Clock className="h-4 w-4" /> {item.days}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">{tag}</span>)}
                </div>
                <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="mt-6 min-h-11 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">Explore Destination</Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}