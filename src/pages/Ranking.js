import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranking extends Component {
  constructor() {
    super();

    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div>
        <ol>
          <li>Imagem</li>
          {/* <li data-testid={ `player-name-${index}` }>Nome</li>
          <li data-testid={ `player-score-${index}` }>pontos</li> */}
        </ol>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.goHome }
        >
          Voltar
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Ranking;
