import React from 'react'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

const Weather = ({weather}) => {
  let currentWeather = weather[0]
  let forecastWeather = weather.slice(1)

  return (
    <div id='weather'>
      <CurrentWeather currentWeather={currentWeather}/>
      <ForecastWeather forecasts={forecastWeather}/>
    </div>
  )
}

export default Weather
