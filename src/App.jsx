import React from 'react'
import "./App.css"
import Navabar from './components/Navabar'
import Hero from './components/Hero'
import HeadlineCard from './components/HeadlineCard'
import './index.css'
import Food from './components/Food'
import Category from './components/Category'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navabar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
      <Footer />
    </>

  )
}

export default App