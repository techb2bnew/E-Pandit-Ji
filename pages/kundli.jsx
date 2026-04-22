import KundliNavbar from "@/components/KundliNavbar";
import KundliHero from "@/components/KundliHero";
import KundliFormSection from "@/components/KundliFormSection";
import KundliAboutAnalysis from "@/components/KundliAboutAnalysis";
import KundliWhyChoose from "@/components/KundliWhyChoose";
import OurServicesSection from "@/components/OurServicesSection";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function KundliPage() {
  return (
    <>
        <KundliNavbar />
        <KundliHero />
        <KundliFormSection />
        <KundliAboutAnalysis />
        <KundliWhyChoose />
        <OurServicesSection />
        <Faq />
        <Testimonials />
        <Footer />
    </>
  );
}