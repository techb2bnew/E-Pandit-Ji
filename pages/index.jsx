import Head from "next/head";
import Navbar from "@/components/Navbar";
import KundliNavbar from "@/components/KundliNavbar";
import Hero from "@/components/Hero";
import ServicesStrip from "@/components/ServicesStrip";
import AboutSection from "@/components/AboutSection";
import ZodiacSection from "@/components/ZodiacSection";
import OurServicesSection from "@/components/OurServicesSection";
import Consultation from "@/components/ConsultBlogSection";
import Subscription from "@/components/Subscription";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Astroyogi - Kundli & Astrology Guidance</title>
        <meta name="description" content="Get accurate Kundli and instant astrology guidance from expert astrologers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ServicesStrip />
      <AboutSection />
      <ZodiacSection />
       <div className="bg-[url(/assets/glaxybg.webp)] bg-cover">
         <OurServicesSection />
       </div>
      <Consultation />
      <Subscription />
      <Faq />
      <Testimonials />
    </>
  );
}
