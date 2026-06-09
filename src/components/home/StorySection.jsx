import React from "react";
import { motion } from "framer-motion";
import { Calendar, UserRound } from "lucide-react";

const stories = [
  { title: "10 Hidden Gems in Southeast Asia You Must Visit", category: "Adventure", author: "Sarah Chen", date: "Dec 15, 2024", image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80", wide: true },
  { title: "The Ultimate Guide to European Christmas Markets", category: "Culture", author: "Marco Weber", date: "Dec 12, 2024", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80" },
  { title: "Sustainable Travel: How to Explore Responsibly", category: "Eco-Travel", author: "Emma Thompson", date: "Dec 10, 2024", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80" }
];

export default function StorySection() {
  return (
    <section id="blog" className="border-b border-border bg-background px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-primary/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">Travel Blog</span>
          <h2 className="mt-6 font-display text-5xl font-light sm:text-7xl">Stories from the Road</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Get inspired by travel stories, tips, and insider guides from destinations around the world.</p>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {stories.map((story, index) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.65 }}
              className={`group overflow-hidden rounded-[1.8rem] border border-white/10 bg-card shadow-2xl shadow-black/25 ${story.wide ? "md:col-span-2 md:grid md:grid-cols-[1.15fr_1fr]" : ""}`}
            >
              <div className="relative h-72 overflow-hidden md:h-full">
                <img src={story.image} alt={story.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground">{story.category}</span>
              </div>
              <div className="flex flex-col justify-center p-7">
                <h3 className="text-3xl font-extrabold leading-tight tracking-tight">{story.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">Discover pristine landscapes, vibrant cultures, and remarkable moments designed for modern explorers.</p>
                <div className="mt-7 flex flex-wrap gap-5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="flex items-center gap-2"><UserRound className="h-4 w-4" /> {story.author}</span>
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {story.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}