import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloudy,
  WiDayFog,
  WiNightFog,
  WiDayRain,
  WiNightRain,
  WiDaySnow,
  WiNightSnow,
  WiDaySleet,
  WiNightSleet,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiFog,
  WiSnow,
  WiRain,
  WiThunderstorm,
  WiSleet,
  WiRainMix,
  WiSnowWind,
  WiStormShowers,
  WiHail,
} from "react-icons/wi";

const getWeatherIcon = (code, isDay = true) => {
  const iconMap = {
    // Clear/Sunny
    1000: isDay ? WiDaySunny : WiNightClear,

    // Partly cloudy
    1003: isDay ? WiDayCloudy : WiNightAltCloudy,

    // Cloudy and Overcast
    1006: WiCloudy,
    1009: WiCloudy,

    // Mist and Fog
    1030: isDay ? WiDayFog : WiNightFog,
    1135: WiFog,
    1147: WiFog,

    // Rain possible/light
    1063: isDay ? WiDayRain : WiNightRain,
    1150: isDay ? WiDayRain : WiNightRain,
    1153: isDay ? WiDayRain : WiNightRain,
    1180: isDay ? WiDayRain : WiNightRain,
    1183: WiRain,
    1240: WiRain,

    // Moderate to heavy rain
    1186: WiRain,
    1189: WiRain,
    1192: WiRain,
    1195: WiRain,
    1243: WiRain,
    1246: WiRain,

    // Snow possible/light
    1066: isDay ? WiDaySnow : WiNightSnow,
    1210: isDay ? WiDaySnow : WiNightSnow,
    1213: WiSnow,
    1255: WiSnow,

    // Moderate to heavy snow
    1216: WiSnow,
    1219: WiSnow,
    1222: WiSnow,
    1225: WiSnow,
    1258: WiSnow,
    1114: WiSnowWind,
    1117: WiSnowWind,

    // Sleet
    1069: isDay ? WiDaySleet : WiNightSleet,
    1204: WiSleet,
    1207: WiSleet,
    1249: WiSleet,
    1252: WiSleet,

    // Freezing rain/drizzle
    1072: WiRainMix,
    1168: WiRainMix,
    1171: WiRainMix,
    1198: WiRainMix,
    1201: WiRainMix,

    // Thunder
    1087: isDay ? WiDayThunderstorm : WiNightThunderstorm,
    1273: WiThunderstorm,
    1276: WiThunderstorm,
    1279: WiThunderstorm,
    1282: WiThunderstorm,

    // Ice pellets
    1237: WiHail,
    1261: WiHail,
    1264: WiHail,
  };

  // Default icon if code is not found
  return iconMap[code] || (isDay ? WiDaySunny : WiNightClear);
};

