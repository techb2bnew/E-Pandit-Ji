import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" }
];

const serviceLinks = [
  { label: "kundli", href: "/kundli" },
  { label: "Numerology", href: "/numerology" },
  { label: "Match making", href: "/match-making" },
  { label: "Panchang", href: "#" },
  { label: "Remedy", href: "/remedy" },
  { label: "Vastu", href: "#" }
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com",
  },
  // {
  //   name: "LinkedIn",
  //   icon: FaLinkedinIn,
  //   url: "https://linkedin.com",
  // },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://youtube.com",
  },
];
export const AccordionItem = ({
  title,
  children,
  index,
  openIndex,
  toggle
}) => {
  const isOpen = openIndex === index;

  return (
    <div className="border-b border-white/50 pb-4">
      {/* Header */}
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-[18px] font-bold text-primary">
          {title}
        </h3>

        <span
          className={`transition-transform duration-300 ${isOpen
            ? "rotate-180"
            : ""}`}
        >
          <IoIosArrowDown className="text-primary text-xl" />
        </span>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen
          ? "max-h-[500px] mt-4"
          : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (showPrivacy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPrivacy]);
  return (
    <div className="pt-12 bg-black">
      <footer className="relative mb-[70px] md:mb-0 w-full overflow-hidden bg-black bg-[url('/assets/footer-bg-stars.png')] bg-center bg-cover bg-no-repeat px-6  pt-[70px] md:px-6 md:pb-9 md:pt-[70px] max-md:px-4 max-md:pb-7 max-md:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.52)_35%,rgba(0,0,0,0.7)_100%)]" />
        <div className="pointer-events-none absolute right-[-120px] top-[40px] h-[620px] w-[620px] bg-[url('/assets/footer/footer-planet.png')] bg-center bg-contain bg-no-repeat opacity-[0.42] max-[1100px]:right-[-110px] max-[1100px]:top-[90px] max-[1100px]:h-[460px] max-[1100px]:w-[460px] max-md:right-[-90px] max-md:top-[180px] max-md:h-[320px] max-md:w-[320px] max-md:opacity-[0.28]" />

        <div className="relative z-[2] inn_container">
          <div className="hidden md:grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 items-start gap-5 md:gap-[34px]">
            <div className="max-w-full md:max-w-[360px]">
              <h2 className="m-0 text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
                ई-Pandit ji
              </h2>

              <p className="mt-6 text-[15px] font-normal leading-[1.75] text-white/90 md:text-[16px] md:leading-[1.9]">
                ई-Pandit ji is a trusted platform offering expert astrology and numerology services. With experienced astrologers and Pandit Ji, it provides accurate Kundli, horoscope, and personalized guidance. The platform helps users understand life, make better decisions, and find clarity through traditional Vedic knowledge.
              </p>

              <div className="flex gap-4 pt-10">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary hover:scale-110 transition hover:bg-primary hover:text-black"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:max-w-[80%] mx-auto">
              <h3 className="mt-[10px] text-[20px] font-bold leading-[1.2] text-primary md:text-[22px]">
                UseFul Links
              </h3>
              <div className="mt-7 flex flex-col gap-[18px]">
                {usefulLinks.map(item =>
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[18px] hover:underline underline-offset-8 font-normal leading-[1.4] text-white/80 transition-colors duration-200 hover:text-primary max-md:text-[15px]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </div>

            <div className="lg:max-w-[80%] mx-auto">
              <h3 className="mt-[10px] text-[20px] font-bold leading-[1.2] text-primary md:text-[22px]">
                Our Services
              </h3>
              <div className="mt-7 flex flex-col gap-[18px]">
                {serviceLinks.map(item =>
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[18px] hover:underline underline-offset-8 font-normal leading-[1.4] text-white/80 transition-colors duration-200 hover:text-primary max-md:text-[15px]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </div>

            <div className="lg:max-w-[80%] mx-auto">
              <h3 className="mt-[10px] text-[20px] font-bold leading-[1.2] text-primary md:text-[22px]">
                Contact Us
              </h3>

              <div className="mt-[26px]">
                <p className="mb-1 text-[16px] font-normal leading-[1.4] text-white/80 max-md:text-[15px]">
                  Number
                </p>
                <a
                  href="tel:+916009570095"
                  className="text-[16px] font-normal leading-[1.4] text-white/70 no-underline break-words max-md:text-[15px]"
                >
                  +91-60095-70095
                </a>
              </div>

              <div className="mt-[26px]">
                <p className="mb-1 text-[16px] font-normal leading-[1.4] text-white/80 max-md:text-[15px]">
                  Email
                </p>
                <a
                  href="mailto:hello@e-panditji.com"
                  className="text-[16px] font-normal leading-[1.4] text-white/70 no-underline break-words max-md:text-[15px]"
                >
                  hello@e-panditji.com
                </a>
              </div>

              {/* <div className="mt-[26px]">
              <p className="mb-1 text-[16px] font-normal leading-[1.4] text-white/80 max-md:text-[15px]">
                Address
              </p>
              <p className="m-0 text-[16px] font-normal leading-[1.4] text-white/70 break-words max-md:text-[15px]">
                enter here company 123address
              </p>
            </div> */}
            </div>
          </div>
          <div className="block md:hidden space-y-5">
            <div className="max-w-full md:max-w-[360px] text-center">
              <h2 className="m-0 text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
                ई-Pandit ji
              </h2>

              <p className="mt-6 text-[15px] font-normal leading-[1.75] text-white/90 md:text-[16px] md:leading-[1.9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex justify-center gap-4 pt-10">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center hover:scale-105 justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-black"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
            <AccordionItem
              title="Useful Links"
              index={0}
              openIndex={openIndex}
              toggle={toggleAccordion}
            >
              <div className="flex flex-col gap-4">
                {usefulLinks.map(item =>
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white/80"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </AccordionItem>

            <AccordionItem
              title="Our Services"
              index={1}
              openIndex={openIndex}
              toggle={toggleAccordion}
            >
              <div className="flex flex-col gap-4">
                {serviceLinks.map(item =>
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white/80"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </AccordionItem>

            <AccordionItem
              title="Contact Us"
              index={2}
              openIndex={openIndex}
              toggle={toggleAccordion}
            >
              <div className="space-y-4 text-white/80">
                <div>
                  <p>Number</p>
                  <a href="tel:+916009570095">+91-60095-70095</a>
                </div>
                <div>
                  <p>Email</p>
                  <a href="mailto:hello@e-panditji.com">
                    hello@e-panditji.com
                  </a>
                </div>
                {/* <div>
                <p>Address</p>
                <p>enter here company 123address</p>
              </div> */}
              </div>
            </AccordionItem>
          </div>
          <div className="mt-2 border-t border-white/10 pt-5 md:mt-[34px] md:pt-6 flex flex-col md:flex-row justify-between mb-4 md:mb-0">
            <p className="m-0 text-[16px] font-normal leading-[1.5] text-white/70 max-md:text-[15px] text-center md:text-start">
              ©{new Date().getFullYear()} All Rights Reserved | E-pandit ji |{" "}
              <button
                onClick={() => setShowPrivacy(true)}
                className="underline hover:text-primary"
              >
                Privacy Policy
              </button>
            </p>
            <p className="m-0 text-[16px] font-normal leading-[1.5] text-white/70 max-md:text-[15px] text-center md:text-start">
              Design & Development By <a href="https://base2brand.com/">Base2brand</a>
            </p>
          </div>
        </div>
      </footer>
      {showPrivacy && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">

          <div className="relative w-[90%] max-w-[800px] max-h-[85vh] overflow-y-auto rounded-[20px] bg-black border border-primary p-6 md:p-8 shadow-[0_0_40px_rgba(245,197,24,0.25)] animate-fadeIn">

            {/* Close Button */}
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 text-primary text-2xl hover:scale-110 transition"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-primary mb-4">
              Privacy Policy
            </h2>

            {/* Content */}
            <div className="space-y-4 text-white/80 text-[15px] leading-[1.7]">

              <p>
                At E-Pandit Ji, we respect your privacy and are committed to protecting your personal information.
                This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>

              <h3 className="text-primary font-bold text-[18px]">1. Information We Collect</h3>
              <p>
                We may collect your name, date of birth, contact details, and other information required
                for astrology and numerology services.
              </p>

              <h3 className="text-primary font-bold text-[18px]">2. How We Use Information</h3>
              <p>
                Your information is used to provide personalized astrology insights, improve services,
                and communicate important updates.
              </p>

              <h3 className="text-primary font-bold text-[18px]">3. Data Protection</h3>
              <p>
                We ensure that your data is securely stored and never shared with third parties
                without your consent.
              </p>

              <h3 className="text-primary font-bold text-[18px]">4. Cookies</h3>
              <p>
                Our website may use cookies to enhance user experience and analyze performance.
              </p>

              <h3 className="text-primary font-bold text-[18px]">5. User Rights</h3>
              <p>
                You have the right to access, update, or request deletion of your personal data.
              </p>

              <h3 className="text-primary font-bold text-[18px]">6. Contact Us</h3>
              <p>
                For any privacy-related concerns, you can contact us at hello@e-panditji.com.
              </p>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
