import React from 'react'
import metric from '../../modules/toMetric'

const CurrentWeather = ({isImperial, currentWeather}) => {

  return (
    <div>
      <div id='currentWeatherContainer'>
      <p>Date: {currentWeather.datetime}</p>
      <p>Temp: {isImperial 
                 ? currentWeather.temp 
                 : metric.toCelcius(currentWeather.temp)
               }
      </p>
      <p>Weather: {currentWeather.weather.description}</p>
      <p>Wind spd: {isImperial
                     ? currentWeather.wind_spd
                     : metric.toMetersPerSecond(currentWeather.wind_spd)
                    }
      </p>
      <p>Precip: {currentWeather.precip}</p>
    </div>  
    </div>
  )
}

export default CurrentWeather
