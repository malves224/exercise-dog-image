import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Body />
      </main>
    );
  }
}

export default App;
