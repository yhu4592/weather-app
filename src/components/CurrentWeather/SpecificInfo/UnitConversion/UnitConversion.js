import React from 'react'
import './UnitConversion.css'

const UnitConversion = ({isImperial, handleFahrenheitClick, handleCelciusClick}) => {
  return (
    <div className='buttonContainer'>
      <button 
        className={isImperial ? 'active' : 'inactive'}
        onClick={handleFahrenheitClick}
      >
        F
      </button>
      <button 
        className={isImperial ? 'inactive' : 'active'}
        onClick={handleCelciusClick}
      >
        C
      </button>
    </div>
  )
}

export default UnitConversion
