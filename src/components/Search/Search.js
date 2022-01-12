import React from 'react'
import './Search.css'

const Search = (props) => {
  return (
    <div id='searchComponent'>
      <input
        onChange={props.handleChange}
        value={props.city}
        type='text'
      />
      <button onClick={props.handleClick}>Search</button>
    </div>
  )
}

export default Search
