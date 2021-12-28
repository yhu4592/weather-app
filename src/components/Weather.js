import React, { useState } from 'react'
import CurrentWeather from './CurrentWeather/CurrentWeather'
import ForecastWeather from './ForecastWeather/ForecastWeather'
import UnitConversion from './UnitConversion/UnitConversion'

const Weather = ({weather}) => {
  const [isImperial, setIsImperial] = useState(true)
  let currentWeather = weather[0]
  let forecastWeather = weather.slice(1, 7)

  const handleFahrenheitClick = () => {
    setIsImperial(true)
  }

  const handleCelciusClick = () => {
    setIsImperial(false)
  }

  return (
    <div id='weather'>
      <CurrentWeather 
        isImperial={isImperial} 
        currentWeather={currentWeather}
      />
      <UnitConversion
        handleFahrenheitClick={handleFahrenheitClick}
        handleCelciusClick={handleCelciusClick}
      />
      <ForecastWeather
        isImperial={isImperial} 
        forecastWeather={forecastWeather}
      />
    </div>
  )
}

export default Weather
