import React from 'react'
import toMetric from '../../../modules/toMetric'
import './ForecastDay.css'

const ForecastDay = ({forecast, isImperial}) => {
  return (
    <div className='forecastDay'>
      <p>{forecast.datetime}</p>
      <img 
        src={`/images/${forecast.weather.icon}.png`}
        alt={`${forecast.weather.icon} + image.`}
        title={forecast.weather.description}
      />
      <div className='forecastTemperature'>
        <div className='highTemp'>
        {isImperial 
           ? (forecast.high_temp).toFixed()
           : (toMetric.toCelcius(forecast.temp)).toFixed()
         }&deg;  
         
        </div>
        <div className='lowTemp'>
          {isImperial 
            ? (forecast.low_temp).toFixed()
            : (toMetric.toCelcius(forecast.temp)).toFixed()
          }&deg;
        </div>
      </div>
      
      <p className='precip'>{(forecast.precip*100).toFixed()}%</p>
    </div>
  )
}

export default ForecastDay
