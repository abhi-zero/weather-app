import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import envVariable from "../../envVariable";

export const reverseGeoCodeAPi = createApi({
    reducerPath : 'reverseGeoCodeAPi',
    baseQuery : fetchBaseQuery({baseUrl : envVariable.reverseGeocodeApi}),
    endpoints : (builder) =>( {
        reverseGeoCode : builder.query({
            query : ({latitude, longitude}) => `?lat=${latitude}&lon=${longitude}&apiKey=${envVariable.reverseGeocodeApiKey}`
        })
    })
})

export const {useReverseGeoCodeQuery} = reverseGeoCodeAPi