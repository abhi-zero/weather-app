import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { weatherApi } from "../api/weatherApi";
import { geoCodeApi } from "../api/geoCodeApi";
import { reverseGeoCodeAPi } from "../api/reverseGeoCodeApi";
import unitReducer from '../features/unitSlice'
import  reverseGeoCodeReducer from "../features/reverseGeocodeSlice";


export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        [geoCodeApi.reducerPath]: geoCodeApi.reducer,
        [reverseGeoCodeAPi.reducerPath]: reverseGeoCodeAPi.reducer,
        units: unitReducer,
        reverseGeoCode : reverseGeoCodeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware, geoCodeApi.middleware, reverseGeoCodeAPi.middleware),

})

setupListeners(store.dispatch)