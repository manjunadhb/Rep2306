import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
   
    <div id ="homeDiv">    
  <Link to= "/" id='signout'>Sign out</Link>
    <h1 id='aboutInfo'>The place for <b>anyone</b> for anywhere to build anything.</h1>
    </div>
   
  )
}

export default About