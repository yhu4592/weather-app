import React from 'react'
import metric from '../../modules/toMetric'

const ForecastDay = ({forecast, isImperial}) => {
  return (
    <div id='forecastDay'>
      <p><p>Date: {forecast.datetime}</p></p>
      <p>Weather: {forecast.weather.description}</p>
      <p>Temp: {isImperial 
                 ? forecast.temp 
                 : metric.toCelcius(forecast.temp)
               }
      </p>
    </div>
  )
}

export default ForecastDay
