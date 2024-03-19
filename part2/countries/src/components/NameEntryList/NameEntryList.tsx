import NameEntry from "../NameEntry/NameEntry"
import './NameEntryListStyles.css'

type NameEntryListProps = {
    nameList: string[]
}

const NameEntryList = (props: NameEntryListProps) => {
    return (
        <>
            <ul>
                {props.nameList.map(name => {
                    return <li key={name}><NameEntry name={name} /></li>
                })}
            </ul>
        </>
    )
}

export default NameEntryList