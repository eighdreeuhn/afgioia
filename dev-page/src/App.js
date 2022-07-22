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

  const projects = []
  let visible

  const handleButtonClick = (e) => {
    setDisplay(e.target.innerText)
  }

  useEffect(() => {
    visible = 
    display == 'none' ?
    <Screen/> :
    display == 'about' ?
     <About/> :
    display == 'projects' ?
    <Projects/> :
    null
  }, [display])

  return (
    <div className="App">
      <main className="base-frame">
        <Header />
        <Screen>
          {visible}
        </Screen>
        <Buttons onClick={handleButtonClick}/>
      </main>
    </div>
  );
}

export default App;
