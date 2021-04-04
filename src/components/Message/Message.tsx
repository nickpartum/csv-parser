import React, {FC} from "react"
import './message.css'

type MessagePropsType = {
    message: string
}

const Message:FC<MessagePropsType> = ({message = 'File format is not correct!'}) => {
    return (
        <div className={'container'}>
            <div className={'message'}>{message}</div>
        </div>
    )
}

export default Message
