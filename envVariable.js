const envVariables = {
    weatherAPiUrl : import.meta.env.VITE_WEATHER_API_BASE_URL,
    geocode : import.meta.env.VITE_GEOCODE_API_BASE_URL,
    reverseGeocodeApiKey : import.meta.env.VITE_REVERSE_GEOCODE_API_KEY,
    reverseGeocodeApi : import.meta.env.VITE_REVERSE_GEOCODE_API_BASE_URL,
}

export default envVariables;