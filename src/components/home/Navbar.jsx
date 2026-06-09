import React from "react";
import { MapPin, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/55 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => scrollTo("home")} className="group flex min-h-11 items-center gap-3 text-left">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-primary/50 bg-primary/10 text-primary shadow-[0_0_35px_hsl(var(--primary)/0.25)] transition group-hover:scale-105">
            <Plane className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-display text-2xl font-semibold leading-none tracking-tight">Burj Wings</span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-primary">Tourism LLC</span>
          </span>
        </button>

        <div className="hidden items-center gap-9 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/75 lg:flex">
          {["Home", "Destinations", "Blog", "About", "Contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase() === "home" ? "home" : item.toLowerCase())} className="min-h-11 transition hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary">
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => scrollTo("destinations")} className="hidden min-h-11 rounded-full border-white/15 bg-white/5 px-5 text-foreground hover:bg-white/10 sm:inline-flex">
            <MapPin className="mr-2 h-4 w-4" /> Explore
          </Button>
          <Button onClick={() => scrollTo("contact")} className="min-h-11 rounded-full bg-primary px-6 font-bold text-primary-foreground shadow-[0_12px_45px_hsl(var(--primary)/0.35)] hover:bg-primary/90">
            Book Now
          </Button>
        </div>
      </nav>
    </header>
  );
}
