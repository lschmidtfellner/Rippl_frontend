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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className='bg-green-500 min-h-screen px-5 lg:px-20 py-2'>
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/input" element={<Input recommendations={recommendations} setRecommendations={setRecommendations} />} />
        <Route path="/results" element={<Results recommendations={recommendations} setRecommendations={setRecommendations} />} />
      </Routes>
    </div>
  )
}

export default App
