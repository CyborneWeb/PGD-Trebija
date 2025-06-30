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

export { getWeatherIcon, isDayTime };
