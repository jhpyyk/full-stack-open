import { Country } from "../../types"
import './CountryListStyles.css'

type CountryListProps = {
    countries: Country[]
    changeCountriesToShow: (country: Country[]) => void
}

const CountryList = ({ countries, changeCountriesToShow: changeCountriesToShow }: CountryListProps) => {
    return (
        <>
            <ul className="country-list">
                {countries.map(country => {
                    return (
                        <li key={country.name}>{country.name}<button onClick={() => changeCountriesToShow([country])}>show</button></li>
                    )
                })}
            </ul>
        </>
    )
}

export default CountryList