import React from 'react'
import ImperialWeather from './ImperialWeather.js'
import MetricWeather from './MetricWeather.js'

const CurrentWeather = ({isImperial, currentWeather}) => {
  return (
    <div>
      {isImperial 
        ? <ImperialWeather currentWeather={currentWeather}/>
        : <MetricWeather currentWeather={currentWeather}/>
      }
    </div>
  )
}

export default CurrentWeather
