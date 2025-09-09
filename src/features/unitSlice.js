import { createSlice } from "@reduxjs/toolkit";

export const unitSlice = createSlice({
    name : 'units',
    initialState : {
        tempUnit : 'celsius',
        windUnit : 'kmh',
        precipitationUnit : 'mm',
    },
    reducers : {
        selectTempUnit :(state,  action) => {
            state.tempUnit = action.payload;
        },
        selectWindUnit : (state,  action) => {
            state.windUnit = action.payload;
        },
        selectPrecipitationUnit :(state,  action) => {
            state.precipitationUnit = action.payload;
        }
    }
})


export const {selectTempUnit, selectWindUnit, selectPrecipitationUnit} = unitSlice.actions

export default unitSlice.reducer;