import React from 'react'
import ForecastDay from './ForecastDay'

const ForecastWeather = ({forecasts}) => {
  return (
    <div id='forecastComponent'>
      {forecasts.map((forecast, index)=> 
        <ForecastDay 
          key={index}
          forecast={forecast}
        />  
      )}
    </div>
  )
}

export default ForecastWeather
