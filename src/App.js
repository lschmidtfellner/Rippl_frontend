import logo from './logo.svg'
import './App.css'

//components
import Nav from './components/Nav'
import PopularityBar from './components/PopularityBar'
import SongInput from './components/SongInput'

//pages
import Landing from './pages/Landing'
import Results from './pages/Results'
import Input from './pages/Input'

//dependencies
import { Route, Routes } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import * as dotenv from 'dotenv'


function App() {
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/input" element={<Input />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  )
}

export default App
