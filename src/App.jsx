import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Body />
      </body>
    );
  }
}

export default App;
