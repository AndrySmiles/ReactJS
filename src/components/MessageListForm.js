import React from 'react';
import { useState } from 'react'

function MessageListForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите сообщение..."
            />
            <button>Отправить</button>
        </form>
    )
}

export default MessageListForm