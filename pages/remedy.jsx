import KundliNavbar from "@/components/KundliNavbar";
import RemediesHero from "@/components/RemediesHero";
import RemediesIntro from "@/components/RemediesIntro";
import RemediesTypesSection from "@/components/RemediesTypesSection";
import RemediesWhyHow from "@/components/RemediesWhyHow";
import RemediesCTA from "@/components/RemediesCTA";
import OurServicesSection from "@/components/OurServicesSection";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function RemediesPage() {
  return (
    <>
      <RemediesHero />
      <RemediesIntro />
      <RemediesTypesSection />
      <div className="bg-[url(/assets/glaxybg.webp)] bg-cover">
        <RemediesWhyHow />
        <RemediesCTA />
        <OurServicesSection />
      </div>

      <Faq />
      <Testimonials />
    </>
  );
}