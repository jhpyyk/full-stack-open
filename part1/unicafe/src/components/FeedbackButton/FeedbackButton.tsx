interface FeedbackButtonProps {
    text: string
    handleClick: () => void
}

const FeedbackButton = ({ text, handleClick }: FeedbackButtonProps) => {
    return (
        <>
            <button onClick={handleClick} >
                {text}
            </button>
        </>
    )
}

export default FeedbackButton