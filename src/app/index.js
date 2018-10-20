import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}