import React from 'react'
import ForecastDay from './ForecastDay/ForecastDay'
import './ForecastWeather.css'

const ForecastWeather = ({isImperial, forecastWeather}) => {
  return (
    <div id='forecastComponent'>
      <p id='title'>Rest of the Week</p>
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
