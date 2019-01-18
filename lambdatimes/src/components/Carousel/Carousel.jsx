import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
      currentIndex: 0
    };
  }
  componentDidMount() {
    this.setState({ carouselData: carouselData });
  }

  leftClick = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  };

  rightClick = () => {
    // if (this.state.currentIndex > this.state.carouselData.length - 1) {
    //   // if 0, 1, 2, 3 === 3
    //   this.setState({
    //     currentIndex: 0
    //   });
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.carouselData[this.state.currentIndex]}
        style={{ display: 'block' }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
