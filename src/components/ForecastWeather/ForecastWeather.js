import React from 'react'
import ForecastDay from './ForecastDay/ForecastDay'
import './ForecastWeather.css'

const ForecastWeather = ({isImperial, forecastWeather}) => {
  return (
    <div className='forecastComponent'>
      {forecastWeather.map((forecast, index)=> 
        <ForecastDay 
          key={index}
          forecast={forecast}
          isImperial={isImperial}
        />  
      )}
    </div>
  )
}

export default ForecastWeather
