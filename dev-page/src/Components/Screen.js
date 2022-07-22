import { useState, useEffect } from 'react'
import Pixel from './Pixel'

const Screen = props => {
  const [screen, setScreen] = useState([])
  const [snow, setSnow] = useState(false)
  let inter

  const generatePixel = function () {
    const rng = Math.floor(Math.random() * 100 + 150)
    const color = `rgb(${rng}, ${rng}, ${rng})`
    return color
  }

  const pixelate = function () {
    console.log(screen)
    let screenCopy = [...screen]
    for (let i = 0; i < 10; i++) {
      const rngPixelIndex = Math.floor(Math.random() * 1000)
      screenCopy[rngPixelIndex] = generatePixel()
    }
    setScreen(screenCopy)
}

useEffect(() => {
    console.log('loaded')
    let screenCopy = []
    for (let i = 0; i < 1000; i++) {
        const newPixel = generatePixel()
        screenCopy.push(newPixel)
    }
    setScreen(screenCopy)
    setSnow(true)
    // setTimeout(() => setInterval(pixelate, 200), 200)
  }, [])

  useEffect(() =>  {
    console.log(screen)
    // inter = setInterval(pixelate, 1000)
}
    , [snow])

  let display = screen.map((pixelColor, index) => <Pixel key={index} color={pixelColor}/>)

  return <div className='screen'>{display}</div>
}

export default Screen
