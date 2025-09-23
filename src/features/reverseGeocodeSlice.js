import { createSlice } from "@reduxjs/toolkit";

export const reverseGeoCodeSlice = createSlice({
  name: "reverseGeoCode",
  initialState: {
    name : "",
    city: "",
    cityState: "",
    country: "",
  },
  reducers: {
    setLocationName: (state, action) => {
      const { cityState, city, country, name } = action.payload;
      state.name = name ?? city;
      state.cityState = cityState;
      state.city = city;
      state.country = country;
    },
  },
});

export const {setLocationName} = reverseGeoCodeSlice.actions;
export default reverseGeoCodeSlice.reducer; 
