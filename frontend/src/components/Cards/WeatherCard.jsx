import React from "react";
import { motion } from "motion/react";
import {
  getWeatherIcon,
  isDayTime,
  translateWeatherCondition,
} from "../../../utils/weatherIcons";

const WeatherCard = ({ data, isCurrentDay = false, location }) => {
  if (!data) return null;

  // Format date - if current day, show "Today"
  const formatDate = (dateStr) => {
    if (isCurrentDay) return "Danes";
    const date = new Date(dateStr);
    // Format to display like "Pon, 24. jun" in Slovenian
    return new Intl.DateTimeFormat("sl-SI", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(date);
  };

  const day = data.day || {};
  const current = isCurrentDay ? data.current : null;
  const isDay = isDayTime(current);

  // Get weather icon based on condition code
  const weatherCode = isCurrentDay
    ? current?.condition?.code
    : day?.condition?.code;

  // Get and translate the condition text
  const conditionText = isCurrentDay
    ? translateWeatherCondition(current?.condition?.text)
    : translateWeatherCondition(day?.condition?.text);

  const IconComponent = getWeatherIcon(weatherCode, isDay);

  return (
    <motion.div
      className={`${
        isCurrentDay
          ? "bg-red-100 dark:bg-red-900/30"
          : "bg-gray-50 dark:bg-gray-800"
      } rounded-lg shadow-lg border ${
        isCurrentDay ? "border-red-200" : "border-gray-200"
      } dark:border-transparent overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, shadow: "xl" }}
    >
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3
            className={`text-lg font-bold ${
              isCurrentDay ? "text-red-800" : "text-gray-800"
            } dark:text-white`}
          >
            {formatDate(data.date)}
          </h3>
          {location && isCurrentDay && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Trebija
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IconComponent className="text-5xl mr-3 text-red-500" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {conditionText}
              </p>
              {isCurrentDay && (
                <p className="text-3xl font-bold text-gray-800 dark:text-white">
                  {current?.temp_c}°C
                </p>
              )}
              {!isCurrentDay && (
                <div className="flex gap-2">
                  <p className="text-lg font-bold text-gray-800 dark:text-white">
                    {day?.maxtemp_c}°
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    {day?.mintemp_c}°
                  </p>
                </div>
              )}
            </div>
          </div>

          {isCurrentDay && (
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Občutek: {current?.feelslike_c}°C
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Vlaga: {current?.humidity}%
              </div>
            </div>
          )}
        </div>

        {!isCurrentDay && (
          <div className="mt-3 text-sm weather-text">
            <p>Padavine: {day?.totalprecip_mm} mm</p>
            <p>Veter: {day?.maxwind_kph} km/h</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WeatherCard;
