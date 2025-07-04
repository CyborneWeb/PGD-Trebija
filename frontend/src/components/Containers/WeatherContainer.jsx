import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { WiThermometer } from "react-icons/wi";
import WeatherCard from "../Cards/WeatherCard";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Trebija coordinates
  const lat = 46.09707732164205;
  const lon = 14.102143017995592;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          API_PATHS.WEATHER.GET(lat, lon)
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError("Napaka pri pridobivanju podatkov o vremenu.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();

    // Refresh weather data every 30 minutes
    const intervalId = setInterval(fetchWeatherData, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  if (!weatherData || !weatherData.forecast) {
    return null;
  }

  return (
    <div className="w-full p-4 md:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md mb-8">
      <motion.div
        className="flex items-center justify-between mb-6 gap-3 border-b border-gray-200 dark:border-gray-700 pb-4 flex-col md:flex-row"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <WiThermometer className="text-red-600 dark:text-red-500 text-3xl" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Vremenska napoved
          </h2>
        </div>
        <motion.span
          className="text-sm italic text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Naj vas nepričakovani vremenski pojavi ne presenetijo
        </motion.span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Current day with current conditions */}
        <WeatherCard
          data={{
            date: weatherData.forecast[0]?.date,
            day: weatherData.forecast[0]?.day,
            current: weatherData.current,
          }}
          isCurrentDay={true}
          location={weatherData.location}
        />

        {/* Forecast for next 3 days */}
        {weatherData.forecast.slice(1).map((day, index) => (
          <WeatherCard key={day.date} data={day} />
        ))}
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
        Vremenski podatki pridobljeni preko{" "}
        <a
          href="https://www.weatherapi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-red-500 dark:text-red-400"
        >
          WeatherAPI
        </a>
      </div>
    </div>
  );
};

export default WeatherContainer;
