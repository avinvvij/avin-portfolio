import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameHolder from './Components/NameHolder/NameHolder.jsx'
import DetailsCarousel from './Components/DetailsCarousel/DetailsCarousel.jsx'
import SkillChart from './Components/SkillChart/SkillChart.jsx'
import Header from './CommonComponents/Header/Header.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

          <NameHolder />
          <DetailsCarousel />
          <SkillChart />
        
      </div>
    );
  }
}

export default App;
