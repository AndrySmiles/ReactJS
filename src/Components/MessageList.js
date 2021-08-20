import React from 'react';

function MessageList({ message }) {
    return (
        <div key={message.id} className="item-message">
            <div>
                {message.task}
                <p className="user">
                    Автор: {message.authot}
                </p>
            </div>

        </div>
    )
}

export default MessageList