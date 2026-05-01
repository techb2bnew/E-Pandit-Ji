import KundliNavbar from "@/components/KundliNavbar";
import KundliHero from "@/components/KundliHero";
import KundliMatching from "@/components/KundliMatchingSection";
import KundliWhyChoose from "@/components/KundliWhyChoose";
import OurServicesSection from "@/components/OurServicesSection";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import KundliAboutAnalysis from "@/components/KundliAboutAnalysis";

const Ganeshsectiondata = {
  title : 'What We Analyze While Matching Kundli',
  // description : 'We carefully examine key astrological factors to provide accurate insights and meaningful life guidance for you.',
  keys : [
  "Guna Milan (Compatibility Score): We compare 36 gunas for overall compatibility between partners.",
  "Mangal Dosha (Manglik Status): We analyze Mars placement affecting marriage stability and harmony.",
  "Planetary Positions: We study planets for balance and relationship harmony.",
  "Nadi Dosha: We check health, genetics, and emotional compatibility carefully.",
  "Bhakoot Dosha: We evaluate emotional bonding, finances, and family harmony after marriage.",
  "Dasha & Timing: We assess planetary periods for suitable marriage timing."
]
};

const whychoosedata = {
  title : 'Why Choose Us for Kundli Matching',
  // description : 'We provide accurate, personalized Kundli insights with expert guidance, ensuring clarity, trust, and meaningful life decisions.',
  keys : [
  "Accurate Analysis: We provide precise and reliable kundli matching results.",
  "Experienced Astrologers: Our experts ensure deep and correct horoscope analysis.",
  "Personalized Reports: We offer customized kundli insights for every couple.",
  "Detailed Compatibility Check: We thoroughly analyze all important astrological factors.",
  "Easy Consultation: Quick and simple process for kundli matching services.",
  "Trusted Guidance: We provide honest advice for successful married life."
]
};

const faqs = [
  {
    question: "What is kundli matching?",
    answer:
      "Kundli matching is the process of comparing two horoscopes to check compatibility for marriage.",
  },
  {
    question: "Why is kundli matching important before marriage?",
    answer:
      "It helps ensure emotional, mental, and physical compatibility between partners for a happy married life.",
  },
  {
    question: "What factors are checked in kundli matching?",
    answer:
      "Guna Milan, Mangal Dosha, Nadi Dosha, Bhakoot Dosha, and planetary positions are analyzed.",
  },
  {
    question: "Can kundli matching predict a successful marriage?",
    answer:
      "It provides guidance on compatibility and possible challenges in married life.",
  },
  {
    question: "Is kundli matching necessary for love marriages?",
    answer:
      "Yes, it helps understand compatibility even in love relationships.",
  },
  {
    question: "Are remedies available for doshas in kundli?",
    answer:
      "Yes, astrologers suggest remedies to reduce or balance doshas effectively.",
  },
];

const testimonials = [
  {
    name: "Anjali Sharma",
    text: "Kundli matching service was extremely accurate and insightful. It helped us understand compatibility clearly before marriage. The guidance was simple, practical, and truly helpful for making an informed decision together.",
  },
  {
    name: "Priya Verma",
    text: "Very satisfied with kundli matching report. It explained all important doshas and compatibility factors in detail. The consultation was clear, professional, and helped us feel confident about our relationship future.",
  },
  {
    name: "Neha Gupta",
    text: "Excellent kundli analysis service with deep astrological understanding. The report highlighted strengths and weaknesses in our match. It really helped us plan marriage decisions with better clarity and peace of mind.",
  },
  {
    name: "Kavita Singh",
    text: "Highly accurate kundli matching service. The astrologer explained everything patiently and in detail. We received clear insights about compatibility, which helped us understand each other better before marriage planning.",
  },
  {
    name: "Pooja Mehta",
    text: "Great experience with kundli matching. The report was detailed and easy to understand. It guided us about marriage compatibility and possible challenges, making our decision process smooth and stress-free.",
  },
  {
    name: "Ritu Yadav",
    text: "Very helpful kundli matching service with accurate predictions. It provided deep insights into relationship compatibility. The explanations were simple, and it really helped us move forward with confidence in marriage.",
  },
];
export default function matchMaking() {
  return (
    <>
      <KundliHero
        top_bar={'Trusted By 10k+ Users...'}
        title={'Expert Kundli Matching for Lifelong Relationship Success '}
        description={'Matching kundli helps ensure compatibility, mutual understanding, and harmony, leading to long-lasting relationship success and stability.'}
        button_name={'Get Started Now'}
        lower_bar={'100% private | Fast delivery'}
        banner_image={'/assets/kundlimatching.webp'}
      />
      <div className="bg-[url(/assets/glaxybg.webp)] bg-cover">
        <KundliMatching />
        <KundliAboutAnalysis Ganeshsectiondata={Ganeshsectiondata} whychoosedata={whychoosedata}/>
        <OurServicesSection />
      </div>
      <Faq faqs={faqs}/>
      <Testimonials testimonials={testimonials} />
    </>
  );
}