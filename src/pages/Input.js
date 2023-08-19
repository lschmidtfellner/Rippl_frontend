import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import api from '../api/apiConfig'
import SongInput from '../components/SongInput'
import GetRecsBtn from '../components/GetRecsBtn'
import addBtn from '../assets/rippl_add_btn.svg'
import InputBackground from '../components/InputBackground'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

function Input({ recommendations, setRecommendations }) {
  const userId = '6478aa30dee0f9f07836b151'
  const [popularity, setPopularity] = useState(20)
  const [songCount, setSongCount] = useState(1)
  const [song1, setSong1] = useState('')
  const [artist1, setArtist1] = useState('')
  const [song2, setSong2] = useState('')
  const [artist2, setArtist2] = useState('')
  const [song3, setSong3] = useState('')
  const [artist3, setArtist3] = useState('')

  const navigate = useNavigate()
  const inputRef = useRef(null)
  const songInput2Ref = useRef(null)
  const songInput3Ref = useRef(null)
  const getRecsBtnRef = useRef(null)

  useEffect(() => {
    const children = inputRef.current.children

    gsap.fromTo(
      children,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' }
    )
  }, [])

  const handleSliderChange = (value) => {
    setPopularity(value)
  }

  const addSong = () => {
    if (songCount < 3) {
      setSongCount(songCount + 1)
    }
  }

  const getRecs = async () => {
    try {
      console.log(song1, artist1, song2, artist2, song3, artist3)
      const results = await Promise.all(
        [
          song1 && artist1
            ? api.get(`/search?artist=${artist1}&song=${song1}`)
            : null,
          song2 && artist2
            ? api.get(`/search?artist=${artist2}&song=${song2}`)
            : null,
          song3 && artist3
            ? api.get(`/search?artist=${artist3}&song=${song3}`)
            : null
        ].filter(Boolean)
      )

      console.log(results)
      const seedTracks = results.map((item) => item.data.spotify_id).join(',')
      console.log(seedTracks)

      const response = await api.post(
        `/${userId}/recommendations?seed_tracks=${seedTracks}&max_popularity=${popularity}`
      )
      setRecommendations(response.data)
      console.log(response.data)

      // Navigate only if recommendations array is populated
      if (response.data.length > 0) {
        window.scroll(0, 0);
        navigate('/results')
      }
    } catch (error) {
      console.error('Error:', error)
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'There was a problem fetching recommendations. Please ensure that there are no typos, and fill out at least the first song/artist form.',
      });
    }
  }

  return (
    <div ref={inputRef} className="pt-20">
      <InputBackground/>
      <h2 style={{opacity: 0}} className="font-comba font-extra-bold text-4xl mt-8">
        ADD <br />
        SONGS
      </h2>
      <h3 style={{opacity: 0}} className="font-bold font-proxima text-xl">(up to 3)</h3>
      <div className='xl:flex'>
      {songCount >= 1 && (
        <SongInput
          animate={false}
          //only use initial loading animation for first input component
          value={song1}
          artistValue={artist1}
          onChange={(e) => {
            setSong1(e.target.value)
          }}
          onArtistChange={(e) => setArtist1(e.target.value)}
        />
      )}
      {songCount >= 2 && (
        <SongInput
          animate={true}
          ref={songInput2Ref}
          value={song2}
          artistValue={artist2}
          onChange={(e) => setSong2(e.target.value)}
          onArtistChange={(e) => setArtist2(e.target.value)}
        />
      )}
      {songCount >= 3 && (
        <SongInput
          animate={true}
          ref={songInput3Ref}
          value={song3}
          artistValue={artist3}
          onChange={(e) => setSong3(e.target.value)}
          onArtistChange={(e) => setArtist3(e.target.value)}
        />
      )}
      {songCount < 3 && (
        <button className="w-8 mt-2 xl:mt-14" onClick={addSong}>
          <img alt='add song' src={addBtn} />
        </button>
      )}
      </div>
      <div style={{opacity: 0}} className="slidecontainer mb-8">
        <h2 className="font-comba font-extra-bold text-4xl mt-16">
          SET <br />
          POPULARITY
        </h2>
        <h3 className="font-bold font-proxima text-xl mb-16">
          {popularity} out of 100
        </h3>
        <div className="flex align-center">
          <Slider
            min={15}
            max={99}
            value={popularity}
            onChange={handleSliderChange}
            className="slider"
            id="pop-slider"
          />
        </div>
      </div>
      <GetRecsBtn onClick={getRecs} ref={getRecsBtnRef} />
    </div>
  )
}

export default Input
