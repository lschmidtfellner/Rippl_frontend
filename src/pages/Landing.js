import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import GetStartedBtn from '../components/GetStartedBtn'
import LandingAnimation from '../components/LandingBackground'

function Landing() {
  const loadRef = useRef(null)
  const landingRef = useRef(null)
  const buttonRef = useRef(null)
  const navigate = useNavigate()

  async function toInput() {
    const landing = landingRef.current

    gsap.to(landing, { opacity: 0, duration: 0.5 }).then(() => {
      // Navigate after the animation completes
      navigate('/input')
    })
  }

  useEffect(() => {
    const lines = loadRef.current.children

    gsap.fromTo(
      lines,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' }
    )
  }, [])

  useEffect(() => {
    const button = buttonRef.current

    gsap.fromTo(
      button,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, delay: 1.5, ease: 'power1.out' }
    )
  }, [])

  return (
    <div ref={landingRef} className="landing pt-36">
      <LandingAnimation />
      <div
        ref={loadRef}
        className="landing-header font-comba text-6xl md:text-8xl break-words"
      >
        <div style={{ opacity: 0 }}>GET</div>
        <div style={{ opacity: 0 }}>RECOM-</div>
        <div style={{ opacity: 0 }}>MEND-</div>
        <div style={{ opacity: 0 }}>ATIONS</div>
        <h3
          style={{ opacity: 0 }}
          className="font-bold font-proxima text-xl md:text-2xl lg:text-3xl mt-1"
        >
          (from Spotify)
        </h3>
      </div>
      <GetStartedBtn onClick={toInput} ref={buttonRef} />
    </div>
  )
}

export default Landing
