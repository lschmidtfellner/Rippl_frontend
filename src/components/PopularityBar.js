import React, { useState } from 'react'
import '../styles/PopularityBar.css'

function PopularityBar({popularity, setPopularity}) {

  const handleSliderChange = (event) => {
    setPopularity(event.target.value)
  }
  
  return (
    <div className="slidecontainer">
      <input 
        type="range" 
        min="15" 
        max="100" 
        value={popularity} 
        onChange={handleSliderChange} 
        className="slider" 
        id="myRange"
      />
      <p className='pop-quotient'>Popularity: {popularity}</p>
    </div>
  )
}

export default PopularityBar
