import React from 'react'

const CurrentWeather = ({isImperial, currentWeather}) => {
  
  const toCelcius = (temperature) => {
    return (temperature - 32)*5/9
  }

  const to

  return (
    <div>
      <div id='currentWeatherContainer'>
      <p>Date: {currentWeather.datetime}</p>
      <p>Temp: {currentWeather.temp}</p>
      <p>Weather: {currentWeather.weather.description}</p>
      <p>Wind spd: {currentWeather.wind_spd}</p>
      <p>Precip: {currentWeather.precip}</p>
    </div>  
    </div>
  )
}

export default CurrentWeather
