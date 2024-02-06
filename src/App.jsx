import React from 'react'
import "./App.css"
import Navabar from './components/Navabar'
import Hero from './components/Hero'
import HeadlineCard from './components/HeadlineCard'
import './index.css'
import Food from './components/Food'
import Category from './components/Category'

const App = () => {
  return (
    <>
      <Navabar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
    </>

  )
}

export default App