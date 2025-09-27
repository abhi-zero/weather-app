import React, { useEffect, useState } from "react";
import DropDownButton from "../DropdownButton/DropDownButton";
import { IoIosArrowDown } from "react-icons/io";
import useDate from "../../hooks/useDate/useDate";
import { getWeatherIcon } from "../../content/constant";

export default function HourlyWeather({ days, isWeatherLoading }) {
  const { getLongDay, formatHour, getDayIndex } = useDate();

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectDayIndex, setSelectDayIndex] = useState(0);
 

  const [selectDay, setSelectDay] = useState(getLongDay());

  return (
    <div className="bg-neutral-800 py-6 rounded-xl min-w-[285px] lg:max-w-[428px] min-h-[700px]">
      <div>
        <div className="flex justify-between items-center-safe gap-2 px-6">
          <div >
            <h1 className="font-medium text-neutral-0 text-xl leading-[120%]">
              Hourly Weather
            </h1>
          </div>
          <div className="relative w-fit h-full">
            {/*days button */}

            <DropDownButton
              setDialogOpen={setDialogOpen}
              isDialogOpen={isDialogOpen}
              iconArrow={<IoIosArrowDown />}
              label={selectDay}
            />

            {/* menu for days*/}
            <div
              className={` ${
                isDialogOpen ? "scale-100 opacity-100" : "scale-0 opacity-35"
              } origin-top-right transition-all duration-300 ease-in-out top-[120%] -translate-x-[100%] left-full absolute`}
            >
              {isDialogOpen && (
                <div
                  className={` flex flex-col gap-1 bg-neutral-700 px-3 py-2.5 rounded-[14px] text-neutral-0 `}
                >
                  <ul>
                    {days.map((day,i) => (
                      <li
                        key={day?.hours.time}
                        className={`flex justify-between items-center-safe  my-1 px-4 py-2 rounded-[7px] cursor-pointer ${
                          selectDay === day?.label
                            ? "bg-neutral-400 text-neutral-900 "
                            : "hover:bg-neutral-600"
                        } transition-all duration-300 ease-in-out`}
                        onClick={() => {
                          setSelectDay(day.label);
                          setDialogOpen(false);
                          setSelectDayIndex(i);
                        }}
                      >
                        {day?.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 max-h-[590px] overflow-y-scroll scroll-section">
          {/* Hourly weather content */}
          <ul className="flex flex-col gap-2.5 px-6 py-3">
            {isWeatherLoading || !days[selectDayIndex]
              ? Array.from({ length: 24 }).map((_, i) => <li className="bg-neutral-700 px-4 py-2.5 rounded-xl outline-[1px] outline-neutral-600 h-[60px]" key={i}></li>)
              : days[selectDayIndex].hours.map((hour) => (
                  <li key={`${hour.weathercode}-${hour.time}`} className="bg-neutral-700 px-4 py-2.5 rounded-xl outline-[1px] outline-neutral-600 h-[60px]">
                    <span className="flex justify-between items-center-safe gap-2">
                      <span className="flex items-center-safe gap-2">
                      <img
                        src={getWeatherIcon(hour.weathercode)}
                        alt=""
                        className="w-[40px] h-[40px]"
                      />{" "}
                      <span className="font-medium text-neutral-0 text-xl leading-[120%]">
                        {formatHour(hour.time)}
                      </span>
                    </span>
                    <span className="font-medium text-neutral-0 leading-[120%]">
                      {`${hour.temperature.toString().split('.')[0]}°`}
                    </span>
                    </span>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
