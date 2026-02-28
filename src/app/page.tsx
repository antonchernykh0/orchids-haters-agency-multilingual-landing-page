'use client';

import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { WhyHaters } from "@/components/WhyHaters";
import { Clients } from "@/components/Clients";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="bg-white min-h-screen font-sans selection:bg-red-500 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <Services />
          <WhyHaters />
          <Process />
          <Clients />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
