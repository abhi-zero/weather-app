import React from "react";

export default function WeatherDetail({ label, value ,isWeatherLoading, unitSuffix}) {

  return (
    <div>
      <div className="flex flex-col gap-6 bg-neutral-800 p-[20px] rounded-xl lg:w-[182px] min-w-[163px] lg:h-[118px]">
        <div>
          <h1 className="font-medium text-[18px] text-neutral-200 leading-[120%]">{label}</h1>
        </div>
        <div>
          <p className="font-light text-[32px] text-neutral-0 leading-[100%]">
            {isWeatherLoading || value === undefined ?
            '--'
            :
            <><span>{value}</span>
            {`${unitSuffix.length > 1 ? " " : ''}`}
             <span>{unitSuffix}</span> </>  
        }
          </p>
        </div>
      </div>
    </div>
  );
}
