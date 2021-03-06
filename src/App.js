import React, { Component } from 'react';
import Header from './components/Header/index';
import About from './components/pages/About/index';
import Background from './components/pages/Background';
import Portfolio from './components/pages/Portfolio/index';
import Contact from './components/pages/Contact/index';
import Footer from './components/Footer/index';
import siteData from './data/siteData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header siteData={siteData}/>
        <About siteData={siteData}/>
        <Background siteData={siteData}/>
        <Portfolio siteData={siteData}/>
        <Contact siteData={siteData}/>
        <Footer siteData={siteData}/>
      </div>
    );
  }
}

export default App;