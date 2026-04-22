import KundliNavbar from "@/components/KundliNavbar";
import KundliHero from "@/components/KundliHero";
import KundliMatching from "@/components/KundliMatchingSection";
import KundliWhyChoose from "@/components/KundliWhyChoose";
import OurServicesSection from "@/components/OurServicesSection";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import KundliAboutAnalysis from "@/components/KundliAboutAnalysis";

export default function matchMaking() {
  return (
    <>
        <KundliNavbar />
        <KundliHero />
        <KundliMatching />   
        <KundliAboutAnalysis />     
        <KundliWhyChoose />
        <OurServicesSection />
        <Faq />
        <Testimonials />
        <Footer />
    </>
  );
}