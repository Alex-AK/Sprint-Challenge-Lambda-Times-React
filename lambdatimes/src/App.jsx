import React, { Component } from 'react';

import { cardData, tabData } from './data';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabData: [],
      cardData: []
    };
  }

  componentDidMount = () => {
    this.setState({
      tabData: tabData,
      cardData: cardData
    });
  };

  render() {
    console.log(this.state.cardData);
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
