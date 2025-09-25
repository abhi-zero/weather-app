import useWeatherData from "./hooks/useWeatherData";
import WeatherLayout from "./components/WeatherLayout";
import Search from "./components/Search/Search";
import NavBar from "./components/Header/NavBar";

function App() {
  const {
    setSearch,
    search,
    searchData,
    isSearching,
    searchError,
    setSelectedLocation,
  } = useWeatherData();

  return (
    <div className="flex flex-col items-center-safe bg-neutral-900 w-[100vw] min-h-screen">
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
          />
        </div>
      </div>
      <div className="my-8 lg:my-12 w-full">
        <WeatherLayout />
      </div>
    </div>
  );
}

export default App;
