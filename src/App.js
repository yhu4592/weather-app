import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import axios from 'axios'

const App = () => {
  const [weather, setWeather] = useState()
  const [city, setCity] = useState('')

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleClick = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/forecast/daily?city=${city}&key=${process.env.REACT_APP_API_KEY}`)
      .then(response => setWeather(response.data.data))
  }

  return (
    <div id="app">
      <Search
        city={city} 
        handleChange={handleChange}
        handleClick={handleClick}
      />
    </div>
  )
}

export default App;
