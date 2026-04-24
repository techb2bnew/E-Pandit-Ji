import { getAstroDetails, getPlanets, getgeoDetails } from "@/services/commonAPIs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      day,
      month,
      year,
      hour,
      min,
      lat,
      lon,
      tzone,
      ayanamsha = "LAHIRI",
    } = req.body || {};

    if (
      day === undefined ||
      month === undefined ||
      year === undefined ||
      hour === undefined ||
      min === undefined ||
      lat === undefined ||
      lon === undefined ||
      tzone === undefined
    ) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const payload = {
      day,
      month,
      year,
      hour,
      min,
      lat,
      lon,
      tzone,
      ayanamsha,
    };

    const [astroDetails, planets] = await Promise.all([
      getAstroDetails(payload),
      getPlanets(payload),
    ]);

    return res.status(200).json({
      astroDetails,
      planets,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Internal server error",
      details: error.details || null,
    });
  }
}