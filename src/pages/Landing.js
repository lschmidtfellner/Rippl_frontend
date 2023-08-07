import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing">
      <h1>GET RECCOMENDATIONS</h1>
      <h3>"(from Spotify)"</h3>
      <Link to="/input">
        <button className="get-started">GET STARTED</button>
      </Link>
    </div>
  )
}

export default Landing
