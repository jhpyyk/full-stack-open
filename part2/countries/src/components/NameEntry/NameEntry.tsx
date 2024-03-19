type NameEntryProps = {
    name: string
}

const NameEntry = (props: NameEntryProps) => {
    return (
        <>
            {props.name}
        </>
    )
}

export default NameEntry