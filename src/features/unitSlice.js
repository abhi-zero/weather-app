import { createSlice } from "@reduxjs/toolkit";

export const unitSlice = createSlice({
    name : 'units',
    initialState : {
        tempUnit : localStorage.getItem('tempUnit') || 'celsius',
        windUnit : localStorage.getItem('windUnit') || 'kmh',
        precipitationUnit : localStorage.getItem('precipitationUnit') || 'mm',
    },
    reducers : {
        selectTempUnit :(state,  action) => {
            state.tempUnit = action.payload;
            localStorage.setItem('tempUnit', state.tempUnit)
        },
        selectWindUnit : (state,  action) => {
            state.windUnit = action.payload;
            localStorage.setItem('windUnit', state.windUnit)
        },
        selectPrecipitationUnit :(state,  action) => {
            state.precipitationUnit = action.payload;
            localStorage.setItem('precipitationUnit', state.precipitationUnit)
        }
    }
})


export const {selectTempUnit, selectWindUnit, selectPrecipitationUnit} = unitSlice.actions

export default unitSlice.reducer;