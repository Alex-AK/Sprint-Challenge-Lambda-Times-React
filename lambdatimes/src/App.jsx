import React, { Component } from 'react';

import { cardData, tabData } from './data';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
