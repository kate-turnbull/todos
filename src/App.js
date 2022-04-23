import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import logo from './logo.svg';
import './App.css';


import SignIn from './SignIn'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import NavMenu from './NavMenu'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>
          <h1>Check it out, I'm an app!</h1>
        </div>
        <Routes>
        <Route path='/' element={<SignIn/>}/>
        </Routes> 
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
