import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing ">
      <h1 className='font-proxima font-bold text-7xl break-words pt-14'>GET <br/>RECOM- MEND- ATIONS</h1>
      <h3 className='font-semi font-proxima text-xl'>(from Spotify)</h3>
      <Link to="/input">
        <button className="font-proxima-nova font-bold get-started border-2 border-black px-4 py-2 mt-10">GET STARTED</button>
      </Link>
    </div>
  )
}

export default Landing
