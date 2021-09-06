import React, { Component } from 'react';
import Header from '../components/Header';
import Questions from '../components/Questions';
import Timer from '../components/Timer';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: 30,
    };

    this.setTimer = this.setTimer.bind(this);
  }

  setTimer(callback) {
    this.setState((prevState) => ({ currentTime: prevState.currentTime - 1 }), callback);
  }

  render() {
    const { currentTime } = this.state;
    return (
      <>
        <Header />
        <Questions currentTime={ currentTime } />
        <Timer setTimer={ this.setTimer } currentTime={ currentTime } />
      </>
    );
  }
}

export default Game;
