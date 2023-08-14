import React, { useState, useRef } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import Marquee from 'react-marquee-slider'
import '../styles/AudioPlayer.css'

function Results({ recommendations, setRecommendations }) {
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null)
  const playerRefs = useRef([])

  const handlePlay = (index) => {
    if (
      currentPlayingIndex !== null &&
      playerRefs.current[currentPlayingIndex]
    ) {
      playerRefs.current[currentPlayingIndex].audio.current.pause()
    }
    setCurrentPlayingIndex(index)
  }

  return (
    <div className="pt-20">
      <h1 className="font-proxima font-bold text-5xl mt-8 mb-16">
        HERE <br /> YOU GO!
      </h1>
      {recommendations.map((item, index) => (
        <div
          className="preview-container mt-8 font-proxima border-b border-black pb-10 w-full flex justify-center items-center"
          key={item.spotify_id}
        >
          <img src={item.artURL} className="h-20 mr-6" />
          <div className="song-info text-lg whitespace-nowrap overflow-hidden truncate w-80">
            {item.title.length > 16 ? (
              <Marquee velocity={25}>
              {[<span key={item.spotify_id}>{item.title}</span>]}
            </Marquee>
            
            ) : (
              <p className="song-name font-bold">{item.title}</p>
            )}
            <span className="italic"> by </span>{' '}
            <span className="song-artist font-bold">{item.artist}</span>
          </div>
          {item.previewURL ? (
            <AudioPlayer
              ref={(element) => (playerRefs.current[index] = element)}
              className="ml-4"
              src={item.previewURL}
              onPlay={() => handlePlay(index)}
              showJumpControls={false}
              customAdditionalcontrols={[]}
            />
          ) : (
            <div className="preview-container ml-4">
              <p className="italic">Preview unavailable</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Results
