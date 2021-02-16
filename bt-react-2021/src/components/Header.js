//import React library
import React from 'react'
// import Prop Types library
import PropTypes from 'prop-types'

// react f-n component, without props object i.e. with destructuring
const Header = ({ title }) => {
  // return JSX
  return (
  <header style={{ color: 'teal', backgroundColor: '#d5e1df'}}> {/* inline styles */}
    <h2 style={headingStyles}>{ title }</h2>
  </header>
  )
}

// component with props object
/* const Header = (props) => {
  return (
  <header>
    <h2>{props.title}</h2>
  </header>
  )
} */

// default props
Header.defaultProps = {
  title: 'Task Tracker'
}

// set prop Types
Header.propTypes = {
  title: PropTypes.string,
}

// style object
const headingStyles = {
  width: '100%',
  height: '5rem',
  padding: '1rem',
  fontSize: '1.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
  
}

// export component
export default Header