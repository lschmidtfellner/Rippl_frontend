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
          className={`preview-container mt-8 font-proxima border-black pb-10 w-full flex justify-center items-center ${index !== recommendations.length - 1 ? 'border-b' : ''}`}
          key={item.spotify_id}
        >
          <img src={item.artURL} className="h-20 mr-6" />
          <div className="song-info text-lg whitespace-nowrap overflow-hidden truncate w-80">
            {item.title.length > 16 ? (
              <Marquee velocity={25}>
              {[<p className='font-bold'>{item.title}&nbsp;-&nbsp;</p>]}
            </Marquee>
            ) : (
              <p className="song-name font-bold">{item.title}</p>
            )}

            {item.artist.length > 16 ? (
              <Marquee velocity={25}>
                {[<p><span className="italic"> by </span>{item.artist}&nbsp;-&nbsp;</p>]}
              </Marquee>
            ) : (
              <p className='song-artist'><span className="italic"> by </span>{item.artist}</p>
            )}
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
              <p className="font-extra-bold">N/A</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Results
