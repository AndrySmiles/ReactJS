import React from 'react';
import { useState } from 'react'
import MessageList from './components/MessageList'
import MessageListForm from './components/MessageListForm'

function App() {
  const [msg, setMsg] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        authot: 'user'
      }
      setMsg([...msg, newItem])
    }
  }

  return (
    <div className="App">
      <header>
        <h4>Количество сообщений: {msg.length}</h4>
      </header>
      <MessageListForm addTask={addTask} />
      {msg.map((message) => {
        return (
          <MessageList
            message={message}
            key={message.id}
          />
        )
      })}
    </div>
  );
}

export default App;
