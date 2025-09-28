import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function InstructionModal({ 
  setIsModalOpen
 }) {
  return (
    <div className="px-4">
      <div className="z-100 bg-neutral-900/60 backdrop-blur-sm border-1 border-neutral-400 rounded-xl">
        <div className="px-5 py-2.5 border-neutral-400 border-b-[1px]">
          <h1 className="flex items-center-safe gap-1.5 py-1">
            <span className="font-medium text-blue-300 text-xl leading-[120%]">
              <FaLocationDot />
            </span>{" "}
            <span className="font-medium text-neutral-50 text-xl leading-[120%]">
              Enable Location Access
            </span>
          </h1>
        </div>
        <div className="px-5 pt-2.5 pb-3">
          <ul className="list-disc list-inside">
            <li className="py-1 font-medium text-blue-300 leading-[120%]">
              Click the lock (🔒) or info icon in the address bar
            </li>
            <li className="py-1 font-medium text-blue-300 leading-[120%]">
              Open "Site settings" or "Permissions"
            </li>
            <li className="py-1 font-medium text-blue-300 leading-[120%]">
              Set Location to Allow
            </li>
            <li className="py-1 font-medium text-blue-300 leading-[120%]">
              Refresh the page and try again
            </li>
          </ul>
        </div>
        <div className="px-5 py-3 border-neutral-400 border-t-[1px]">
          <button
          onClick={() => setIsModalOpen(false)}
          className="bg-blue-700 hover:bg-blue-500 px-9 py-2.5 rounded-xl focus:outline-2 focus:outline-blue-700 focus:outline-offset-2 text-neutral-50 transition-all duration-300 ease-in-out cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
