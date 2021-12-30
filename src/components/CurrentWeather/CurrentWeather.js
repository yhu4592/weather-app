import React from 'react'
import GeneralInfo from './GeneralInfo/GeneralInfo'
import SpecificInfo from './SpecificInfo/SpecificInfo'

const CurrentWeather = ({isImperial, currentWeather}) => {

  return (
    <div id='currentWeatherContainer'>
      <GeneralInfo 
        datetime={currentWeather.datetime}
        description={currentWeather.weather.description}
        icon={currentWeather.weather.icon}
      />
      <SpecificInfo
        isImperial={isImperial} 
        temp={currentWeather.temp}
        wind_spd={currentWeather.wind_spd}
        precip={currentWeather.precip}
      />
    </div>
  )
}

export default CurrentWeather
