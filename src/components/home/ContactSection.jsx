import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const submit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = encodeURIComponent(`Travel request from ${form.get("name")} (${form.get("email")}): ${form.get("message")}`);
    window.open(`https://wa.me/971501660310?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-background px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-card p-7 shadow-2xl shadow-black/30 sm:p-10">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.26em] text-primary">Start Your Journey Today</p>
          <h2 className="font-display text-5xl font-light">Plan Your Adventure</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Input name="name" required placeholder="Full name" className="min-h-12 rounded-full bg-background/70" />
            <Input name="email" required type="email" placeholder="Email address" className="min-h-12 rounded-full bg-background/70" />
            <Input name="phone" placeholder="Phone number" className="min-h-12 rounded-full bg-background/70" />
            <Input name="destination" placeholder="Preferred destination" className="min-h-12 rounded-full bg-background/70" />
            <Textarea name="message" required placeholder="Tell us what kind of journey you want..." className="min-h-32 rounded-3xl bg-background/70 sm:col-span-2" />
          </div>
          <Button className="mt-6 min-h-12 w-full rounded-full bg-primary font-bold text-primary-foreground hover:bg-primary/90"><Send className="mr-2 h-4 w-4" /> Send Inquiry via WhatsApp</Button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-primary/20 bg-primary p-8 text-primary-foreground shadow-2xl shadow-black/30">
            <h3 className="text-3xl font-extrabold">Get in Touch</h3>
            <p className="mt-3 text-primary-foreground/75">Our specialists are here to help you create unforgettable memories.</p>
            <div className="mt-8 space-y-5">
              <p className="flex gap-4"><Phone className="h-5 w-5" /> +971 50 166 0310</p>
              <p className="flex gap-4"><Mail className="h-5 w-5" /> airport@burjwings.com</p>
              <p className="flex gap-4"><MapPin className="h-5 w-5" /> 6th floor, office 301, Al Attar Building 2, Bur Dubai</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-card p-8">
            <h3 className="text-2xl font-bold">Why Choose Us?</h3>
            <ul className="mt-5 space-y-4 text-muted-foreground">
              <li>24/7 support throughout your journey.</li>
              <li>Custom itineraries for premium travel moments.</li>
              <li>Best price guarantee for complete peace of mind.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}