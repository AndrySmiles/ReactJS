import React from 'react';
import './Message.css';

const Message = (props) => {

    return (
        <div className='message'>
            <span>{props.textMassage}</span>
        </div>
    )
}

export default Message;