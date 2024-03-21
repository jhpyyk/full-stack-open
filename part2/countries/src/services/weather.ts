import axios from 'axios'
import { RawWeatherData, capitalLocation } from '../types'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const weather_api_key = import.meta.env.VITE_WEATHER_KEY

const getLocationWeather = (location: capitalLocation): Promise<RawWeatherData> => {
    const request = axios.get(`${baseUrl}lat=${location.lat}&lon=${location.lng}&appid=${weather_api_key}`)
    return request.then(response => response.data)
}

export default { getLocationWeather }