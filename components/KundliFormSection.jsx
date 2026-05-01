import { useState } from "react";
import Title from "./Uiux/Title";
import Button from "./Uiux/Button";

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
      className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat "
    >
      <div className="absolute inset-0 z-1 bg-black/45" />
      <div className="pointer-events-none absolute right-7 top-[72px] z-2 h-[210px] w-[210px] bg-[url('/assets/images/astro-symbol.png')] bg-contain bg-center bg-no-repeat opacity-[0.12] max-[991px]:right-[10px] max-[991px]:top-[70px] max-[991px]:h-[150px] max-[991px]:w-[150px]" />

      <div className="relative z-3 inn_container px-14 max-[991px]:px-5">
        <div className="mx-auto md:max-w-[80%]">
          <div className="text-center">
            <Title
              title={'Fill Out The Details Below To Get Your Kundli'}
              Class={'text-white'}
            />
          </div>


          <form className="w-full pt-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-4 gap-x-[24px] gap-4 md:gap-y-[26px] max-[991px]:grid-cols-2 max-[576px]:grid-cols-1">
              <div className="flex flex-col">
                <label className="mb-[8px] text-base md:text-[18px] font-medium leading-[1.2] text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="md:min-h-[60px] w-full rounded-[6px] bg-[#f1f1f1] px-[20px] py-3 md:py-[16px] text-[16px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[8px] text-base md:text-[18px] font-medium leading-[1.2] text-white">
                  Date of Birth
                </label>
                <input
                  type="text"
                  placeholder="01/04/2026"
                  className="md:min-h-[60px] w-full rounded-[6px] bg-[#f1f1f1] px-[20px] py-3 md:py-[16px] text-[16px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[8px] text-base md:text-[18px] font-medium leading-[1.2] text-white">
                  Time of Birth
                </label>
                <input
                  type="text"
                  placeholder="12:00 AM"
                  className="md:min-h-[60px] w-full rounded-[6px] bg-[#f1f1f1] px-[20px] py-3 md:py-[16px] text-[16px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[8px] text-base md:text-[18px] font-medium leading-[1.2] text-white">
                  Place of Birth
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Place of Birth"
                  className="md:min-h-[60px] w-full rounded-[6px] bg-[#f1f1f1] px-[20px] py-3 md:py-[16px] text-[16px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[8px] text-base md:text-[18px] font-medium leading-[1.2] text-white">
                  Gender
                </label>
                <select
                  defaultValue=""
                  className="md:min-h-[60px] w-full rounded-[6px] bg-[#f1f1f1] px-[20px] py-3 md:py-[16px] text-[16px] text-[#1a1a1a] outline-none ring-1 ring-white/10"
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
                <label className="mb-[8px] text-base md:text-[18px] font-medium leading-[1.2] text-white">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Mob. Number"
                  className="md:min-h-[60px] w-full rounded-[6px] bg-[#f1f1f1] px-[20px] py-3 md:py-[16px] text-[16px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[8px] text-base md:text-[18px] font-medium leading-[1.2] text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="md:min-h-[60px] w-full rounded-[6px] bg-[#f1f1f1] px-[20px] py-3 md:py-[16px] text-[16px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-[8px] text-base md:text-[18px] font-medium leading-[1.2] text-white">
                  Select Service
                </label>
                <select
                  defaultValue=""
                  className="md:min-h-[60px] w-full rounded-[6px] bg-[#f1f1f1] px-[20px] py-3 md:py-[16px] text-[16px] text-[#1a1a1a] outline-none ring-1 ring-white/10"
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

              <div className="col-span-2 col-start-2 flex flex-col max-[991px]:col-span-2 max-[991px]:col-start-auto max-[576px]:col-span-1">
                <label className="mb-[8px] text-base md:text-[18px] font-medium leading-[1.2] text-white">
                  Message / Special Question
                </label>
                <textarea
                  rows={5}
                  className="min-h-[115px] w-full resize-none rounded-[6px] bg-[#f1f1f1] px-[20px] py-3 md:py-[16px] text-[16px] text-[#1a1a1a] outline-none ring-1 ring-white/10 placeholder:text-[#9b9b9b]"
                />
              </div>

              {/* <label className="col-span-2 col-start-2 flex cursor-pointer items-start gap-[10px] max-[991px]:col-span-2 max-[991px]:col-start-auto max-[576px]:col-span-1">
                <input
                  type="checkbox"
                  className="mt-[5px] h-[14px] w-[14px] shrink-0 accent-primary"
                />
                <span className="text-[14px] leading-[1.6] text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
                </span>
              </label> */}

              {/* <button
                type="button"
                className="col-span-2 col-start-2 md:min-h-[60px] w-full cursor-pointer rounded-[10px] bg-primary px-[20px] py-3 md:py-[16px] text-[16px] font-extrabold text-black disabled:opacity-60 max-[991px]:col-span-2 max-[991px]:col-start-auto max-[576px]:col-span-1"
                onClick={handleGetCustomizedKundli}
                disabled={loading}
              >
                {loading ? "Loading..." : "Get My Kundli"}
              </button> */}


            </div>
            <div className="pt-6 flex justify-center">
              <Button
                onClick={handleGetCustomizedKundli}
                button_name={loading ? "Loading..." : "Get My Kundli"}
                variant={'primary'}
                disabled={loading}
                Class={'text-black '}
              />
            </div>
            {apiError ? (
              <p className="mt-3 text-center text-[13px] text-red-500">{apiError}</p>
            ) : null}
          </form>
        </div>

      </div>
    </section>
  );
}