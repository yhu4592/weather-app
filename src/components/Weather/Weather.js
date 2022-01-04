import React, { useState } from 'react'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import ForecastWeather from '../ForecastWeather/ForecastWeather'
import './Weather.css'

const Weather = ({weather}) => {
  const [isImperial, setIsImperial] = useState(true)
  let currentWeather = weather.data[0]
  let forecastWeather = weather.data.slice(1, 7)
  let location = weather.city_name + ', ' + weather.state_code

  const handleFahrenheitClick = () => {
    setIsImperial(true)
  }

  const handleCelciusClick = () => {
    setIsImperial(false)
  }

  return (
    <div className='weather'>
      <CurrentWeather 
        isImperial={isImperial} 
        currentWeather={currentWeather}
        location={location}
        handleCelciusClick={handleCelciusClick}
        handleFahrenheitClick={handleFahrenheitClick}
      />
      <ForecastWeather
        isImperial={isImperial} 
        forecastWeather={forecastWeather}
      />
    </div>
  )
}

export default Weather
