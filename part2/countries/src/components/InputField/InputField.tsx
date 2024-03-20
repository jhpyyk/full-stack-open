interface InputFieldProps {
    fieldName: string
    fieldOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({ fieldName, fieldOnChange }: InputFieldProps): React.JSX.Element => {
    return (
        <>
            {fieldName}: <input onChange={fieldOnChange} />
        </>
    )
}

export default InputField