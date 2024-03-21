import { Country, } from "../../types"
import CountryList from "../CountryList/CountryList"
import OneCountryInfo from "../OneCountryInfo/OneCountryInfo"

type CountryDisplayProps = {
    countries: Country[]
    changeCountriesToShow: (country: Country[]) => void
}

const CountryDisplay = ({ countries, changeCountriesToShow }: CountryDisplayProps) => {
    if (countries.length === 0) {
        return <p>No matches</p>
    } else if (countries.length === 1) {
        return (
            <>
                <OneCountryInfo country={countries[0]} />
            </>
        )
    } else if (countries.length <= 10) {
        return (
            <>
                <CountryList countries={countries} changeCountriesToShow={changeCountriesToShow} />
            </>
        )
    } else {
        return (
            <>
                <p>Too many matches to show</p>
            </>
        )
    }


}

export default CountryDisplay