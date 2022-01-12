import React from 'react'
import toMetric from '../../../modules/toMetric'
import './GeneralInfo.css'

const GeneralInfo = ({datetime, icon, description}) => {
  return (
    <div id='generalInfo'>
      <div id='text'>
        <p id='title'>Today</p>
        <p>{description}</p>
      </div>  
      <img 
        src={`/images/${icon}.png`}
        alt={`${icon}`}
      />
      
    </div>
  )
}

export default GeneralInfo
