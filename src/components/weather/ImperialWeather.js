import React from 'react'

const ImperialWeather = ({currentWeather}) => {
  return (
    <div id='currentWeatherContainer'>
      <p>Date: {currentWeather.datetime}</p>
      <p>Temp: {currentWeather.temp}</p>
      <p>Weather: {currentWeather.weather.description}</p>
      <p>Wind spd: {currentWeather.wind_spd}</p>
      <p>Precip: {currentWeather.precip}</p>
    </div>  
  )
}

export default ImperialWeather
