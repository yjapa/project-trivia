import React from 'react';
import Header from '../components/Header';

class Feedback extends React.Component {
  // componentDidMount() {
  //   const stateLocalstorage = localStorage.getItem('state');
  //   const { assertions } = stateLocalstorage.player;
  //   // if (assertions > 2) {
  //   //   let congrat = 'Podia ser melhor...';
  //   //   congrat = 'Mandou bem!';
  //   // }
  //   let congrat = 'Podia ser melhor...';
  //   assertions > 2? congrat = 'Podia ser melhor...'
  // }

  render() {
    return (
      <div>
        <Header />

        <p data-testid="feedback-text">{ congrat }</p>
      </div>
    );
  }
}

export default Feedback;
