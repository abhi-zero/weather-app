import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Button from "./Button";

export default function NavBar() {
  const [isMetric, setMetric] = useState(true);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [tempUnit, setTempUnit] = useState("celsius");
  const [windUnit, setWindUnit] = useState("kmh");
  const [precipitationUnit, setPrecipitationUnit] = useState("mm");
  const celsiusSym = "\u2103";
  const farenheitsym = "\u2109";

  useEffect(()=> {
    if(isMetric === false){
      setPrecipitationUnit('inch');
      setTempUnit('farenheit');
      setWindUnit('mph');
    }else{
      setPrecipitationUnit('mm');
      setTempUnit('celsius');
      setWindUnit('kmh');
    }
  },[isMetric, setPrecipitationUnit,setTempUnit,setWindUnit])

  useEffect(()=> {
    
  })
 
  return (
    <header className="w-screen">
      <nav className="flex justify-between items-center-safe m-auto p-[30px] max-w-[1300px]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="relative w-fit h-full">
          {/* unit button */}
          <button
            onClick={() => setDialogOpen(!isDialogOpen)}
            className="flex items-center-safe gap-1 bg-neutral-700 px-2.5 py-1.5 rounded-[7px] font-medium text-neutral-0 cursor-pointer"
          >
            <span>
              <IoSettingsSharp />
            </span>{" "}
            <span className="hidden sm:block">Units</span>{" "}
            <span>{isDialogOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {/* menu for units */}
          <div className={`opacity-0 scale-75 ${isDialogOpen ? 'opacity-100 scale-100' : ''} transition-all duration-300 ease-in-out top-[120%] -translate-x-[100%] left-full absolute`}>
            {isDialogOpen &&  <div
          
          className={` flex flex-col gap-1 bg-neutral-700 px-3 py-2.5 rounded-[14px] text-neutral-0  unit-menu `}>
            <div>
              <Button

              onClick={() => setMetric(!isMetric)}
                text={isMetric ? "Switch to imperial" : "Switch to metric"}
              ></Button>
            </div>
            {/* temprature units*/}
            <div className="border-neutral-500 border-b-[1px]">
              <h4 className="mb-2 px-2.5 text-neutral-400 text-sm">
                Temperature
              </h4>
              <div className="flex flex-col gap-0.5">
                <Button
                  text={`Celsius(${celsiusSym})`}
                  isActive={tempUnit === "celsius" }
                  onClick={()=> setTempUnit('celsius')}
                ></Button>
                <Button
                  text={`Farenheit(${farenheitsym})`}
                  isActive={tempUnit === "farenheit" }
                  onClick={()=> setTempUnit('farenheit')}
                ></Button>
              </div>
            </div>
            {/* wind speed units*/}
            <div className="border-neutral-500 border-b-[1px]">
              <h4 className="mb-2 px-2.5 text-neutral-400 text-sm">
                Wind Speed
              </h4>
              <div className="flex flex-col gap-0.5">
                <Button
                  text={"km/h"}
                  isActive={windUnit === "kmh" }
                  onClick={()=> setWindUnit('kmh')}
                ></Button>
                <Button
                  text={"mph"}
                  isActive={windUnit === "mph" }
                  onClick={()=> setWindUnit('mph')}
                ></Button>
              </div>
            </div>
            {/* precipitation units */}
            <div className="">
              <h4 className="mb-2 px-2.5 text-neutral-400 text-sm">
                Precipitation
              </h4>
              <div className="flex flex-col gap-0.5">
                <Button
                  text={"Millimeter(mm)"}
                  isActive={precipitationUnit === "mm" }
                    onClick={()=> setPrecipitationUnit('mm')}
                ></Button>
                <Button
                  text={"Inches(in)"}
                  isActive={precipitationUnit === "inch" }
                  onClick={()=> setPrecipitationUnit('inch')}
                ></Button>
              </div>
            </div>
          </div >}
          </div>
        </div>
      </nav>
    </header>
  );
}
