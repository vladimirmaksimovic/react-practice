//import React library
import React from "react";
// import Prop Types library
import PropTypes from "prop-types";
// import useLocation hook library
import { useLocation } from "react-router-dom";

import Button from "./Button";

// react f-n component, without props object i.e. with destructuring
const Header = ({ title, onAdd, showAdd }) => {
  // useLocation hook
  const location = useLocation();

  /* const onClick = () => {
  console.log('click')
} */

  // return JSX
  return (
    <header className="header">
      {/* <header style={{ color: 'teal', backgroundColor: '#d5e1df'}}> //inline styles */}
      {/* <h2 style={headingStyles}>{ title }</h2> //passing style object */}
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

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
  title: "Task Tracker",
};

// set prop Types
Header.propTypes = {
  title: PropTypes.string,
};

// style object
/* const headingStyles = {
  width: '100%',
  height: '5rem',
  padding: '1rem',
  fontSize: '1.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
} */

// export component
export default Header;
