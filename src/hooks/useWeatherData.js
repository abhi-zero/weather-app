import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useGetLocationBySearchQuery } from '../api/geoCodeApi';
import { useGetWeatherQuery } from '../api/weatherApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useReverseGeoCodeQuery } from '../api/reverseGeoCodeApi';
import { setLocationName } from '../features/reverseGeocodeSlice';
import { useDispatch } from 'react-redux';


export default function useWeatherData() {
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [geoLocation, setGeoLocation] = useState(null);
  const [activeLocation, setActiveLocation] = useState(null);
  const tempUnit = useSelector(state => state.units.tempUnit);
  const windSpeedUnit = useSelector(state => state.units.windUnit);
  const precipitationUnit = useSelector(state => state.units.precipitationUnit)
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        () => {
          console.warn("Geolocation not available or denied.");
        }
      )
    }
  }, [])


  const { data: searchData, isLoading: isSearching, error: searchError } = useGetLocationBySearchQuery(search, { skip: !search });


  useEffect(() => {
    if (selectedLocation) {
      setActiveLocation({
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
      })
    } else if (geoLocation) {
      setActiveLocation(geoLocation);
    } else {
      setActiveLocation(null);
    }
  }, [selectedLocation, geoLocation, dispatch]);

  useEffect(() => {
    console.log(activeLocation);
    
  },[activeLocation])

  const { data: weatherData, isLoading: isWeatherLoading, error: weatherDataError, refetch } = useGetWeatherQuery(
    activeLocation ?
      {
        latitude: activeLocation.latitude,
        longitude: activeLocation.longitude,
        pUnit: precipitationUnit,
        tUnit: tempUnit,
        wsUnit: windSpeedUnit
      }
      : skipToken
  )
  useEffect(()=> {
    console.log(weatherData);
  })

  useEffect(() => {
    if(activeLocation){
      refetch();
    }
  }, [activeLocation, refetch])
  const { data: revereData } = useReverseGeoCodeQuery(activeLocation, { skip: !activeLocation })
  useEffect(() => {
    dispatch(setLocationName({
      name: revereData?.features[0].properties.name,
      city: revereData?.features[0].properties.city,
      cityState: revereData?.features[0].properties.state,
      country: revereData?.features[0].properties.country
    }))
  }, [revereData, dispatch])



  return {
    setSearch,
    search,
    searchData,
    isSearching,
    searchError,
    weatherData,
    weatherDataError,
    isWeatherLoading,
    setSelectedLocation,
    geoLocation
  }
}


