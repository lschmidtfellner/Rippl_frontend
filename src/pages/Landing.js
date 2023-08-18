import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

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
      { opacity: 0},
      { opacity: 1, duration: 0.6, delay: 1.5, ease: 'power1.out' }
    )
  }, [])

  return (
    <div ref={landingRef} className="landing pt-36">
      <div
        ref={loadRef}
        className="landing-header font-comba text-6xl md:text-8xl xl:text-9xl break-words"
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
      <button
        ref={buttonRef}
        style={{ opacity: 0 }}
        onClick={toInput}
        className="font-proxima-nova font-bold get-started border-2 border-black px-4 py-2 mt-10 mb-20 text-sm"
      >
        GET STARTED
      </button>
    </div>
  )
}

export default Landing
