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
const faqs = [
  {
    question: "What is the difference between astrology and numerology?",
    answer:
      "Astrology is based on planetary positions and your birth chart (Kundli), while numerology uses numbers related to your birth date and name to predict life patterns.",
  },
  {
    question: "How accurate are your astrology and numerology predictions?",
    answer:
      "Our predictions are based on proven methods and expert analysis, offering highly accurate insights when correct birth details and information are provided.",
  },
  {
    question: "What details are required for a Kundli or numerology report?",
    answer:
      "For astrology, you need your date, time, and place of birth. For numerology, your date of birth and full name are usually required.",
  },
  {
    question: "Can I consult an astrologer or numerologist online?",
    answer:
      "Yes, you can easily consult our expert astrologers and numerologists online through chat or call from anywhere.",
  },
  {
    question: "What kind of guidance can I get from these services?",
    answer:
      "You can get guidance on career, love, marriage, finance, health, and important life decisions based on your Kundli or numbers.",
  },
  {
    question: "Do you provide remedies for problems suggested in predictions?",
    answer:
      "Yes, our experts also suggest simple and effective remedies to help reduce challenges and improve positive outcomes in your life.",
  },
];
const testimonials = [
  {
    name: "Rahul Sharma",
    text: "I was amazed by the accuracy of my Kundli reading. The astrologer explained everything clearly and gave practical remedies that really helped improve my confidence and decision-making.",
  },
  {
    name: "Priya Mehta",
    text: "The numerology report was simple yet very insightful. I understood my strengths better and started following the suggestions, which positively impacted my career and personal life.",
  },
  {
    name: "Amit Verma",
    text: "Great experience consulting their astrologer online. The guidance on marriage and compatibility was detailed and helpful. I feel more confident about my future decisions now.",
  },
  {
    name: "Neha Gupta",
    text: "Their daily horoscope updates are very useful. I check them regularly before planning my day, and the predictions often match my real-life situations surprisingly well.",
  },
  {
    name: "Sandeep Kumar",
    text: "I tried both astrology and numerology services, and both were accurate. The experts are knowledgeable and patient, making the entire experience smooth and trustworthy.",
  },
  {
    name: "Pooja Singh",
    text: "Very professional service with quick responses. The remedies suggested were easy to follow and effective. I highly recommend their astrology consultations for anyone seeking genuine guidance and clarity.",
  },
];
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
        <OurServicesSection  />
      </div>
      {/* <Consultation />
      <Subscription />  */}
      <Faq
        faqs={faqs}
      />
      <Testimonials  testimonials={testimonials}/>
    </>
  );
}
