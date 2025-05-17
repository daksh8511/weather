import { createSlice } from "@reduxjs/toolkit";

const WeatherSlice = createSlice({
    name : "weather",
    initialState : {
        title : '',
        cities : ["Ahmedabad", "Delhi", "Kolkata", "Mumbai", "Pune"]
    },
    reducers : {
        getTitle : (state, action) => {
            state.title = action.payload
        },
        setCitiesNames : (state, action) => {
            state.cities.push(action.payload)
        }
    }
})


export const {getTitle, setCitiesNames} = WeatherSlice.actions

export default WeatherSlice.reducer