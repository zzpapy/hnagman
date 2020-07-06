import React, {Component} from 'react';
import logo from './logo.svg';
import Word  from './components/Word';
import './App.css';

function App(props) {
  const name =  "greg"
  const surname = "zzpapy"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {props.prefix} <Word name={name} surname={surname}/>
        </div>
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
