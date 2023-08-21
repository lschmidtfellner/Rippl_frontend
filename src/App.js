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
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [recommendations, setRecommendations] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Determine background color based on current path
  let bgColor;
  switch (location.pathname) {
    case "/":
      bgColor = "#80DDCB";
      break;
    case "/input":
      bgColor = "#f2a829";
      break;
    case "/results":
      bgColor = "#5EC169";
      break;
    default:
      bgColor = "#5BEFD3"; 
  }

  return (
    <div style={{ backgroundColor: bgColor }} className='app-container min-h-screen px-5 md:px-40 lg:px-60 xl:px-80 py-2 overflow-hidden'>
      <Nav bgColor={bgColor} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/input" element={<Input recommendations={recommendations} setRecommendations={setRecommendations} />} />
        <Route path="/results" element={<Results recommendations={recommendations} setRecommendations={setRecommendations} />} />
      </Routes>
    </div>
  )
}

export default App;