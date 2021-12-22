import React from 'react'
import ForecastDay from './ForecastDay'

const ForecastWeather = ({forecastWeather}) => {
  return (
    <div id='forecastComponent'>
      {forecastWeather.map((forecast, index)=> 
        <ForecastDay 
          key={index}
          forecast={forecast}
        />  
      )}
    </div>
  )
}

export default ForecastWeather
