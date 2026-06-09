import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slides } from "./data";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const active = slides[index];
  const next = () => setIndex((value) => (value + 1) % slides.length);
  const prev = () => setIndex((value) => (value - 1 + slides.length) % slides.length);

  useEffect(() => {
    setReducedMotion(localStorage.getItem("reducedMotion") === "true");
    const handleMotionChange = (event) => setReducedMotion(event.detail);
    window.addEventListener("reduced-motion-change", handleMotionChange);
    const timer = window.setInterval(next, 6200);
    return () => {
      window.removeEventListener("reduced-motion-change", handleMotionChange);
      window.clearInterval(timer);
    };
  }, []);

  const counter = useMemo(() => String(index + 1).padStart(2, "0"), [index]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden border-b border-border bg-background pt-20">
      <AnimatePresence mode="wait">
        <motion.img
          key={active.image}
          src={active.image}
          alt={`${active.title} travel destination`}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.08, filter: "blur(14px)" }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, filter: "blur(16px)" }}
          transition={{ duration: reducedMotion ? 0.35 : 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,transparent_0%,hsl(var(--background)/0.35)_32%,hsl(var(--background)/0.9)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/58 to-background/5" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 top-28 hidden h-[34rem] w-[34rem] rounded-full border border-primary/20 lg:block"
      >
        <div className="absolute left-1/2 top-0 h-8 w-px bg-primary/70" />
        <div className="absolute bottom-0 left-1/2 h-8 w-px bg-primary/70" />
        <div className="absolute left-0 top-1/2 h-px w-8 bg-primary/70" />
        <div className="absolute right-0 top-1/2 h-px w-8 bg-primary/70" />
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-16 lg:px-8">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.7 }}
              className="space-y-7"
            >
              <div className="flex flex-wrap items-center gap-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {active.location}</span>
                <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 fill-primary" /> {active.rating}</span>
              </div>
              <h1 className="font-display text-6xl font-light leading-[0.92] tracking-tight text-foreground sm:text-7xl lg:text-[8.5rem]">
                {active.title}
              </h1>
              <div className="h-px w-48 bg-gradient-to-r from-primary to-transparent" />
              <p className="max-w-xl font-heading text-2xl font-light text-primary sm:text-3xl">{active.kicker}</p>
              <p className="max-w-2xl text-lg leading-8 text-foreground/78 sm:text-xl">{active.description}</p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="min-h-12 rounded-full bg-primary px-8 font-bold text-primary-foreground shadow-[0_18px_55px_hsl(var(--primary)/0.35)] hover:bg-primary/90">
                  Start Your Journey
                </Button>
                <span className="font-mono text-xs uppercase tracking-[0.26em] text-foreground/50">Curated Asia Experiences</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.title}
            onClick={() => setIndex(slideIndex)}
            aria-label={`Show ${slide.title}`}
            className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${slideIndex === index ? "w-10 bg-primary" : "w-2.5 bg-white/45 hover:bg-white/80"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-4 rounded-full border border-white/10 bg-background/45 p-2 backdrop-blur-xl lg:flex">
        <button onClick={prev} aria-label="Previous slide" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"><ChevronLeft /></button>
        <div className="min-w-20 overflow-hidden text-center font-mono text-xs tracking-[0.28em] text-foreground/70">
          <motion.span key={counter} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block text-primary">{counter}</motion.span> / {String(slides.length).padStart(2, "0")}
        </div>
        <button onClick={next} aria-label="Next slide" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"><ChevronRight /></button>
      </div>
    </section>
  );
}