import React from 'react';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const stateLocalstorage = JSON.parse(localStorage.getItem('state'));
    const { assertions } = stateLocalstorage.player;
    const congrat = assertions > 2 ? 'Mandou bem!' : 'Podia ser melhor...';
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{ congrat }</p>
      </div>
    );
  }
}

export default Feedback;
