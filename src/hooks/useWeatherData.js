import React from 'react'
import { useEffect, useState } from 'react'
import { useGetLocationBySearchQuery } from '../api/geoCodeApi';
import { useGetWeatherQuery } from '../api/weatherApi';


export default function useWeatherData() {
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [geoLocation , setGeoLocation] = useState(null);

  useEffect(()=> {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoLocation({
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
          });
        },
        ()=> {
          console.warn("Geolocation not available or denied.");
        }
        
      )
    }
  },[])
  const { data: searchData, isLoading: isSearching, error: searchError } = useGetLocationBySearchQuery(search, { skip: !search });
   
  const activeLocation = selectedLocation ?? geoLocation
  const { data: weatherData, isLoading: isWeatherLoading, error: weatherDataError } = useGetWeatherQuery( activeLocation ?? {},
    { skip: !activeLocation})


  useEffect(() => {
    console.log(search);
    console.log(searchData);

    console.log(weatherData);
    console.log(weatherDataError);
   
    


  }, [search, searchData, weatherData, weatherDataError])

  return { setSearch, search, searchData, isSearching, searchError, weatherData, weatherDataError, isWeatherLoading, setSelectedLocation, geoLocation }
}


