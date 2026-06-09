import React, { useEffect, useState } from "react";
import { Instagram, Facebook, Mail, Phone, Plane } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function Footer() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("reducedMotion") === "true";
    setReduced(stored);
  }, []);

  const updateReducedMotion = (value) => {
    setReduced(value);
    localStorage.setItem("reducedMotion", String(value));
    window.dispatchEvent(new CustomEvent("reduced-motion-change", { detail: value }));
  };

  return (
    <footer className="border-t border-border bg-secondary px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3"><Plane className="h-8 w-8 text-primary" /><div><div className="font-display text-3xl font-semibold">Burj Wings</div><div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">Tourism LLC</div></div></div>
          <p className="mt-5 leading-7 text-muted-foreground">Creating extraordinary travel experiences with luxury precision and personal care.</p>
        </div>
        <div><h4 className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Quick Links</h4><div className="mt-5 space-y-3 text-muted-foreground"><p>Destinations</p><p>Travel Blog</p><p>Customer Reviews</p><p>About Us</p></div></div>
        <div><h4 className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Contact</h4><div className="mt-5 space-y-3 text-muted-foreground"><p className="flex gap-2"><Phone className="h-4 w-4" /> +971 50 166 0310</p><p className="flex gap-2"><Mail className="h-4 w-4" /> airport@burjwings.com</p></div></div>
        <div><h4 className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Social</h4><div className="mt-5 flex gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-background"><Instagram /></span><span className="grid h-11 w-11 place-items-center rounded-full bg-background"><Facebook /></span></div><label className="mt-8 flex items-center justify-between gap-4 text-sm text-muted-foreground">Reduced Motion <Switch checked={reduced} onCheckedChange={updateReducedMotion} /></label></div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">© 2026 Burj Wings. All rights reserved.</div>
    </footer>
  );
}