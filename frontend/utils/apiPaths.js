export const BASE_URL = "https://pgd-trebija.onrender.com";

export const API_PATHS = {
  WEATHER: {
    GET: (lat, lon) => `${BASE_URL}/api/weather?lat=${lat}&lon=${lon}`,
  },
};
