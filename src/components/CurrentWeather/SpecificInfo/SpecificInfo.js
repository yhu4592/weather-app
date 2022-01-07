import React from 'react'
import toMetric from '../../../modules/toMetric'
import UnitConversion from './UnitConversion/UnitConversion'
import './SpecificInfo.css'

const SpecificInfo = (props) => {
  const {
    isImperial, 
    location, 
    temp, 
    wind_spd, 
    precip, 
    handleCelciusClick, 
    handleFahrenheitClick
  } = props

  return (
    <div className='specificInfo'>
      <p id='title'>{location}</p>
      <div className='temperature'>
        <p>{isImperial 
           ? (temp).toFixed()
           : (toMetric.toCelcius(temp)).toFixed()
         }&deg;
        </p>
        <UnitConversion
          isImperial={isImperial}
          handleFahrenheitClick={handleFahrenheitClick}
          handleCelciusClick={handleCelciusClick}
        />
      </div>
      <p>{isImperial
           ? (wind_spd).toFixed()
           : (toMetric.toKmPerSecond(wind_spd)).toFixed()
         }

         {isImperial
           ? ' mph'
           : ' km/s'
         }
      </p>
      <p>{precip}%</p>
    </div>
  )
}

export default SpecificInfo
