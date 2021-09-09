import React from 'react';
import Header from '../components/Header';

// bug

class Feedback extends React.Component {
  render() {
    const stateLocalstorage = JSON.parse(localStorage.getItem('state'));
    const { assertions, score } = stateLocalstorage.player;

    const congrat = assertions > 2 ? 'Mandou bem!' : 'Podia ser melhor...';
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{ congrat }</p>
        <p>
          Placar final:
          {' '}
          <span data-testid="feedback-total-score">{ score }</span>
        </p>
        <p>
          Acertou:
          {' '}
          <span data-testid="feedback-total-question">{ assertions }</span>
        </p>
      </div>
    );
  }
}

export default Feedback;
