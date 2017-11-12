import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './CardList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{marginLeft: '20px'}}>
        <h1>NETFLIX F YEAH</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
