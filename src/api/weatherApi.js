import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import envVariables from '../../envVariable';

export const weatherApi = createApi({
    reducerPath : 'weatherApi',
    baseQuery : fetchBaseQuery({baseUrl : envVariables.weatherAPiUrl}),
    tagTypes : ['weather'],
    endpoints : (builder)=> ({
        getWeather :builder.query({
            query : ({longitude, latitude, pUnit='inch', tUnit='celsius', wsUnit = 'kmh'}) => `?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=weather_code,temperature_2m,precipitation,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=auto&wind_speed_unit=${wsUnit}&temperature_unit=${tUnit}&precipitation_unit=${pUnit}`
        }),
    })
})



export const {
    useGetWeatherQuery
} = weatherApi