import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import useWeatherData from "../hooks/useWeatherData";
import useDate from "../hooks/useDate/useDate";
import WeatherDetail from "./WeatherDetail/WeatherDetail";
import DailyForecast from "./DailyForecast/DailyForecast";
export default function WeatherLayout() {
  const { weatherData, weatherDataError, isWeatherLoading } = useWeatherData();
  const [isLoading, setLoading] = useState(false);

  const { getShortDayFromIndex } = useDate();
  return (
    <div>
      <div className="m-auto px-[16px] md:px-[20px] max-w-[1300px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div>
            <div>
              <CurrentWeather
                weatherData={weatherData}
                isWeatherLoading={isWeatherLoading}
                weatherDataError={weatherDataError}
                isLoading={isLoading}
                setLoading={setLoading}
              />
            </div>

            <div className="md:flex gap-5 lg:gap-6 grid grid-cols-[repeat(auto-fit,minmax(163px,1fr))] mt-5 lg:mt-8">
              <WeatherDetail
                label={"Feels Like"}
                value={weatherData?.current?.apparent_temperature}
                isWeatherLoading={isWeatherLoading}
                unitSuffix={"\u00B0"}
              />
              <WeatherDetail
                label={"Humidity"}
                value={weatherData?.current?.relative_humidity_2m}
                isWeatherLoading={isWeatherLoading}
                unitSuffix={weatherData?.current_units?.relative_humidity_2m}
              />
              <WeatherDetail
                label={"Wind"}
                value={weatherData?.current?.relative_humidity_2m}
                isWeatherLoading={isWeatherLoading}
                unitSuffix={weatherData?.current_units?.wind_speed_10m}
              />
              <WeatherDetail
                label={"Precipitation"}
                value={weatherData?.current?.precipitation}
                isWeatherLoading={isWeatherLoading}
                unitSuffix={weatherData?.current_units?.precipitation}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="font-medium text-white text-xl leading-[120%]">
                Daily Forecast
              </h2>
            </div>

            <ul className="md:flex gap-4 grid grid-cols-[repeat(auto-fit,minmax(103.66px,1fr))]">
              {isWeatherLoading ? (
               Array.from({length : 7}).map((_,i)=> (
                  <li key={i}>
                  <DailyForecast  
                    weekday={"---"}
                    weatherCode={""}
                    isWeatherLoading={isWeatherLoading}
                    unitSuffix={""}
                  />
                </li> 
              ))
              ) : (
                weatherData?.daily?.weather_code.map((code, i) => (
                  <li key={`${code}-${i}`}>
                    <DailyForecast
                      weekday={getShortDayFromIndex(i)}
                      weatherCode={weatherData?.daily?.weather_code[i]}
                      maxValue={weatherData?.daily?.temperature_2m_max[i]}
                      minValue={weatherData?.daily?.temperature_2m_min[i]}
                      isWeatherLoading={isWeatherLoading}
                      unitSuffix={"\u00B0"}
                    />
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
