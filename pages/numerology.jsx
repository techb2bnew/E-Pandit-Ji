import KundliNavbar from "@/components/KundliNavbar";
import NumerologyHero from "@/components/NumerologyHero";
import NumerologyToolSection from "@/components/NumerologyToolSection";
import NumerologyCTA from "@/components/NumerologyCTA";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import OurServicesSection from "@/components/OurServicesSection";

export default function NumerologyPage() {
  return (
    <>
      <KundliNavbar />
      <NumerologyHero />

      <NumerologyToolSection
        title="Find Your Life Path Number Instantly"
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
        title="Vehicle Number Analysis"
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
        title="Check Love Compatibility"
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

      <NumerologyCTA />
      <div className="bg-black/65">
        <OurServicesSection />
      </div>
      <Faq />
      <Testimonials />
      <Footer />
    </>
  );
}