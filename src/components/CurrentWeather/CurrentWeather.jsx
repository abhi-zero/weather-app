import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import sun from "../../assets/images/icon-sunny.webp";
import useWeatherData from "../../hooks/useWeatherData";

export default function CurrentWeather() {
  const location = useSelector((state) => state.reverseGeoCode);
  const { weatherData, weatherDataError, isWeatherLoading } = useWeatherData();

  useEffect(() => {
    console.log(weatherData?.current?.temperature_2m);
  }, [weatherData]);
  return (
    <div
      className={`h-[286px] lg:w-[800px] max-w-[433px] md:max-w-[720px] bg-[image:var(--background-hero-mobile)] md:bg-[image:var(--background-hero-desktop)] bg-cover bg-center  rounded-3xl`}
    >
      <div className="place-content-center px-[16px] md:px-[30px] h-full">
        <div className="flex md:flex-row flex-col justify-center-safe md:justify-between items-center-safe md:items-center-safe">
          <div className="md:text-left text-center">
            <h1 className="font-bold text-[28px] text-white">
              <span>{location.name}</span>, <span>{location.country}</span>
            </h1>
            <p className="font-medium text-[18px] text-white">Tuseday, Aug 5, 2025</p>
          </div>
          <div className="flex items-center">
            <div className="w-[120px] h-[120px]">
              <img src={sun} alt="" className="object-cover" />
            </div>
            <div>
              <h1 className="font-dmserif font-semibold text-[96px] text-white italic">
                {isWeatherLoading
                  ? "-- --"
                  : weatherDataError
                  ? "Error"
                  : `${weatherData?.current?.temperature_2m}°`}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
