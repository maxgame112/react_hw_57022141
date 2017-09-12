import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Switch , Route , NavLink } from 'react-router-dom';
import {Input,Output } from './components';

class App extends Component {
  constructor(props){
    super(props)
    
  }
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          <li><NavLink to={{pathname:'/input'}} activeClassName="active">Input page</NavLink></li>
          
        </ul>
        <div>
          <Route path="/input" component={Input} />
          <Route path="/output" component={Output}  />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
