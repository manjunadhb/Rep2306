import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div id='homeDiv'>
      <Link id='signout' to="/">Sign out</Link>
<h1 id='about'>The place for <b>anyone</b> for anywhere to build anything.</h1>
</div>
  )
}

export default Home