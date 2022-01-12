import React, { useState, useEffect } from 'react'
import Search from './components/Search/Search'
import Weather from './components/Weather/Weather'
import axios from 'axios'
import './App.css'

const App = () => {
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('')
  const [search, setSearch] = useState(false)

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleClick = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/forecast/daily?city=${city}&units=I&key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        if(response.statusText === 'No Content'){
          setSearch(false)
          setWeather([])
        } else {
          setWeather(response.data)
          setSearch(true)
        }
      })
      .catch(error => {
        console.log(error)
        setSearch(false)
      })
  }

  return (
    <div className='app'>
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
