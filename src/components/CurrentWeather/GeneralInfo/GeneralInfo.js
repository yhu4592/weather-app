import React from 'react'
import toMetric from '../../../modules/toMetric'
import './GeneralInfo.css'

const GeneralInfo = ({datetime, icon, description}) => {
  return (
    <div className='generalInfo'>
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
