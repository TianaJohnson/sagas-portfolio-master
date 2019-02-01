import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import Header from './../Header/Header.js';
// import AdminHeader from './../Header/AdminHeader.js';
import Portfolio from './../Portfolio/Portfolio.js';
import Admin from './../Admin/Admin.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
    
        <Router>
          <div>
            <Route exact path="/" component={Portfolio}/>   
            <Route exact path="/admin" component={Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
