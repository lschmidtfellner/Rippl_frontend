import React, { useState, useRef, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import Marquee from 'react-marquee-slider'
import { gsap } from 'gsap'
import '../styles/AudioPlayer.css'

function Results({ recommendations, setRecommendations }) {
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null)
  const playerRefs = useRef([])
  const resultRef = useRef([])

  const handlePlay = (index) => {
    if (
      currentPlayingIndex !== null &&
      currentPlayingIndex !== index &&
      playerRefs.current[currentPlayingIndex]
    ) {
      playerRefs.current[currentPlayingIndex].audio.current.pause()
    }
    setCurrentPlayingIndex(index)
  }

  useEffect(() => {
    const lines = resultRef.current.children

    gsap.fromTo(
      lines,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' }
    )
  }, [])

  return (
    <div ref={resultRef} className="pt-20 lg:px-20">
      <h1 className="font-proxima font-extra-bold text-5xl lg:text-8xl mt-8 mb-16">
        HERE <br /> YOU GO!
      </h1>
      {recommendations.map((item, index) => (
        <div
          className={`preview-container mt-8 font-proxima border-black pb-10 w-full flex justify-center items-center ${
            index !== recommendations.length - 1 ? 'border-b' : ''
          }`}
          key={item.spotify_id}
        >
          <img src={item.artURL} alt={item.artist} className="h-20 mr-6" />
          <div className="song-info text-lg whitespace-nowrap overflow-hidden truncate w-80">
            {item.title.length > 18 ? (
              <Marquee velocity={12} repeat={2}>
                {[<p className="font-bold">{item.title}&emsp;~&emsp;{item.title}&emsp;~&emsp;</p>]}
              </Marquee>
            ) : (
              <p className="song-name font-bold">{item.title}</p>
            )}
            {item.artist.length > 18 ? (
              <Marquee velocity={12} repeat={2}>
                {[<p>{item.artist}&emsp;~&emsp;{item.artist}&emsp;~&emsp;</p>]}
              </Marquee>
            ) : (
              <p className="song-artist">{item.artist}</p>
            )}
          </div>
          {item.previewURL ? (
            <AudioPlayer
              ref={(element) => (playerRefs.current[index] = element)}
              className="ml-4"
              src={item.previewURL}
              volume={0.6}
              onPlay={() => handlePlay(index)}
              onPause={() =>
                currentPlayingIndex === index && setCurrentPlayingIndex(null)
              }
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
