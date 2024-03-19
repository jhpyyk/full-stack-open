import { useEffect, useState } from 'react'
import countryService from './services/countries'
import ControlledInputField from './components/ControlledInputField/ControlledInputField'
import NameEntryList from './components/NameEntryList/NameEntryList'
import { Country } from './types'

const App = () => {
    const [countryData, setCountryData] = useState<Country[]>([])
    const [countryNames, setCountryNames] = useState<string[]>([])
    const [countryNamesFiltered, setCountryNamesFiltered] = useState<string[]>([])

    const handleSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.value.length === 0) {
            setCountryNamesFiltered([])
            return
        }

        const filtered = filterNames(countryNames, event.target.value)
        if (filtered.length <= 10) {
            setCountryNamesFiltered(filtered)
        } else {
            setCountryNamesFiltered(['Too many matches'])
        }
    }

    useEffect(() => {
        countryService.getAll().then(response => {
            setCountryData(response)
            setCountryNames(parseNames(response))
        })
    }, [])

    return (
        <>
            <h1>Country info</h1>
            <ControlledInputField fieldName={'Search'} fieldOnChange={handleSearchFieldChange} />
            <NameEntryList nameList={countryNamesFiltered} />
        </>
    )
}

const filterNames = (names: string[], filterText: string): string[] => {
    const filtered = names.filter(name => {
        return name.toLowerCase().includes(filterText.toLowerCase())
    })
    return filtered
}

const parseNames = (data: Country[]): string[] => {
    const names = data.map(element => {
        return element.name.common
    })
    return names
}

export default App
