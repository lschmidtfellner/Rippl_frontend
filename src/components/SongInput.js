import React from 'react'

function SongInput({ value, artistValue, onChange, onArtistChange }) {
  return (
    <div className="mt-8 font-proxima pb-4 pt-6 w-80">
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
