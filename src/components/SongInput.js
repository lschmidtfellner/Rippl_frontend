import React from 'react'

function SongInput({ index }) {
  return (
    <div className='song-input'>
      <p className='add-song-header'>ADD SONG:</p>
      <input className={`song-input song-input-${index}`} placeholder='song'/>
      <p className='by'>by</p>
      <input className={`artist-input artist-input-${index}`} placeholder='artist'/>
    </div>
  )
}

export default SongInput