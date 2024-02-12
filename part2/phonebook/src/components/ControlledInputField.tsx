interface ControlledInputFieldProps {
    fieldName: string
    fieldOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ControlledInputField = ({ fieldName, fieldOnChange }: ControlledInputFieldProps): React.JSX.Element => {
    return (
        <>
            {fieldName}: <input onChange={fieldOnChange} />
        </>
    )
}

export default ControlledInputField