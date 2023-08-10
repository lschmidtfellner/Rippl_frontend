import React from 'react'

function SongInput({ value, artistValue, onChange, onArtistChange }) {
  return (
    <div className="mt-8 font-proxima border-2 border-black px-6 pb-4 pt-6 w-fit">
      <input className='input-text' value={value} onChange={onChange} placeholder="song" />
      <div className='flex my-4'>
        <p className='italic mr-2'>by </p>
        <input className='input-text'
          value={artistValue}
          onChange={onArtistChange}
          placeholder="artist"
        />
      </div>
    </div>
  )
}

export default SongInput
