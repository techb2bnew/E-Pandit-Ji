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

    const params = new URLSearchParams();
    params.append("day", String(day));
    params.append("month", String(month));
    params.append("year", String(year));
    params.append("hour", String(hour));
    params.append("min", String(min));
    params.append("lat", String(lat));
    params.append("lon", String(lon));
    params.append("tzone", String(tzone));
    params.append("ayanamsha", String(ayanamsha));

    const apiResponse = await fetch(
      `${process.env.ASTROLOGY_API_URL}astro_details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${process.env.ASTROLOGY_API_BASIC_AUTH}`,
        },
        body: params.toString(),
      }
    );

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return res.status(apiResponse.status).json({
        message: data?.msg || "Astrology API request failed",
        error: data,
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
}