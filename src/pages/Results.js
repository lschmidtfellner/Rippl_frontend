import React, { useState, useRef, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import Marquee from 'react-marquee-slider'
import ResultsBackground from '../components/ResultsBackground'
import { gsap } from 'gsap'
import '../styles/AudioPlayer.css'
// import { useNavigate } from 'react-router-dom'
import placeholderPreviews from '../data/placeholderPreviews.json'

function Results() {
  // const navigate = useNavigate()

  // Static demo data only
  const [activeRecs] = useState(placeholderPreviews)

  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null)
  const playerRefs = useRef([])
  const resultRef = useRef([])
  const backgroundRef = useRef(null)

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
    const lines = resultRef.current?.children

    // No longer needed since this is now a static demo
    // if (!recommendations || recommendations.length === 0) {
    //   navigate('/')
    // }

    gsap.fromTo(
      lines,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 1,
        stagger: 0.2,
        ease: 'power2.out'
      }
    )
  }, [activeRecs])

  useEffect(() => {
    const bg = backgroundRef.current

    gsap.fromTo(
      bg,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, delay: 1.5, ease: 'power1.out' }
    )
  }, [])

  return (
    <div>
      <ResultsBackground ref={backgroundRef} />
      <div ref={resultRef} className="pt-20 lg:px-20 2xl:px-48">
        <h1 className="font-comba font-extra-bold text-5xl lg:text-8xl mt-8 mb-16">
          HERE <br /> YOU GO!
        </h1>
        {activeRecs.map((item, index) => (
          <div
            className={`preview-container mt-8 font-proxima border-black pb-10 w-full flex justify-center items-center ${
              index !== activeRecs.length - 1 ? 'border-b' : ''
            }`}
            key={item.spotify_id}
          >
            <img src={item.artURL} alt={item.artist} className="h-20 mr-6" />
            <div className="song-info text-lg whitespace-nowrap overflow-hidden truncate w-80">
              {item.title.length > 18 ? (
                <Marquee velocity={12} repeat={2}>
                  {[
                    <p className="font-bold" key="title">
                      {item.title}&emsp;~&emsp;{item.title}&emsp;~&emsp;
                    </p>
                  ]}
                </Marquee>
              ) : (
                <p className="song-name font-bold">{item.title}</p>
              )}
              {item.artist.length > 18 ? (
                <Marquee velocity={12} repeat={2}>
                  {[
                    <p key="artist">
                      {item.artist}&emsp;~&emsp;{item.artist}&emsp;~&emsp;
                    </p>
                  ]}
                </Marquee>
              ) : (
                <p className="song-artist">{item.artist}</p>
              )}
            </div>
            {item.previewURL ? (
              <AudioPlayer
                ref={(element) => (playerRefs.current[index] = element)}
                className="ml-5"
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
    </div>
  )
}

export default Results
