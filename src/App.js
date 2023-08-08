import logo from './logo.svg'
import './App.css'

//components
import Nav from './components/Nav'

//pages
import Landing from './pages/Landing'
import Results from './pages/Results'
import Input from './pages/Input'

//dependencies
import { Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'


function App() {
  const [recommendations, setRecommendations] = useState([]);
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/input" element={<Input recommendations={recommendations} setRecommendations={setRecommendations} />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  )
}

export default App
