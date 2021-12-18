import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Weather from './components/weather/Weather'
import axios from 'axios'

const App = () => {
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('')
  const [search, setSearch] = useState(false)

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleClick = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/forecast/daily?city=${city}&key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        if(response.statusText === 'No Content'){
          setSearch(false)
          setWeather([])
        } else {
          setWeather(response.data.data)
          setSearch(true)
        }
      })
      .catch(error => {
        console.log(error)
        setSearch(false)
      })
  }

  return (
    <div id='app'>
      <Search
        city={city} 
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {search ? <Weather weather={weather}/> : null}
    </div>
  )
}

export default App;
