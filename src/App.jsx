import { useState } from 'react'
import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUS'
import Team from './components/Team'
import TeamSlider from './components/TeamSlider'

function App() {
  return (
    <>
    <HeroSection />
    <AboutUs/>
    <Team/>
    <TeamSlider />
    </>
  )
}

export default App
