import React, { Component } from 'react';
import Header from '../components/Header';
import Questions from '../components/Questions';
import Timer from '../components/Timer';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: 30,
      index: 0,
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.reloadTime = this.reloadTime.bind(this);
    this.timerGame = this.timerGame.bind(this);
    this.clearTimeInterval = this.clearTimeInterval.bind(this);
  }

  setTimer(callback) {
    this.setState((prevState) => ({ currentTime: prevState.currentTime - 1 }), callback);
  }

  nextQuestion() {
    this.setState((prevState) => ({ index: prevState.index + 1 }
    ));
  }

  reloadTime(callback) {
    this.setState(({ currentTime: 30 }), callback);
  }

  clearTimeInterval() {
    const { currentTime } = this.state;
    if (currentTime === 0) {
      clearInterval(this.timer);
    }
  }

  timerGame() {
    const ONE_SECOND = 1000;
    const FIVE_SECONDS = 5000;

    setTimeout(() => {
      this.timer = setInterval(() => {
        this.setTimer(this.clearTimeInterval);
      }, ONE_SECOND);
    }, FIVE_SECONDS);
  }

  render() {
    const { currentTime, index } = this.state;
    return (
      <div className="game">
        <h1>TrybeTrivia</h1>
        <Header />
        <Questions
          currentTime={ currentTime }
          index={ index }
          nextQuestion={ this.nextQuestion }
          reloadTime={ this.reloadTime }
          timerGame={ this.timerGame }
        />
        <Timer timerGame={ this.timerGame } currentTime={ currentTime } />
      </div>
    );
  }
}

export default Game;
