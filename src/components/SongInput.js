import React from 'react'

function SongInput({ value, artistValue, onChange, onArtistChange }) {
  return (
      <div>
          <input value={value} onChange={onChange} placeholder='song'/>
          <p>by</p>
          <input value={artistValue} onChange={onArtistChange}placeholder='artist'/>
      </div>
  );
}

export default SongInput

