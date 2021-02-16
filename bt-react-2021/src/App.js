// import React library
import React from 'react'
import Header from './components/Header';

// react f-n component
function App() {
  // return JSX
  return (
    // JSX expression must have only one parent element
    <div className="App">
      <h1>React App</h1>
      <Header />
    </div>
  );
}

// export component
export default App;
