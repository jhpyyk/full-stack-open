import { useEffect, useState } from "react"
import { Country, RawWeatherData } from "../../types"
import weatherService from '../../services/weather'
import WeatherInfo from "../WeatherInfo/WeatherInfo"

type OneCountryInfoProps = {
    country: Country
}

const OneCountryInfo = ({ country }: OneCountryInfoProps) => {
    const [weatherData, setWeatherData] = useState<RawWeatherData | null>(null)

    useEffect(() => {
        if (!country.capitalLocation) {
            setWeatherData(null)
            return
        }
        weatherService.getLocationWeather(country.capitalLocation).then(response => {
            if (response) {
                setWeatherData(response)
            }
        })
    }, [country])

    if (!weatherData) {
        return null
    }

    return (
        <>
            <h1>{country.name}</h1>
            <p><b>Capital</b>: {country.capital}</p>
            <p><b>Area</b>: {country.area} km{'\u00B2'}</p>
            <b>Languages:</b>
            <ul>
                {
                    country.languages.map(lang => {
                        return <li key={lang}>{lang}</li>
                    })
                }
            </ul>
            <img src={country.flag.svg} alt={country.flag.alt} width={200} />
            {weatherData ? <WeatherInfo weatherData={weatherData} capital={country.capital} /> : null}
        </>
    )
}

export default OneCountryInfo