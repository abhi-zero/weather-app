import React from "react";
import {getWeatherIcon} from "../../content/constant";

export default function DailyForecast({
  weekday,
  maxValue,
  minValue,
  isWeatherLoading,
  unitSuffix,
  weatherCode
}) {
  return (
    <div>
      <div className="flex flex-col gap-4 bg-neutral-800 px-2.5 py-4 rounded-xl lg:w-[100.57px] min-w-[89.14px]">
        <div>
          <h1 className="text-white text-center">{weekday}</h1>
        </div>
        <div className="self-center w-[60px] h-[60px]">
          <img src={getWeatherIcon(weatherCode)} alt="" className="object-cover"/>
        </div>
        <div className="flex justify-between text-white">
          <p>
            {isWeatherLoading || maxValue === undefined ? (
              "--"
            ) : (
              <span>{`${maxValue.toString().split('.')[0]}${unitSuffix}`}</span>
            )}
          </p>

           <p>
            {isWeatherLoading || minValue === undefined ? (
              "--"
            ) : (
              <span>{`${minValue.toString().split('.')[0]}${unitSuffix}`}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
