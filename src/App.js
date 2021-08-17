import React from 'react';
import Message from './components/Message/Message';

function App() {

  const textMassage = 'Текст сообщения';

  return (
    <div>
      <Message textMassage={textMassage} />
    </div>

  )
}

export default App;
