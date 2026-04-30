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
      <KundliHero
        top_bar={'Trusted By 10k+ Users...'}
        title={'Kundli Matchmaking for a Perfect Union'}
        description={'Discover compatibility, harmony, and a successful married life through accurate horoscope matching.'}
        button_name={'Get Started Now'}
        lower_bar={'100% private | Fast delivery'}
        banner_image={'/assets/kundlimatching.webp'}
      />
      <div className="bg-[url(/assets/glaxybg.webp)] bg-cover">
        <KundliMatching />
        <KundliAboutAnalysis />
        <OurServicesSection />
      </div>
      <Faq />
      <Testimonials />
      <Footer />
    </>
  );
}