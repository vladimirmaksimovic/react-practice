//import React library
import React from 'react'
// import Prop Types library
import PropTypes from 'prop-types'

// react f-n component, without props object i.e. with destructuring
const Header = ({ title }) => {
  // return JSX
  return (
  <header>
    <h2>{ title }</h2>
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

// export component
export default Header