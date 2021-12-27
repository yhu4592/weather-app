import React from 'react'
import ForecastDay from './ForecastDay/ForecastDay'

const ForecastWeather = ({isImperial, forecastWeather}) => {
  return (
    <div id='forecastComponent'>
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
