import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import envVariables  from "../../envVariable";

export const geoCodeApi = createApi({
    reducerPath :'geoCodeApi',
    baseQuery : fetchBaseQuery({baseUrl : envVariables.geocode}),
    endpoints :(builder) =>({
        getLocationBySearch : builder.query({
            query : (search) => `?name=${encodeURIComponent(search)}&language=en&format=json`
        })
    })
}) 

export const{
    useGetLocationBySearchQuery
} = geoCodeApi