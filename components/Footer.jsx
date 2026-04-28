import Link from "next/link";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "kundli", href: "/kundli" },
  { label: "Numerology", href: "/numerology" },
  { label: "Match making", href: "/match-making" },
  { label: "Panchang", href: "/panchang" },
  { label: "Remedy", href: "/remedy" },
  { label: "Vastu", href: "/vastu" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black bg-[url('/assets/footer-bg-stars.png')] bg-center bg-cover bg-no-repeat px-6 pb-9 pt-[70px] md:px-6 md:pb-9 md:pt-[70px] max-md:px-4 max-md:pb-7 max-md:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.52)_35%,rgba(0,0,0,0.7)_100%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-[40px] h-[620px] w-[620px] bg-[url('/assets/footer/footer-planet.png')] bg-center bg-contain bg-no-repeat opacity-[0.42] max-[1100px]:right-[-110px] max-[1100px]:top-[90px] max-[1100px]:h-[460px] max-[1100px]:w-[460px] max-md:right-[-90px] max-md:top-[180px] max-md:h-[320px] max-md:w-[320px] max-md:opacity-[0.28]" />

      <div className="relative z-[2] inn_container">
        <div className="grid grid-cols-1 items-start gap-[30px] max-[1100px]:grid-cols-2 max-[1100px]:gap-[34px] md:grid-cols-[1.25fr_0.9fr_0.9fr_1fr] md:gap-[46px]">
          <div className="max-w-full md:max-w-[360px]">
            <h2 className="m-0 text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
              ई-Pandit ji
            </h2>

            <p className="mt-6 text-[15px] font-normal leading-[1.75] text-white/90 md:text-[16px] md:leading-[1.9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-7 flex items-center gap-[18px]">
              <a
                href="#"
                className="text-white/70 transition-[color,transform] duration-200 hover:-translate-y-[1px] hover:text-primary text-primary"
                aria-label="LinkedIn"
              >
                <span aria-hidden="true">in</span>
              </a>
              <a
                href="#"
                className="text-white/70 transition-[color,transform] duration-200 hover:-translate-y-[1px] hover:text-primary"
                aria-label="Facebook"
              >
                <span aria-hidden="true">f</span>
              </a>
              <a
                href="#"
                className="text-white/70 transition-[color,transform] duration-200 hover:-translate-y-[1px] hover:text-primary"
                aria-label="Instagram"
              >
                <span aria-hidden="true">📸</span>
              </a>
              <a
                href="#"
                className="text-white/70 transition-[color,transform] duration-200 hover:-translate-y-[1px] hover:text-primary"
                aria-label="YouTube"
              >
                <span aria-hidden="true">▶</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mt-[10px] text-[20px] font-bold leading-[1.2] text-primary md:text-[22px]">
              UseFul Links
            </h3>
            <div className="mt-7 flex flex-col gap-[18px]">
              {usefulLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[18px] font-normal leading-[1.4] text-white/80 transition-colors duration-200 hover:text-primary max-md:text-[15px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mt-[10px] text-[20px] font-bold leading-[1.2] text-primary md:text-[22px]">
              Our Services
            </h3>
            <div className="mt-7 flex flex-col gap-[18px]">
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[18px] font-normal leading-[1.4] text-white/80 transition-colors duration-200 hover:text-primary max-md:text-[15px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="max-w-full md:max-w-[250px]">
            <h3 className="mt-[10px] text-[20px] font-bold leading-[1.2] text-primary md:text-[22px]">
              Contact Us
            </h3>

            <div className="mt-[26px]">
              <p className="mb-1 text-[16px] font-normal leading-[1.4] text-white/80 max-md:text-[15px]">
                Number
              </p>
              <a
                href="tel:0987654321"
                className="text-[16px] font-normal leading-[1.4] text-white/70 no-underline break-words max-md:text-[15px]"
              >
                0987654321
              </a>
            </div>

            <div className="mt-[26px]">
              <p className="mb-1 text-[16px] font-normal leading-[1.4] text-white/80 max-md:text-[15px]">
                Email
              </p>
              <a
                href="mailto:info@e-panditji.com.au"
                className="text-[16px] font-normal leading-[1.4] text-white/70 no-underline break-words max-md:text-[15px]"
              >
                info@e-panditji.com.au
              </a>
            </div>

            <div className="mt-[26px]">
              <p className="mb-1 text-[16px] font-normal leading-[1.4] text-white/80 max-md:text-[15px]">
                Address
              </p>
              <p className="m-0 text-[16px] font-normal leading-[1.4] text-white/70 break-words max-md:text-[15px]">
                enter here company 123address
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-5 md:mt-[34px] md:pt-6">
          <p className="m-0 text-[16px] font-normal leading-[1.5] text-white/70 max-md:text-[15px]">
            ©2026 All Rights Reserved | pandit ji | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}