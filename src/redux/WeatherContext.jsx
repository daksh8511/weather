import { createSlice } from "@reduxjs/toolkit";

const WeatherSlice = createSlice({
    name : "weather",
    initialState : {
        title : ''
    },
    reducers : {
        getTitle : (state, action) => {
            state.title = action.payload
        }
    }
})


export const {getTitle} = WeatherSlice.actions

export default WeatherSlice.reducer