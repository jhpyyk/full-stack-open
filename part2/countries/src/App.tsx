import { useEffect, useState } from 'react'
import { RawCountryData, Country } from './types'
import countryService from './services/countries'
import ControlledInputField from './components/InputField/InputField'
import CountryDisplay from './components/CountryDisplay/CountryDisplay'

const App = () => {
    const [countriesParsed, setCountriesParsed] = useState<Country[]>([])
    const [countriesFiltered, setCountriesFiltered] = useState<Country[]>([])


    const handleSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCountriesFiltered(filterCountries(countriesParsed, event.target.value))
    }

    useEffect(() => {
        countryService.getAll().then(response => {
            setCountriesParsed(parseCountries(response))
        })
    }, [])

    return (
        <>
            <h1>Country info</h1>
            <ControlledInputField fieldName={'Search'} fieldOnChange={handleSearchFieldChange} />
            <CountryDisplay countries={countriesFiltered} />
        </>
    )
}

const filterCountries = (countries: Country[], filterText: string): Country[] => {
    const filtered = countries.filter(country => {
        return country.name.toLowerCase().includes(filterText.toLowerCase())
    })
    return filtered
}

const parseCountries = (data: RawCountryData[]): Country[] => {
    const parsedCountries = data.map(country => {
        return {
            name: country.name.common,
            capital: country.capital,
            area: country.area,
            languages: country.languages ? Object.values(country.languages) : ['unknown'],
            flag: {
                svg: country.flags.svg,
                alt: country.flags.alt
            }
        }
    })
    return parsedCountries
}


export default App
