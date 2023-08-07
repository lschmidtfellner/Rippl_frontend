import React, { useState } from 'react'
import SongInput from '../components/SongInput'
import PopularityBar from '../components/PopularityBar';

function Input() {
  const [songCount, setSongCount] = useState(1);

  const addSong = () => {
    if(songCount < 3) {
      setSongCount(songCount + 1);
    }
  }

  const getRecs = () => {
    
  }

  return (
    <>
      <h1>ADD SONGS</h1>
      <h3>(up to 3)</h3>
      {Array(songCount).fill().map((_, index) => (
        <SongInput key={index} index={index} />
      ))}
      {songCount < 3 && <button onClick={addSong}>Add Song</button>}
      <PopularityBar/>
    </>
  )
}

export default Input
