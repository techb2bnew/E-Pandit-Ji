import KundliNavbar from "@/components/KundliNavbar";
import NumerologyHero from "@/components/NumerologyHero";
import NumerologyToolSection from "@/components/NumerologyToolSection";
import NumerologyCTA from "@/components/NumerologyCTA";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import OurServicesSection from "@/components/OurServicesSection";


const faqs = [
  {
    question: "What is numerology?",
    answer:
      "Numerology is the study of numbers and their influence on human life and destiny.",
  },
  {
    question: "How does numerology work?",
    answer:
      "It analyzes your name and birth date to reveal personality traits and life patterns.",
  },
  {
    question: "Can numerology predict the future?",
    answer:
      "It provides guidance on future possibilities and helps make better life decisions.",
  },
  {
    question: "Is numerology accurate?",
    answer:
      "Numerology offers insightful patterns based on numbers, which many find meaningful and helpful.",
  },
  {
    question: "Do I need my birth date for numerology?",
    answer:
      "Yes, your birth date and name are essential for accurate numerology analysis.",
  },
  {
    question: "Can numerology help in career decisions?",
    answer:
      "Yes, it can guide you toward suitable career paths and better opportunities.",
  },
];
const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Very accurate numerology report that helped me understand my strengths and life direction clearly. The insights were simple, practical, and truly helpful for making better personal decisions.",
  },
  {
    name: "Anjali Verma",
    text: "Excellent numerology service with detailed explanations. It gave me clarity about my career path and personal growth. I really liked how easy the report was to understand.",
  },
  {
    name: "Neha Kapoor",
    text: "The numerology analysis was insightful and meaningful. It helped me discover hidden aspects of my personality and guided me in making better life choices with confidence.",
  },
  {
    name: "Amit Yadav",
    text: "Very helpful numerology reading. It explained my life path number clearly and gave useful suggestions for success and stability. I felt more focused after reading the report.",
  },
  {
    name: "Priya Singh",
    text: "Great experience with numerology service. The report was detailed yet simple. It helped me understand my challenges and strengths in a very practical way.",
  },
  {
    name: "Rohit Mehta",
    text: "Highly accurate numerology insights that matched my life situations. The guidance was clear and easy to follow, helping me plan my future more effectively and confidently.",
  },
];
export default function NumerologyPage() {
  return (
    <>
      <NumerologyHero />

      <NumerologyToolSection
        title="Find Your Life Path Number"
        bgImage="/assets/night-sky-2.png"
        fields={[
          { label: "Full Name", placeholder: "Enter Your Full Name" },
          { label: "Birth Date", placeholder: "DD / MM / YYYY" },
          { label: "Birth Time", placeholder: "HH : MM" },
        ]}
        buttonText="Calculate Now"
        resultItems={[
          { label: "Life Path Number:", value: "5" },
          { label: "Meaning:", value: "Adventurous, freedom-loving" },
          { label: "Lucky Color:", value: "Green" },
          { label: "Lucky Number:", value: "3, 5, 9" },
        ]}
      />

      <NumerologyToolSection
        title="Get Your Detailed Numerology Report"
        bgImage="/assets/night-sky-2.png"
        fields={[
          { label: "Full Name", placeholder: "Enter Your Full Name" },
          { label: "Birth Date", placeholder: "DD / MM / YYYY" },
          { label: "Birth Time", placeholder: "HH : MM" },
          { label: "Place of Birth", placeholder: "Enter Your Place of Birth" },
          {
            label: "Gender",
            type: "select",
            placeholder: "Select Your Gender",
            options: ["Male", "Female", "Other"],
          },
          { label: "Email Address", placeholder: "Enter Your Email Address" },
        ]}
        buttonText="Calculate Now"
        resultItems={[
          { label: "Life Path Number:", value: "5" },
          { label: "Meaning:", value: "Adventurous, freedom-loving" },
          { label: "Lucky Color:", value: "Green" },
          { label: "Lucky Number:", value: "3, 5, 9" },
          { label: "Other", value: "" },
        ]}
      />

      <NumerologyToolSection
        title="Check Your Name Numerology"
        bgImage="/assets/night-sky-2.png"

        fields={[
          { label: "Full Name", placeholder: "Enter Your Full Name" },
          {
            label: "Preferred Name (Optional)",
            placeholder: "Enter Your Preferred Name",
          },
        ]}
        buttonText="Analyze My Name"
        resultItems={[
          { label: "Destiny Number", value: "Enter Destiny Number" },
          { label: "Personality Traits", value: "Enter Personality Traits" },
          { label: "Name Compatibility", value: "Enter Name Compatibility" },
        ]}
        compact
      />

      <NumerologyToolSection
        title="Find Lucky Business Name"
        bgImage="/assets/night-sky-2.png"
        fields={[
          { label: "Full Name", placeholder: "Enter Your Full Name" },
          { label: "Birth Date", placeholder: "DD / MM / YYYY" },
          {
            label: "Preferred Starting Letter",
            placeholder: "Enter Your Starting Letter",
          },
          { label: "Business Type", placeholder: "Enter Your Business Type" },
        ]}
        buttonText="Suggest Business"
        resultItems={[
          { label: "Lucky Names List", value: "" },
          { label: "Best Number Alignment", value: "" },
          { label: "Success Score", value: "" },
        ]}
      />

      <NumerologyToolSection
        title="Check Your Mobile Number Luck"
        bgImage="/assets/night-sky-2.png"
        fields={[
          { label: "Mobile Number", placeholder: "Enter Your Full Name" },
          { label: "Birth Date", placeholder: "DD / MM / YYYY" },
        ]}
        buttonText="Check Now"
        resultItems={[
          { label: "Lucky / Unlucky Rating", value: "" },
          { label: "Impact on Life", value: "" },
          { label: "Suggested Number", value: "" },
        ]}
        compact
      />

      <NumerologyToolSection
        title="Lucky Vehicle Number Calculator"
        bgImage="/assets/night-sky-2.png"
        fields={[
          { label: "Vehicle Number", placeholder: "Enter Your Vehicle Number" },
          { label: "Birth Date", placeholder: "DD / MM / YYYY" },
        ]}
        buttonText="Check Vehicle Luck"
        resultItems={[
          { label: "Lucky / Unlucky Rating", value: "" },
          { label: "Impact on Life", value: "" },
          { label: "Suggested Number", value: "" },
        ]}
        compact
      />

      <NumerologyToolSection
        title="Check Love Compatibility Score"
        bgImage="/assets/night-sky-2.png"
        fields={[
          { label: "Your Name", placeholder: "Enter Your Name" },
          { label: "Birth Date", placeholder: "DD / MM / YYYY" },
          { label: "Partner Name", placeholder: "Enter Your Partner Name" },
          { label: "Birth Date", placeholder: "DD / MM / YYYY" },
        ]}
        buttonText="Check Compatibility"
        resultItems={[
          { label: "Compatibility Score", value: "(e.g. 85%)" },
          { label: "Relationship Strength", value: "" },
          { label: "Advice", value: "" },
        ]}
      />

     
      <div className="bg-[url(/assets/glaxybg.webp)] bg-cover">
        <NumerologyCTA black_bg={false}/>
        <OurServicesSection />
      </div>
      <Faq faqs={faqs} />
      <Testimonials testimonials={testimonials}/>
    </>
  );
}