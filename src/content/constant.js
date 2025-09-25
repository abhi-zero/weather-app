// src/constants/weatherIcons.js

import sunny from "../assets/images/icon-sunny.webp";
import partlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import cloudy from "../assets/images/icon-overcast.webp";
import fog from "../assets/images/icon-fog.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import rain from "../assets/images/icon-rain.webp";
import snow from "../assets/images/icon-snow.webp";
import thunder from "../assets/images/icon-storm.webp";
// import freezingRain from "../assets/images/icon-freezing-rain.webp";


// Mapping weather codes → icons
export const weatherCodeToIcon = {
  0: sunny,
  1: sunny,
  2: partlyCloudy,
  3: cloudy,
  45: fog,
  48: fog,
  51: drizzle,
  53: drizzle,
  55: drizzle,
  61: rain,
  63: rain,
  65: rain,
  66: rain,
  67: rain,
  71: snow,
  73: snow,
  75: snow,
  77: snow,
  80: rain,
  81: rain,
  82: rain,
  85: snow,
  86: snow,
  95: thunder,
  96: thunder,
  99: thunder,
};

// Default fallback
export const getWeatherIcon = (code) => weatherCodeToIcon[code] || "N/A";
