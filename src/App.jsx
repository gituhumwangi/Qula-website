import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Home/Home'
import About from './components/AboutUs/About'
import TeamMembers from './components/Team Members/TeamMembers'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <TeamMembers/>
      <Contact/>
    </div>
  )
}

export default App