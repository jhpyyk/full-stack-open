import { RawWeatherData } from "../../types"

type WeatherInfoProps = {
    weatherData: RawWeatherData,
    capital: string
}

const WeatherInfo = ({ weatherData, capital }: WeatherInfoProps) => {
    return (
        <>
            <h2>
                <b>Weather in {capital}</b>
            </h2>
            <p>
                <b>Temperature</b>: {kelvinToCelsius(weatherData.main.temp).toFixed(2)} {'\u2103'}
            </p>
            <img src={getWeatherIconUrl(weatherData.weather[0].icon)} width={150} />
            <p>
                <b>Wind: </b>{weatherData.wind.speed.toFixed(1)} m/s
            </p>
        </>
    )
}

const kelvinToCelsius = (tempInK: number) => {
    return tempInK - 273.15
}

const getWeatherIconUrl = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

export default WeatherInfo