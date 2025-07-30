const axios = require("axios");

const getWeather = async (req, res) => {
  const { lat, lon } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Missing lat or lon" });
  }

  try {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: apiKey,
          q: `${lat},${lon}`,
          days: 4,
          lang: "sl", // Slovenian language
        },
      }
    );

    // Return the full forecastday array (today + next 3 days)
    res.json({
      current: response.data.current,
      forecast: response.data.forecast && response.data.forecast.forecastday,
      location: response.data.location,
      
      
    });
    //console.log(response.data)
  } catch (err) {
    console.error("Weather API Error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Failed to fetch weather data",
      details: err.response?.data || err.message,

    });
  }
};

module.exports = { getWeather };