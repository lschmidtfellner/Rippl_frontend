import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

function Landing() {
  const loadRef = useRef(null)
  const landingRef = useRef(null)
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

  return (
    <div ref={landingRef} className="landing pt-28">
      <div
        ref={loadRef}
        className="landing-header font-proxima font-bold text-7xl break-words"
      >
        <div style={{ opacity: 0 }}>GET</div>
        <div style={{ opacity: 0 }}>RECOM-</div>
        <div style={{ opacity: 0 }}>MEND-</div>
        <div style={{ opacity: 0 }}>ATIONS</div>
        <h3
          style={{ opacity: 0 }}
          className="font-semi font-proxima text-xl mt-1"
        >
          (from Spotify)
        </h3>
        <button
          style={{ opacity: 0 }}
          onClick={toInput}
          className="font-proxima-nova font-bold get-started border-2 border-black px-4 py-2 mt-10 text-sm"
        >
          GET STARTED
        </button>
      </div>
    </div>
  )
}

export default Landing
