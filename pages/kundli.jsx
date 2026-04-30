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
        <KundliHero
         top_bar={'Trusted By 10k+ Users...'}
         title={'Create Your Accurate Kundli Instantly'}
         description={'Get your detailed birth chart (Janam Kundli) with precise Vedic calculations. Understand your future, career, marriage, and life path.'} 
         button_name={'Get Started Now'}
         lower_bar={'100% private | Fast delivery'}
         banner_image={'/assets/kundli-2.png'}
        />
        <KundliFormSection />
        <KundliAboutAnalysis />
        {/* <KundliWhyChoose /> */}
        <OurServicesSection />
        <Faq />
        <Testimonials />
        <Footer />
    </>
  );
}