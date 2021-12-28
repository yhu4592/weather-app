import React from 'react'

const UnitConversion = ({handleFahrenheitClick, handleCelciusClick}) => {
  return (
    <div>
      <button onClick={handleFahrenheitClick}>F</button>
      <button onClick={handleCelciusClick}>C</button>
    </div>
  )
}

export default UnitConversion
