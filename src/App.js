import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameHolder from './Components/NameHolder/NameHolder.jsx'
import DetailsCarousel from './Components/DetailsCarousel/DetailsCarousel.jsx'
import SkillChart from './Components/SkillChart/SkillChart.jsx'
import Header from './CommonComponents/Header/Header.jsx'
import Contact from './Components/Contact/Contact'
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {

  scrollToRef = (ref)=>{
    scrollToComponent(this.refs[ref] , {
      offset: -120,
      align: 'top',
      duration: 800
    })
  }

  render() {
    return (
      <div className="App">
        <Header scrollTo = {this.scrollToRef} />
          <NameHolder ref="nameholder"/>
          <DetailsCarousel ref = "detailscarousel"/>
          <SkillChart ref = "skillchart"/>
          <Contact ref="contact"/>
      </div>
    );
  }
}

export default App;
