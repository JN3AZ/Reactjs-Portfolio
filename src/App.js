import React, { Component } from 'react';
import Header from './components/Header/index';
import About from './components/pages/About/index';
import Footer from './components/Footer/index';
import siteData from './siteData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header siteData={siteData}/>
        <About siteData={siteData}/>
        <Footer siteData={siteData}/>
      </div>
    );
  }
}

export default App;