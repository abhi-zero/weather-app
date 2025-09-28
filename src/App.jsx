import useWeatherData from "./hooks/useWeatherData";
import WeatherLayout from "./components/WeatherLayout";
import Search from "./components/Search/Search";
import NavBar from "./components/Header/NavBar";
import InstructionModal from "./components/Dialog/InstructionModal";
import { useState } from "react";

function App() {
  const {
    setSearch,
    fetchGeoLocation,
    search,
    searchData,
    isSearching,
    searchError,
    setSelectedLocation,
    weatherData,
    weatherDataError,
    isWeatherLoading,
    geoError
  } = useWeatherData();

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleInstructionModal() {
    if(geoError){
      setIsModalOpen(true);
    }else{
      setIsModalOpen(false);
    }
  }


  function handleFunctions(){
    setSelectedLocation(null);
    fetchGeoLocation();
    toggleInstructionModal();
  }

  return (
    <div className="relative flex flex-col items-center-safe bg-neutral-900 w-[100vw] min-h-screen">
       {isModalOpen && 
       
        <div className="top-[15%] md:top-[30%] md:left-[50%] z-100 absolute md:-translate-x-1/2">
       <InstructionModal setIsModalOpen={setIsModalOpen}/>
     </div>}
      <NavBar />
      <div>
        <div className="my-[30px]">
          <h1 className="px-[20px] font-bg text-[52px] text-neutral-50 text-center text-wrap leading-14">
            How's the sky looking today?
          </h1>
        </div>
        <div className="mx-auto md:w-fit">
          <Search
            searchData={searchData}
            isLoading={isSearching}
            error={searchError}
            setSelectedLocation={setSelectedLocation}
            setSearch={setSearch}
            search={search}
            onClick={handleFunctions}
          />
        </div>
      </div>
      <div className="my-8 lg:my-12 w-full">
        <WeatherLayout
          weatherData={weatherData}
          weatherDataError={weatherDataError}
          isWeatherLoading={isWeatherLoading}
        />
      </div>
    </div>
  );
}

export default App;
