import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Screen from './Components/Screen';
import Buttons from './Components/Buttons';
import About from './Components/About';
import Projects from './Components/Projects';


function App() {

  const [display, setDislay] = useState()

  return (
    <div className="App">
      <main className="base-frame">
        <Header />
        <Screen />
        <Buttons />
      </main>
    </div>
  );
}

export default App;
