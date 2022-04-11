
import { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import Personajes from './components/Personajes';

function App() {

  const [nombrePersonaje, setNombrePersonaje] = useState("")

  return (
    <div className="app">
      <h1 className='title'>Rick and Morty app</h1>
      <Form setNombrePersonaje={setNombrePersonaje}/>
      <Personajes nombrePersonaje={nombrePersonaje}/>
    </div>
  );
}

export default App;
