import axios from "axios";

import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Response interceptor

axiosInstance.interceptors.response.use(
  (response) => {
    // You can handle the response here if needed
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timed out. Please check your network connection.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
