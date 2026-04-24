export async function callAstrologyApi(endpoint, payload = {}) {
  const params = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, String(value));
    }
  });

  const response = await fetch(
    `${process.env.ASTROLOGY_API_URL}${endpoint}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${process.env.ASTROLOGY_API_BASIC_AUTH}`,
      },
      body: params.toString(),
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data?.msg || `${endpoint} API failed`);
    error.status = response.status;
    error.details = data;
    throw error;
  }

  return data;
}