// Slovenian weather translations
const weatherTranslations = {
  // Clear/Sunny conditions
  Sunny: "Sončno",
  Clear: "Jasno",
  "Partly cloudy": "Delno oblačno",
  Cloudy: "Oblačno",
  Overcast: "Pretežno oblačno",

  // Mist/Fog
  Mist: "Meglica",
  Fog: "Megla",
  "Freezing fog": "Zmrzujoča megla",

  // Rain
  "Patchy rain possible": "Možne krajevne padavine",
  "Patchy light drizzle": "Krajevna rahla rositev",
  "Light drizzle": "Rahla rositev",
  "Patchy light rain": "Krajevno rahel dež",
  "Light rain": "Rahel dež",
  "Moderate rain at times": "Občasno zmeren dež",
  "Moderate rain": "Zmeren dež",
  "Heavy rain at times": "Občasno močan dež",
  "Heavy rain": "Močan dež",
  "Light rain shower": "Rahel naliv",
  "Moderate or heavy rain shower": "Zmeren do močan naliv",
  "Torrential rain shower": "Silovit naliv",

  // Freezing conditions
  "Freezing drizzle": "Zmrzujoča rositev",
  "Heavy freezing drizzle": "Močna zmrzujoča rositev",
  "Light freezing rain": "Rahel zmrzujoč dež",
  "Moderate or heavy freezing rain": "Zmeren do močan zmrzujoč dež",

  // Snow
  "Patchy snow possible": "Možen krajevni sneg",
  "Patchy light snow": "Krajevno rahel sneg",
  "Light snow": "Rahel sneg",
  "Patchy moderate snow": "Krajevno zmeren sneg",
  "Moderate snow": "Zmeren sneg",
  "Patchy heavy snow": "Krajevno močan sneg",
  "Heavy snow": "Močan sneg",
  "Light snow showers": "Rahlo sneženje",
  "Moderate or heavy snow showers": "Zmerno do močno sneženje",
  "Blowing snow": "Snežni zameti",
  Blizzard: "Snežni metež",

  // Sleet
  "Patchy sleet possible": "Možen krajevni dež s snegom",
  "Light sleet": "Rahel dež s snegom",
  "Moderate or heavy sleet": "Zmeren do močan dež s snegom",
  "Light sleet showers": "Rahli nalivi dežja s snegom",
  "Moderate or heavy sleet showers": "Zmerni do močni nalivi dežja s snegom",

  // Ice pellets
  "Ice pellets": "Ledene kroglice",
  "Light showers of ice pellets": "Rahli nalivi ledenih kroglic",
  "Moderate or heavy showers of ice pellets":
    "Zmerni do močni nalivi ledenih kroglic",

  // Thunder
  "Thundery outbreaks possible": "Možna grmenja",
  "Patchy light rain with thunder": "Krajevno rahel dež z grmenjem",
  "Moderate or heavy rain with thunder": "Zmeren do močan dež z grmenjem",
  "Patchy light snow with thunder": "Krajevno rahel sneg z grmenjem",
  "Moderate or heavy snow with thunder": "Zmeren do močan sneg z grmenjem",

  // Additional conditions that might be returned by API
  "Partly Cloudy": "Delno oblačno",
  "Moderate Or Heavy Rain Shower": "Zmeren do močan naliv",
  "Moderate Or Heavy Snow Shower": "Zmerno do močno sneženje",
  "Patchy rain nearby": "Rahle padavine v bližini",
  "Patchy snow nearby": "Rahle sneg v bližini",
  "Patchy sleet nearby": "Rahli dež s snegom v bližini",
  "Patchy freezing drizzle nearby": "Krajevna zmrzujoča rositev v bližini",
  "Thundery outbreaks in nearby": "Grmenja v bližini",
  "Light Rain": "Rahel dež",
  "Moderate Rain": "Zmeren dež",
  "Heavy Rain": "Močan dež",
  "Light Snow": "Rahel sneg",
  "Moderate Snow": "Zmeren sneg",
  "Heavy Snow": "Močan sneg",
};

// Function to translate weather conditions to Slovenian
const translateWeatherCondition = (englishText) => {
  if (!englishText) return "";

  // Create a normalized version of the input for more reliable lookup
  const normalizedText = englishText.trim();

  // First try exact match
  if (weatherTranslations[normalizedText]) {
    return weatherTranslations[normalizedText];
  }

  // Try case-insensitive match
  const lowerCaseText = normalizedText.toLowerCase();
  const translationKeys = Object.keys(weatherTranslations);

  for (const key of translationKeys) {
    if (key.toLowerCase() === lowerCaseText) {
      return weatherTranslations[key];
    }
  }

  // If we still can't find a translation, log it for debugging and return original
  console.log(`Translation missing for: "${englishText}"`);
  return englishText;
};

// Helper function to determine if it's day or night based on current time and location
const isDayTime = (current) => {
  if (!current) return true;

  // If the API provides is_day property, use it
  if (current.is_day !== undefined) {
    return current.is_day === 1;
  }

  // Fallback to time-based check
  const now = new Date();
  const hours = now.getHours();
  return hours >= 6 && hours < 20; // Simple day/night check
};

export { getWeatherIcon, isDayTime, translateWeatherCondition };
