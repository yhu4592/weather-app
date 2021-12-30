import React from 'react'
import toMetric from '../../../modules/toMetric'

const GeneralInfo = ({datetime, icon, description}) => {
  return (
    <div>
      <p>{datetime}</p>
      
      <img 
        src={`/images/${icon}.png`}
        alt={`${icon}`}
      />
      <p>{description}</p>
    </div>
  )
}

export default GeneralInfo
