import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Screen from './Components/Screen';
import Buttons from './Components/Buttons';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import * as Tone from 'tone'

function App() {

  // console.clear()

  const reverb = new Tone.Reverb(
    {
      wet: 1
    }
  ).toDestination()
  const organ = new Tone.MonoSynth().connect(reverb)

  const handleTone = (note) => {
    organ.triggerAttackRelease(note, '8n')
  }

  const [display, setDisplay] = useState('none')
  const [visible, setVisible] = useState(<Screen onMouseOver={handleTone}/>)

  const handleButtonClick = (e) => {
    e.target.innerText === 'Contact' ?
    setDisplay('none') :
    setDisplay(e.target.innerText.toLowerCase())
  }

  useEffect(() => {
    display === 'screen' ?
    setVisible(<Screen onMouseOver={handleTone}/>) :
    display == 'about' ?
    setVisible(<About/>) :
    display == 'projects' ?
    setVisible(<Projects/>) :
    display == 'skills' ?
    setVisible(<Skills/>) :
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
