import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './containers/Main'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
function App() {

  return (
      <div className="App">
      {/*<NavLink to="/new" activeStyle={{background: 'darkblue'}}>Home</NavLink>*/}
        <Main />
      </div>
  );
}

export default App;
