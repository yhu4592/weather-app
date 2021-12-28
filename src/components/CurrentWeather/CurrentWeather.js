import React from 'react'
import toMetric from '../../modules/toMetric'

const CurrentWeather = ({isImperial, currentWeather}) => {

  return (
    <div>
      <div id='currentWeatherContainer'>
      <p>{currentWeather.datetime}</p>
      
      <img 
        src={`/images/${currentWeather.weather.icon}.png`}
        alt={`${currentWeather.weather.icon} + image.`}
      />
      <p>{currentWeather.weather.description}</p>
      <p>{isImperial 
           ? (currentWeather.temp).toFixed()
           : (toMetric.toCelcius(currentWeather.temp)).toFixed()
         }&deg;
      </p>
      <p>{isImperial
           ? (currentWeather.wind_spd).toFixed()
           : (toMetric.toKmPerSecond(currentWeather.wind_spd)).toFixed()
         }

         {isImperial
           ? ' mph'
           : ' km/s'
         }
      </p>
      <p>{currentWeather.precip}%</p>
    </div>  
    </div>
  )
}

export default CurrentWeather
