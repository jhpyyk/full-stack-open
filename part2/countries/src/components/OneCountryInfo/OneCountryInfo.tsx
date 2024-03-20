import { Country } from "../../types"

type OneCountryInfoProps = {
    country: Country
}

const OneCountryInfo = ({ country }: OneCountryInfoProps) => {
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
        </>
    )
}

export default OneCountryInfo