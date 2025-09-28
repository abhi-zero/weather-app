import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import sun from "../../assets/images/icon-sunny.webp";
import useDate from "../../hooks/useDate/useDate";

export default function CurrentWeather({
  weatherData,
  weatherDataError,
  isWeatherLoading,
  isLoading,
  setLoading,
}) {
  const location = useSelector((state) => state.reverseGeoCode);

  // useeffect for setting loading true or false
  useEffect(() => {
    if (location.name === undefined || location.country === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [weatherData, setLoading, location.name, location.country]);

  const { currentFullDate } = useDate();

  return (
    <div
      className={`lg:max-w-[800px] lg:min-w-[720px] w-full min-w-[343px]  sm:max-w-[720px] md:max-w-[100%] bg-neutral-800   rounded-3xl overflow-hidden  min-h-[286px] sm:h-[286px]`}
    >
      {isWeatherLoading || !weatherData || isLoading ? (
        <div className="flex flex-col justify-center items-center gap-1 h-full min-h-[286px]">
          <div className="flex justify-center items-center-safe gap-1.5">
            <div className="bg-neutral-400 rounded-full w-[10px] h-[10px] animate-bounce animation-delay-0"></div>
            <div className="bg-neutral-400 rounded-full w-[10px] h-[10px] animate-bounce animation-delay-200"></div>
            <div className="bg-neutral-400 rounded-full w-[10px] h-[10px] animate-bounce animation-delay-400"></div>
          </div>
          <div>
            <h2 className="pl-[8px] text-neutral-50 text-sm">
              Loading...
            </h2>
          </div>
        </div>
      ) : (
        <div className="place-content-center bg-[image:var(--background-hero-mobile)] md:bg-[image:var(--background-hero-desktop)] bg-cover bg-center px-[24px] md:px-[30px] h-full min-h-[286px]">
          <div className="flex md:flex-row flex-col justify-center-safe md:justify-between items-center-safe md:items-center-safe">
            <div className="md:text-left text-center">
              <h1 className="gap-1 font-bold text-[28px] text-white">
                {isLoading ? (
                  "-- --"
                ) : (
                  <>
                    <span className="overflow-hidden font-medium">{location.name}</span>,{" "}
                    <span>{location.country}</span>
                  </>
                )}
              </h1>
              <p className="font-medium text-[18px] text-white">
                {currentFullDate}
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[120px] h-[120px]">
                <img src={sun} alt="" className="object-cover" />
              </div>
              <div>
                <h1 className="font-dmserif font-semibold text-[96px] text-white italic">
                  {isWeatherLoading ||
                  weatherData?.current?.temperature_2m === undefined
                    ? "-- --"
                    : weatherDataError
                    ? "Error"
                    : `${
                        weatherData?.current?.temperature_2m
                          .toString()
                          .split(".")[0]
                      }\u00B0`}
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
