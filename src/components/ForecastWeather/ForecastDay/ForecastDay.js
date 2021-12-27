import React from 'react'
import toMetric from '../../../modules/toMetric'
import './ForecastDay.css'

const ForecastDay = ({forecast, isImperial}) => {
  return (
    <div id='forecastDay'>
      <p>Date: {forecast.datetime}</p>
      <p>Weather: {forecast.weather.description}</p>
      <p className='precip'>{(forecast.precip*100).toFixed()}%</p>
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
