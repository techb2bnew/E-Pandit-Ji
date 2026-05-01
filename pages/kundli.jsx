import KundliNavbar from "@/components/KundliNavbar";
import KundliHero from "@/components/KundliHero";
import KundliFormSection from "@/components/KundliFormSection";
import KundliAboutAnalysis from "@/components/KundliAboutAnalysis";
import KundliWhyChoose from "@/components/KundliWhyChoose";
import OurServicesSection from "@/components/OurServicesSection";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What details are required to make a Kundli?",
    answer:
      "You need your exact date of birth, time of birth, and place of birth for accurate Kundli preparation.",
  },
  {
    question: "How accurate is a Kundli?",
    answer:
      "A Kundli is highly accurate when correct birth details are provided, as it is based on precise planetary calculations in Vedic astrology.",
  },
  {
    question: "What information can I get from my Kundli?",
    answer:
      "Your Kundli provides insights into career, marriage, health, finances, personality traits, and future opportunities.",
  },
  {
    question: "Can Kundli help in marriage matching?",
    answer:
      "Yes, Kundli matching (Kundli Milan) is widely used to check compatibility and ensure a harmonious married life.",
  },
  {
    question: "How long does it take to create a Kundli?",
    answer:
      "Kundli can be generated instantly with software, but detailed analysis by expert astrologers may take a little more time for accurate guidance.",
  },
  {
    question: "Can I get remedies based on my Kundli?",
    answer:
      "Yes, based on your Kundli analysis, expert astrologers suggest simple and effective remedies to reduce negative influences and improve positive outcomes in your life.",
  },
];

const Ganeshsectiondata = {
  title : 'What We Analyze to Create Your Kundli',
  description : 'We carefully examine key astrological factors to provide accurate insights and meaningful life guidance for you.',
  keys : [
  'Planetary Positions (Grah Sthiti)',
  'Nakshatra & Rashi Analysis',
  'Birth Time, Date & Place Details',
  'Panchang Elements (Tithi, Yoga, Karana)',
  'House (Bhav) Placement & Influence',
  'Dasha & Planetary Period Analysis'
]
};

const whychoosedata = {
  title : 'Why Choose Us for Kundli Matching',
  description : 'We provide accurate, personalized Kundli insights with expert guidance, ensuring clarity, trust, and meaningful life decisions.',
  keys : [
  'Experienced Pandit Ji & Astrologers',
  'Accurate Vedic Calculations',
  'Detailed & Personalized Kundli Reports',
  'Quick & Hassle-Free Process',
  'Trusted Remedies & Guidance',
  'Secure & Confidential Information Handling'
]
};

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
export default function KundliPage() {
  return (
    <>
        <KundliHero
         top_bar={'Welcome to ई-Pandit ji'}
         title={'Get Your Accurate and Personalized Kundli'}
         description={'Receive a detailed Kundli through expert analysis, offering insights into your personality, career, relationships, and future.'} 
         button_name={'Get Started Now'}
         lower_bar={'Order Your Kundli'}
         banner_image={'/assets/kundli-2.png'}
        />
        <KundliFormSection />
        <div className="bg-[url(/assets/glaxybg.webp)] bg-cover">
          <KundliAboutAnalysis Ganeshsectiondata={Ganeshsectiondata} whychoosedata={whychoosedata}/>
          {/* <KundliWhyChoose /> */}
          <OurServicesSection />
        </div>
        <Faq faqs={faqs}/>
        <Testimonials testimonials={testimonials}/>
    </>
  );
}