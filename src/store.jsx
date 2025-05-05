import {configureStore} from '@reduxjs/toolkit'
import WeatherSlice from './redux/WeatherContext'

const WeatherStore = configureStore({
    reducer : {
        weather : WeatherSlice
    }
})

export default WeatherStore;