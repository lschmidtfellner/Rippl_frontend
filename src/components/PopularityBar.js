import React, { useState } from 'react'
import '../css/PopularityBar.css'

function PopularityBar() {
  const [popularity, setPopularity] = useState(20)

  const handleSliderChange = (event) => {
    setPopularity(event.target.value)
  }
  
  return (
    <div className="slidecontainer">
      <input 
        type="range" 
        min="1" 
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
