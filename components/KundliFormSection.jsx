// import styles from "@/styles/components/KundliFormSection.module.css";
// import { useState } from "react";

// export default function KundliFormSection() {
//   const [loading, setLoading] = useState(false);
//   const [apiError, setApiError] = useState("");
//   const [result, setResult] = useState(null);

//   const handleGetCustomizedKundli = async () => {
//     try {
//       setLoading(true);
//       setApiError("");
//       setResult(null);

//       const response = await fetch("/api/get-kundli", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           day: 10,
//           month: 5,
//           year: 1990,
//           hour: 19,
//           min: 55,
//           lat: 19.2,
//           lon: 25.2,
//           tzone: 5.5,
//           ayanamsha: "LAHIRI",
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data?.message || "Failed to fetch kundli details");
//       }

//       setResult(data);
//       console.log("Your Kundli:", data);
//     } catch (error) {
//       setApiError(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="kundliFormSection" className={styles.section}>
//       <div className={styles.bgOverlay}></div>
//       <div className={styles.symbol}></div>

//       <div className={styles.container}>
//         <div className={styles.formWrap}>
//           <h2 className={styles.heading}>Fill this Form for your kundli</h2>

//           <form className={styles.form}>
//             <div className={styles.grid}>
//               <div className={styles.field}>
//                 <label>Full Name</label>
//                 <input type="text" placeholder="Enter Your Full Name" />
//               </div>

//               <div className={styles.field}>
//                 <label>Date of Birth</label>
//                 <input type="text" placeholder="01/04/2026" />
//               </div>

//               <div className={styles.field}>
//                 <label>Time of Birth</label>
//                 <input type="text" placeholder="12:00 AM" />
//               </div>

//               <div className={styles.field}>
//                 <label>Place of Birth</label>
//                 <input type="text" placeholder="Enter Your Place of Birth" />
//               </div>

//               <div className={styles.field}>
//                 <label>Gender</label>
//                 <select defaultValue="">
//                   <option value="" disabled>
//                     Select Your Gender
//                   </option>
//                   <option>Male</option>
//                   <option>Female</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div className={styles.field}>
//                 <label>Phone Number</label>
//                 <input type="text" placeholder="Enter Your Mob. Number" />
//               </div>

//               <div className={styles.field}>
//                 <label>Email Address</label>
//                 <input type="email" placeholder="Enter Your Email Address" />
//               </div>

//               <div className={styles.field}>
//                 <label>Select Service</label>
//                 <select defaultValue="">
//                   <option value="" disabled>
//                     Select Your Service
//                   </option>
//                   <option>Basic Kundli</option>
//                   <option>Detailed Kundli</option>
//                   <option>Marriage Kundli</option>
//                   <option>Career Kundli</option>
//                 </select>
//               </div>
//             </div>

//             <div className={styles.messageField}>
//               <label>Message / Special Question</label>
//               <textarea rows="5" />
//             </div>

//             <label className={styles.checkboxRow}>
//               <input type="checkbox" />
//               <span>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
//                 ipsum suspendisse ultrices gravida.
//               </span>
//             </label>

//             {/* <button type="submit" className={styles.submitBtn}>
//               Get My Kundli
//             </button> */}

//             <button
//               className={styles.submitBtn}
//               onClick={handleGetCustomizedKundli}
//               disabled={loading}
//             >
//               {loading ? "Loading..." : "Get My Kundli"}
//             </button>
//             {apiError ? <p style={{ color: "red", marginTop: 12 }}>{apiError}</p> : null}
//           </form>
//         </div>

//         <div className={styles.topContent}>
//           <h2 className={styles.mainHeading}>
//             <span>Create Accurate Kundli</span> – Discover
//             <br />
//             Your Life Path with e-Pandit Ji
//           </h2>

//           <p className={styles.paragraph}>
//             At e-Pandit Ji, we believe your birth chart is the key to
//             understanding your true potential and life journey. Our platform is
//             designed to generate accurate and detailed Janam Kundli using
//             precise Vedic astrology calculations.
//           </p>

//           <p className={styles.paragraph}>
//             Your Kundli is created based on your date, time, and place of
//             birth, helping you gain deep insights into your personality,
//             career, relationships, and future opportunities.
//           </p>

