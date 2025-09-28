import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import {  selectTempUnit, selectWindUnit, selectPrecipitationUnit} from '../../features/unitSlice'
import DropDownButton from "../DropdownButton/DropDownButton";

export default function NavBar() {
  const dispatch = useDispatch()
  const [isMetric, setMetric] = useState(true);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const tempUnit = useSelector(state => state.units.tempUnit);
 const windUnit = useSelector(state => state.units.windUnit);
 const precipitationUnit = useSelector(state => state.units.precipitationUnit)

  const celsiusSym = "\u2103";
  const fahrenheitsym = "\u2109";

  useEffect(()=> {
    if(isMetric === false){
      dispatch(selectPrecipitationUnit('inch'));
     dispatch(selectTempUnit('fahrenheit'));
      dispatch(selectWindUnit('mph'))
    }else{
      dispatch(selectPrecipitationUnit('mm'));
     dispatch(selectTempUnit('celsius'));
      dispatch(selectWindUnit('kmh'))
    }
  },[isMetric, dispatch])

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
          
          <DropDownButton 
          setDialogOpen={setDialogOpen}
          isDialogOpen={isDialogOpen}
          icon={<IoSettingsSharp />}
          iconArrow={<IoIosArrowDown />}
          label={"Units"}
          />

          {/* menu for units */}
          <div className={` ${isDialogOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-35'} origin-top-right transition-all duration-300 ease-in-out top-[120%] -translate-x-[100%] left-full absolute z-50`}>
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
                  onClick={()=> dispatch(selectTempUnit('celsius'))}
                ></Button>
                <Button
                  text={`Fahrenheit(${fahrenheitsym})`}
                  isActive={tempUnit === "fahrenheit" }
                  onClick={()=> dispatch(selectTempUnit('fahrenheit'))}
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
                  onClick={()=> dispatch(selectWindUnit('kmh'))}
                ></Button>
                <Button
                  text={"mph"}
                  isActive={windUnit === "mph" }
                  onClick={()=> dispatch(selectWindUnit('mph'))}
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
                    onClick={()=> dispatch(selectPrecipitationUnit('mm'))}
                ></Button>
                <Button
                  text={"Inches(in)"}
                  isActive={precipitationUnit === "inch" }
                  onClick={()=> dispatch(selectPrecipitationUnit('inch'))}
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
