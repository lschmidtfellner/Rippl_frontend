import React, { useState } from 'react'
import api from '../api/apiConfig'
import SongInput from '../components/SongInput'
import '../styles/PopularityBar.css'
import addBtn from '../assets/rippl_add_btn.svg'
import { useNavigate } from 'react-router-dom'

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

  const handleSliderChange = (event) => {
    setPopularity(event.target.value)
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
        navigate('/results')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="pt-20">
      <h2 className="font-proxima font-bold text-5xl mt-8">
        ADD <br />
        SONGS
      </h2>
      <h3 className="font-semi font-proxima text-xl">(up to 3)</h3>
      {songCount >= 1 && (
        <SongInput
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
          value={song2}
          artistValue={artist2}
          onChange={(e) => setSong2(e.target.value)}
          onArtistChange={(e) => setArtist2(e.target.value)}
        />
      )}
      {songCount >= 3 && (
        <SongInput
          value={song3}
          artistValue={artist3}
          onChange={(e) => setSong3(e.target.value)}
          onArtistChange={(e) => setArtist3(e.target.value)}
        />
      )}
      {songCount < 3 && (
        <button className="w-8 mt-2" onClick={addSong}>
          <img src={addBtn} />
        </button>
      )}
      <div className="slidecontainer mb-8">
        <h2 className="font-proxima font-bold text-5xl mt-16 mb-8">
          SET <br />
          POPULARITY
        </h2>
        <div className="flex">
          <input
            type="range"
            min="15"
            max="100"
            value={popularity}
            onChange={handleSliderChange}
            className="slider"
            id="pop-slider"
          />
          <p className="pop-quotient ml-4 font-semi font-proxima text-xl">{popularity}</p>
        </div>
      </div>
      <button
        className="get-recs-btn font-proxima-nova font-bold get-started border-2 border-black px-4 py-2 mt-10 mb-20"
        onClick={getRecs}
      >
        Get Recommendations
      </button>
    </div>
  )
}

export default Input
