import React from 'react'
import toMetric from '../../../modules/toMetric'
import UnitConversion from './UnitConversion/UnitConversion'

const SpecificInfo = (props) => {
  const {
    isImperial, 
    temp, 
    wind_spd, 
    precip, 
    handleCelciusClick, 
    handleFahrenheitClick
  } = props

  return (
    <div>
      <p>{isImperial 
           ? (temp).toFixed()
           : (toMetric.toCelcius(temp)).toFixed()
         }&deg;
         <UnitConversion
           handleFahrenheitClick={handleFahrenheitClick}
           handleCelciusClick={handleCelciusClick}
         />
      </p>
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
