import React from 'react';

import Carousel from './components/Carousel/Carousel';
import Content from './components/Content/Content.jsx';
import Header from './components/Header';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Carousel />
      <Content />
    </div>
  );
};

export default App;
