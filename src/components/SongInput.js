import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function SongInput({ value, artistValue, onChange, onArtistChange, animate }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (animate === true) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' }
      )
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="song-input mt-4 font-proxima pb-2 pt-6 w-80"
    >
      <input
        className="input-text"
        value={value}
        onChange={onChange}
        placeholder="song"
      />
      <div className="flex my-4">
        <p className="italic mr-2">by </p>
        <input
          className="input-text"
          value={artistValue}
          onChange={onArtistChange}
          placeholder="artist"
        />
      </div>
    </div>
  )
}

export default SongInput
