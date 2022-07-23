import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Screen from './Components/Screen';
import Buttons from './Components/Buttons';
import About from './Components/About';
import Projects from './Components/Projects';


function App() {

  // console.clear()

  const [display, setDisplay] = useState('none')
  const [visible, setVisible] = useState(<Screen/>)

  const handleButtonClick = (e) => {
    e.target.innerText === 'Contact' ?
    setDisplay('none') :
    setDisplay(e.target.innerText.toLowerCase())
  }

  useEffect(() => {
    console.log(display)
    display === 'none' ?
    setVisible(<Screen />) :
    display == 'about' ?
    setVisible(<About/>) :
    display == 'projects' ?
    setVisible(<Projects/>) :
    setVisible(<Screen/>)
    console.log(visible)
  }, [display])

  return (
    <div className="App">
      <main className="base-frame">
        <Header />
          {visible}
        <Buttons onClick={handleButtonClick}/>
      </main>
    </div>
  );
}

export default App;
