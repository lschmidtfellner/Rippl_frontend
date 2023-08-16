import React from 'react'

function ErrorModal() {
  return (
    <div>
      <div className='error-modal bg-green-500'>
      <img></img>
      <h3>ERROR</h3>
      <p>There was a problem fetching your recommendations. Make sure there are no typos, and at least one song/artist pairing is entered.</p>
      <btn>OK</btn>
      </div>
      <div className='fixed top-0 left-0 w-full h-full bg-black opacity-25'/>
    </div>
  )
}

export default ErrorModal