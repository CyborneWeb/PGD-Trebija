export const BASE_URL = "http://192.168.1.143:8000";

export const API_PATHS = {
  WEATHER: {
    GET: (lat, lon) => `${BASE_URL}/api/weather?lat=${lat}&lon=${lon}`,
  },
};
