import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameHolder from './Components/NameHolder/NameHolder.jsx'
import DetailsCarousel from './Components/DetailsCarousel/DetailsCarousel.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameHolder />
        <DetailsCarousel />
      </div>
    );
  }
}

export default App;
