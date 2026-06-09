import React from "react";
import Navbar from "@/components/home/Navbar";
import HeroSlider from "@/components/home/HeroSlider";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import DestinationVault from "@/components/home/DestinationVault";
import StorySection from "@/components/home/StorySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <HeroSlider />
      <FeatureHighlights />
      <DestinationVault />
      <StorySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}