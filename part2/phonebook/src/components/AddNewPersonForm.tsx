import ControlledInputField from "./ControlledInputField"

interface AddNewPersonFormProps {
    handleNameFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleNumberFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmitButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AddNewPersonForm = (props: AddNewPersonFormProps): React.JSX.Element => {
    return (
        <div>
            <form>
                <div>
                    <ControlledInputField fieldName='name' fieldOnChange={props.handleNameFieldChange} />
                </div>
                <div>
                    <ControlledInputField fieldName='number' fieldOnChange={props.handleNumberFieldChange} />
                </div>
                <button type="submit" onClick={props.handleSubmitButtonClick}>add</button>
            </form>
        </div>
    )
}

export default AddNewPersonForm