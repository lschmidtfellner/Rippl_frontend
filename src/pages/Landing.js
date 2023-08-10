import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing pt-28">
      <h1 className='font-proxima font-bold text-7xl break-words'>GET <br/>RECOM- <br/>MEND- <br/>ATIONS</h1>
      <h3 className='font-semi font-proxima text-xl'>(from Spotify)</h3>
      <Link to="/input">
        <button className="font-proxima-nova font-bold get-started border-2 border-black px-4 py-2 mt-10">GET STARTED</button>
      </Link>
    </div>
  )
}

export default Landing
