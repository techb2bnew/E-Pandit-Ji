
import AboutUsContent, { AboutUsBanner } from "@/components/AboutUsBanner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import KundliNavbar from "@/components/KundliNavbar";
import OurServicesSection from "@/components/OurServicesSection";
import RemediesCTA from "@/components/RemediesCTA";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function AboutUs() {
  return (
    <div>
     <KundliNavbar />
     <AboutUsBanner />
     <AboutUsContent />
     <div className="bg-[url(/assets/glaxybg.webp)] bg-cover">
      <RemediesCTA />
      <OurServicesSection />
      </div>
     <Faq />
     <Testimonials />
     <Footer /> 
    </div>
  );
}