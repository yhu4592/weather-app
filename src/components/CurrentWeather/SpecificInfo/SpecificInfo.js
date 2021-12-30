import React from 'react'
import toMetric from '../../../modules/toMetric'

const SpecificInfo = ({isImperial, temp, wind_spd, precip}) => {
  return (
    <div>
      <p>{isImperial 
           ? (temp).toFixed()
           : (toMetric.toCelcius(temp)).toFixed()
         }&deg;
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
