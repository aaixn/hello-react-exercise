import './App.css';
import Hello from './Hello';
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState('Po')
  
  return (
    <div className="App">
      <Hello name={name}/>
    </div>
  );
}

export default App;
