import React, { useState } from 'react'
import api from '../api/apiConfig'
import SongInput from '../components/SongInput'
import '../css/PopularityBar.css'
import { useNavigate } from 'react-router-dom';

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

  const getRecs = () => {
    console.log(song1, artist1, song2, artist2, song3, artist3)
    Promise.all(
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
    ) // Remove null promises
      .then((results) => {
        console.log(results)
        const seedTracks = results.map((item) => item.data.spotify_id).join(',')
        console.log(seedTracks)
        return api.post(`https://spotify-rec-backend.herokuapp.com/${userId}/recommendations?seed_tracks=${seedTracks}&max_popularity=${popularity}`)
      })
      .then ((response) => {
        setRecommendations(response.data.map((item) => item.data))
        console.log(recommendations)
        navigate('/results')
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <>
      <h1>ADD SONGS</h1>
      <h3>(up to 3)</h3>
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
      {songCount < 3 && <button onClick={addSong}>Add Song</button>}
      <div className="slidecontainer">
      <input 
        type="range" 
        min="1" 
        max="100" 
        value={popularity} 
        onChange={handleSliderChange} 
        className="slider" 
        id="myRange"
      />
      <p className='pop-quotient'>Popularity: {popularity}</p>
    </div>
      <button className="get-recs-btn" onClick={getRecs}>
        Get Recommendations
      </button>
    </>
  )
}

export default Input
