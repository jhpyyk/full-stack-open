import './NotificationTextStyle.css'

interface NotificationTextProps { text: string, color: string }

const NotificationText = (props: NotificationTextProps): React.JSX.Element => {
    return (
        <>
            <div className='notification' style={{ borderColor: props.color }} >
                {props.text}
            </div>
        </>
    )
}

export default NotificationText