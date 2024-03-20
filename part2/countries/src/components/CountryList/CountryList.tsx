import { Country } from "../../types"
import './CountryListStyles.css'

type CountryListProps = {
    countries: Country[]
}

const NameEntryList = ({ countries }: CountryListProps) => {
    return (
        <>
            <ul className="country-list">
                {countries.map(country => {
                    return <li key={country.name}>{country.name}</li>
                })}
            </ul>
        </>
    )
}

export default NameEntryList