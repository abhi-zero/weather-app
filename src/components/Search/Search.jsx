import React from "react";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";

export default function Search({
  setSearch,
  searchData,
  isLoading,
  error,
  setSelectedLocation,
  search,
 onClick,
 
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setSearch(data.search.trim());
  }

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex md:flex-row flex-col justify-between gap-4 md:gap-5 px-5 md:w-[700px]"
        >
          <div className="relative w-full">
            <div className="top-[50%] left-0 absolute text-neutral-50 text-2xl -translate-y-1/2 translate-1/2">
              <IoSearch />
            </div>
            <input
              className="bg-neutral-800 py-3 pr-6 pl-12 rounded-xl w-full text-neutral-200 text-xl"
              type="text"
              placeholder={`Enter city name`}
              {...register("search", { required: "We need a value here" })}
              onChange={(e) => setSearch(e.target.value.trim())}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-500 px-9 py-3 rounded-xl focus:outline-2 focus:outline-blue-700 focus:outline-offset-2 min-h-[48px] text-neutral-50 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Search
          </button>
           <button
            type="button"
            onClick={onClick}
            className="flex justify-center-safe items-center-safe bg-blue-700 hover:bg-neutral-0 px-9 py-3 rounded-xl focus:outline-2 focus:outline-blue-700 focus:outline-offset-2 min-h-[48px] text-neutral-50 hover:text-blue-700 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <span className=""><FaLocationArrow /></span>
          </button>
        </form>
        <p className="px-5 text-red-600 text-sm md:text-left text-center">
          {errors.search && errors.search.message}
        </p>
      </div>
      {error ? (
        <h2>error.status</h2>
      ) : (
        search !== "" && (
          <div className="right-0 md:right-auto left-0 md:left-auto z-50 absolute bg-neutral-800 shadow-neutral-950 shadow-xl mx-5 mt-3 p-2 rounded-2xl md:w-[415px] text-neutral-100">
            <ul>
              {isLoading || (search.length > 0 && search.length < 2) ? (
                <li className="hover:bg-neutral-600 my-1 px-4 py-2 rounded-[7px] w-full cursor-pointer">
                  Loading..
                </li>
              ) : !searchData.results ? (
                <li className="hover:bg-neutral-600 my-1 px-4 py-2 rounded-[7px] w-full cursor-pointer">
                  Not Found
                </li>
              ) : (
                searchData?.results &&
                searchData?.results?.map((loc) => (
                  <li
                    key={`${loc.longitude}-${loc.latitude}`}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setSearch("");
                    }}
                    className="flex justify-between items-center-safe hover:bg-neutral-600 my-1 px-4 py-2 rounded-[7px] w-full cursor-pointer"
                  >
                    <h2>
                      {loc.name}, {loc.country}{" "}
                    </h2>
                    <p>
                      <span>{loc.latitude}</span> - <span>{loc.longitude}</span>
                    </p>
                  </li>
                ))
              )}
            </ul>
          </div>
        )
      )}
    </div>
  );
}
