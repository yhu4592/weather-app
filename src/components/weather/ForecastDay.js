import React from 'react'
import toMetric from '../../modules/toMetric'

const ForecastDay = ({forecast, isImperial}) => {
  return (
    <div id='forecastDay'>
      <p>Date: {forecast.datetime}</p>
      <p>Weather: {forecast.weather.description}</p>
      <img 
        src={`/images/${forecast.weather.icon}.png`}
        alt={`${forecast.weather.icon} + image.`}
      />
      <p>Temp: {isImperial 
                 ? forecast.temp 
                 : toMetric.toCelcius(forecast.temp)
               }
      </p>
    </div>
  )
}

export default ForecastDay
