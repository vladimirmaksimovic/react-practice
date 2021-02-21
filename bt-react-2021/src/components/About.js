import React from 'react'
// import React router Link to replace "<a href="..."></a>" element
import { Link } from 'react-router-dom'


function About() {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
