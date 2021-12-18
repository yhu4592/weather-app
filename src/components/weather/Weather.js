import React, { useState } from 'react'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

const Weather = ({weather}) => {
  const [isImperial, setIsImperial] = useState(true)
  let currentWeather = weather[0]
  let forecastWeather = weather.slice(1)

  const handleClick = () => {
    setIsImperial(!isImperial)
  }

  return (
    <div id='weather'>
      <CurrentWeather 
        isImperial={isImperial} 
        currentWeather={currentWeather}
      />
      <button onClick={handleClick}>F</button>
      <button onClick={handleClick}>C</button>
      <ForecastWeather
        isImperial={isImperial} 
        forecasts={forecastWeather}
      />
    </div>
  )
}

export default Weather
