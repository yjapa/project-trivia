import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  constructor() {
    super();

    this.timerGame = this.timerGame.bind(this);
    this.clearTimeInterval = this.clearTimeInterval.bind(this);
  }

  componentDidMount() {
    this.timerGame();
  }

  clearTimeInterval() {
    const { currentTime } = this.props;
    if (currentTime === 0) {
      clearInterval(this.timer);
    }
  }

  timerGame() {
    const { setTimer } = this.props;
    const ONE_SECOND = 1000;
    const FIVE_SECONDS = 5000;

    setTimeout(() => {
      this.timer = setInterval(() => {
        setTimer(this.clearTimeInterval);
      }, ONE_SECOND);
    }, FIVE_SECONDS);
  }

  render() {
    const { currentTime } = this.props;
    return (
      <p>{currentTime}</p>
    );
  }
}

Timer.propTypes = {
  currentTime: PropTypes.number.isRequired,
  setTimer: PropTypes.func.isRequired,
};

export default Timer;
