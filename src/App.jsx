import { useState } from 'react'
import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUS';
import Team from './components/Team';
import TeamSlider from './components/TeamSlider';
import Portfolio from './components/PortFolio';
import AssetsAllocation from './components/AssetsAllocation';
import Cryptoworld from './components/CryptoWorld';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <HeroSection />
    <AboutUs/>
    <Team/>
    <TeamSlider />
    <Portfolio/>
    <AssetsAllocation/>
    <Cryptoworld/>
    <Footer/>
    </>
  )
}

export default App
