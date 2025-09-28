import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import useDate from "../hooks/useDate/useDate";
import WeatherDetail from "./WeatherDetail/WeatherDetail";
import DailyForecast from "./DailyForecast/DailyForecast";
import useGroupHourlyByDay from "../hooks/useGroupHourlyByDay/useGroupHourlyByDay";
import HourlyWeather from "./HourlyWeather/HourlyWeather";

export default function WeatherLayout({ weatherData, weatherDataError, isWeatherLoading}) {

  const [isLoading, setLoading] = useState(false);

  const { getShortDayFromIndex } = useDate();

  const days = useGroupHourlyByDay(weatherData?.hourly);

  return (
    <div className="relative m-auto px-[16px] md:px-[20px] max-w-[1300px]">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="">
            <div>
              <CurrentWeather
                weatherData={weatherData}
                isWeatherLoading={isWeatherLoading}
                weatherDataError={weatherDataError}
                isLoading={isLoading}
                setLoading={setLoading}
              />
            </div>

            <div className="lg:flex lg:flex-wrap xl:flex-nowrap gap-5 lg:gap-6 grid grid-cols-[repeat(auto-fit,minmax(163px,1fr))] mt-5 lg:mt-8">
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
                value={weatherData?.current?.wind_speed_10m}
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

            <ul className="lg:flex lg:flex-wrap xl:flex-nowrap gap-4 grid grid-cols-[repeat(auto-fit,minmax(103.66px,1fr))] lg:max-w-[800px]">
              {isWeatherLoading || !weatherData
                ? Array.from({ length: 7 }).map((_, i) => (
                    <li key={i}>
                      <DailyForecast
                        weekday={"---"}
                        weatherCode={""}
                        isWeatherLoading={isWeatherLoading}
                        unitSuffix={""}
                      />
                    </li>
                  ))
                : weatherData?.daily?.weather_code.map((code, i) => (
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
                  ))}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <HourlyWeather days={days} isWeatherLoading={isWeatherLoading} />
        </div>
      </div>
    </div>
  );
}
