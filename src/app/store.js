import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { weatherApi } from "../api/weatherApi";
import { geoCodeApi } from "../api/geoCodeApi";
import unitReducer from '../features/unitSlice'


export const store = configureStore({
    reducer : {
        [weatherApi.reducerPath] : weatherApi.reducer,
        [geoCodeApi.reducerPath] : geoCodeApi.reducer,
        units : unitReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware, geoCodeApi.middleware),

})

setupListeners(store.dispatch)