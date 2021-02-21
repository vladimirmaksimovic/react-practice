import React from 'react'
// import React router Link to replace "<a href="..."></a>" element
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