//           <p className={styles.paragraph}>
//             Our advanced system ensures fast, reliable, and easy-to-understand
//             reports, so you can make better life decisions with confidence.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }







import styles from "@/styles/components/KundliFormSection.module.css";
import { useState } from "react";

const initialFormData = {
  fullName: "",
  dob: "",
  birthTime: "",
  lat: "",
  lon: "",
  placeOfBirth: "",
  gender: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  consent: false,
};

export default function KundliFormSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!formData.birthTime) {
      newErrors.birthTime = "Time of birth is required";
    }

    if (!formData.placeOfBirth.trim()) {
      newErrors.placeOfBirth = "Place of birth is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.consent) {
      newErrors.consent = "Please accept the consent";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGetCustomizedKundli = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setApiError("");
      setResult(null);

      const isValid = validateForm();
      if (!isValid) {
        return;
      }

      const [year, month, day] = formData.dob.split("-").map(Number);
      const [hour, min] = formData.birthTime.split(":").map(Number);

      const payload = {
        day,
        month,
        year,
        hour,
        min,
        lat: formData.lat || 0, // for testing
        lon: formData.lon || 0, // for testing
        place: formData.placeOfBirth,
        tzone: 5.5,
        ayanamsha: "LAHIRI",
      };

      console.log("Request Payload:", payload);
      const response = await fetch("/api/get-kundli", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
    <section id="kundliFormSection" className={styles.section}>
      <div className={styles.bgOverlay}></div>
      <div className={styles.symbol}></div>

      <div className={styles.container}>
        <div className={styles.formWrap}>
          <h2 className={styles.heading}>Fill this Form for your kundli</h2>

          <form className={styles.form} onSubmit={handleGetCustomizedKundli}>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
              </div>

              <div className={styles.field}>
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
                {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
              </div>

              <div className={styles.field}>
                <label>Time of Birth</label>
                <input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                />
                {errors.birthTime && <p style={{ color: "red" }}>{errors.birthTime}</p>}
              </div>

              <div className={styles.field}>
                <label>Place of Birth</label>
                <input
                  type="text"
                  name="placeOfBirth"
                  placeholder="Enter Your Place of Birth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                />
                {errors.placeOfBirth && (
                  <p style={{ color: "red" }}>{errors.placeOfBirth}</p>
                )}
              </div>

              <div className={styles.field}>
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Your Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
              </div>

              <div className={styles.field}>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Mob. Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
              </div>

              <div className={styles.field}>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>

              <div className={styles.field}>
                <label>Select Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Your Service
                  </option>
                  <option value="Basic Kundli">Basic Kundli</option>
                  <option value="Detailed Kundli">Detailed Kundli</option>
                  <option value="Marriage Kundli">Marriage Kundli</option>
                  <option value="Career Kundli">Career Kundli</option>
                </select>
                {errors.service && <p style={{ color: "red" }}>{errors.service}</p>}
              </div>
            </div>

            <div className={styles.messageField}>
              <label>Message / Special Question</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <label className={styles.checkboxRow}>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </span>
            </label>
            {errors.consent && <p style={{ color: "red" }}>{errors.consent}</p>}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Loading..." : "Get My Kundli"}
            </button>

            {apiError ? (
              <p style={{ color: "red", marginTop: 12 }}>{apiError}</p>
            ) : null}
          </form>
        </div>

        <div className={styles.topContent}>
          <h2 className={styles.mainHeading}>
            <span>Create Accurate Kundli</span> – Discover
            <br />
            Your Life Path with e-Pandit Ji
          </h2>

          <p className={styles.paragraph}>
            At e-Pandit Ji, we believe your birth chart is the key to
            understanding your true potential and life journey. Our platform is
            designed to generate accurate and detailed Janam Kundli using
            precise Vedic astrology calculations.
          </p>

          <p className={styles.paragraph}>
            Your Kundli is created based on your date, time, and place of
            birth, helping you gain deep insights into your personality,
            career, relationships, and future opportunities.
          </p>

          <p className={styles.paragraph}>
            Our advanced system ensures fast, reliable, and easy-to-understand
            reports, so you can make better life decisions with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}