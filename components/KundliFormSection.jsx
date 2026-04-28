import { useState } from "react";

export default function KundliFormSection() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [result, setResult] = useState(null);

  const handleGetCustomizedKundli = async () => {
    try {
      setLoading(true);
      setApiError("");
      setResult(null);

      const response = await fetch("/api/get-kundli", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: 10,
          month: 5,
          year: 1990,
          hour: 19,
          min: 55,
          lat: 19.2,
          lon: 25.2,
          tzone: 5.5,
          ayanamsha: "LAHIRI",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to fetch kundli details");
      }

      setResult(data);
      console.log("Your Kundli:", data);
    } catch (error) {
      setApiError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kundliFormSection"
      className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-[46px] pt-[68px] max-[991px]:pb-[50px] max-[991px]:pt-[58px]"
    >
      <div className="absolute inset-0 z-1 bg-black/45" />
      <div className="pointer-events-none absolute right-7 top-[72px] z-2 h-[210px] w-[210px] bg-[url('/assets/images/astro-symbol.png')] bg-contain bg-center bg-no-repeat opacity-[0.12] max-[991px]:right-[10px] max-[991px]:top-[70px] max-[991px]:h-[150px] max-[991px]:w-[150px]" />

      <div className="relative z-3 mx-auto max-w-[1540px] px-14 max-[991px]:px-5">
        <div className="mx-auto max-w-[742px]">
          <h2 className="mb-3 text-center text-[28px] font-extrabold leading-[1.1] text-white max-[576px]:text-[24px]">
            Fill this Form for your kundli
          </h2>

          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-4 gap-x-[11px] gap-y-3 max-[991px]:grid-cols-2 max-[576px]:grid-cols-1">
              <div className="flex flex-col">
                <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="h-[30px] w-full rounded bg-[#f1f1f1] px-[11px] text-[11px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b] max-[576px]:h-10 max-[576px]:text-[13px]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                  Date of Birth
                </label>
                <input
                  type="text"
                  placeholder="01/04/2026"
                  className="h-[30px] w-full rounded bg-[#f1f1f1] px-[11px] text-[11px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b] max-[576px]:h-10 max-[576px]:text-[13px]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                  Time of Birth
                </label>
                <input
                  type="text"
                  placeholder="12:00 AM"
                  className="h-[30px] w-full rounded bg-[#f1f1f1] px-[11px] text-[11px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b] max-[576px]:h-10 max-[576px]:text-[13px]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                  Place of Birth
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Place of Birth"
                  className="h-[30px] w-full rounded bg-[#f1f1f1] px-[11px] text-[11px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b] max-[576px]:h-10 max-[576px]:text-[13px]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                  Gender
                </label>
                <select
                  defaultValue=""
                  className="h-[30px] w-full rounded bg-[#f1f1f1] px-[11px] text-[11px] text-[#1a1a1a] outline-none ring-1 ring-white/10 max-[576px]:h-10 max-[576px]:text-[13px]"
                >
                  <option value="" disabled>
                    Select Your Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Mob. Number"
                  className="h-[30px] w-full rounded bg-[#f1f1f1] px-[11px] text-[11px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b] max-[576px]:h-10 max-[576px]:text-[13px]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="h-[30px] w-full rounded bg-[#f1f1f1] px-[11px] text-[11px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b] max-[576px]:h-10 max-[576px]:text-[13px]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                  Select Service
                </label>
                <select
                  defaultValue=""
                  className="h-[30px] w-full rounded bg-[#f1f1f1] px-[11px] text-[11px] text-[#1a1a1a] outline-none ring-1 ring-white/10 max-[576px]:h-10 max-[576px]:text-[13px]"
                >
                  <option value="" disabled>
                    Select Your Service
                  </option>
                  <option>Basic Kundli</option>
                  <option>Detailed Kundli</option>
                  <option>Marriage Kundli</option>
                  <option>Career Kundli</option>
                </select>
              </div>
            </div>

            <div className="mx-auto mt-[13px] w-full max-w-[318px] max-[991px]:max-w-full">
              <label className="mb-[6px] block text-[12px] font-medium leading-[1.2] text-white">
                Message / Special Question
              </label>
              <textarea
                rows={5}
                className="h-[79px] w-full resize-none rounded bg-[#f1f1f1] px-[11px] py-[10px] text-[11px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b] max-[576px]:h-[110px] max-[576px]:text-[13px]"
              />
            </div>

            <label className="mx-auto mt-2 flex w-full max-w-[318px] cursor-pointer items-start gap-[7px] max-[991px]:max-w-full">
              <input
                type="checkbox"
                className="mt-[3px] h-[10px] w-[10px] shrink-0 accent-primary"
              />
              <span className="text-[8.8px] leading-[1.6] text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </span>
            </label>

            <button
              type="button"
              className="mx-auto mt-[14px] block h-7 w-full max-w-[318px] cursor-pointer rounded-[8px] bg-primary text-[12px] font-extrabold text-black disabled:opacity-60 max-[991px]:max-w-full max-[576px]:h-[42px] max-[576px]:text-[15px]"
              onClick={handleGetCustomizedKundli}
              disabled={loading}
            >
              {loading ? "Loading..." : "Get My Kundli"}
            </button>

            {apiError ? (
              <p className="mt-3 text-center text-[13px] text-red-500">
                {apiError}
              </p>
            ) : null}
          </form>
        </div>

        <div className="mt-[86px] max-w-[860px] max-[991px]:mt-[55px]">
          <h2 className="mb-4 text-[34px] font-extrabold leading-[1.05] text-white max-[991px]:text-[28px] max-[576px]:text-[24px]">
            <span className="text-primary">Create Accurate Kundli</span> –
            Discover
            <br />
            Your Life Path with e-Pandit Ji
          </h2>

          <p className="mb-[10px] max-w-[930px] text-[16px] leading-[1.45] text-white/95 max-[991px]:text-[15px] max-[576px]:text-[14px]">
            At e-Pandit Ji, we believe your birth chart is the key to
            understanding your true potential and life journey. Our platform is
            designed to generate accurate and detailed Janam Kundli using
            precise Vedic astrology calculations.
          </p>

          <p className="mb-[10px] max-w-[930px] text-[16px] leading-[1.45] text-white/95 max-[991px]:text-[15px] max-[576px]:text-[14px]">
            Your Kundli is created based on your date, time, and place of birth,
            helping you gain deep insights into your personality, career,
            relationships, and future opportunities.
          </p>

          <p className="mb-[10px] max-w-[930px] text-[16px] leading-[1.45] text-white/95 max-[991px]:text-[15px] max-[576px]:text-[14px]">
            Our advanced system ensures fast, reliable, and easy-to-understand
            reports, so you can make better life decisions with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}