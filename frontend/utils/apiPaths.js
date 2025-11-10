export const BASE_URL = "http://localhost:3001";

export const API_PATHS = {
  WEATHER: {
    GET: (lat, lon) => `${BASE_URL}/api/weather?lat=${lat}&lon=${lon}`,
  },
};
