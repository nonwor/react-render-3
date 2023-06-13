import logo from './logo.svg';
import './App.css';

import axios from 'axios';
// import dotenv from 'dotenv';

function App() {

  const handleclick = ()=>{
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // dev code
      console.log("hello")
      console.log(process.env.REACT_APP_API_URL_DEVELOPMENT)
    } else {
        // production code
        console.log("world")
        console.log(process.env.REACT_APP_API_URL_PRODUCTION)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleclick}>Click</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
