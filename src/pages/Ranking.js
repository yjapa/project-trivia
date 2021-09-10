import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Ranking extends Component {
  constructor() {
    super();
    this.redirect = this.redirect.bind(this);
  }

  redirect(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    const { players } = this.props;
    const scoreSort = players.sort((a, b) => b.score - a.score);
    const rankingPlayers = scoreSort.map(({ name, picture, score }, index) => (
      <div key={ index }>
        <img
          src={ picture }
          alt={ name }
        />
        <p data-testid={ `player-name-${index}` }>
          { name }
        </p>
        <p data-testid={ `player-score-${index}` }>
          { score }
        </p>
      </div>
    ));
    return (
      <div className="ranking">
        <h1 data-testid="ranking-title">Ranking</h1>
        { rankingPlayers }
        <div className="buttonsRanking">
          <button
            type="button"
            onClick={ () => this.redirect('/feedback') }
          >
            Voltar
          </button>
          <button
            type="button"
            data-testid="btn-go-home"
            onClick={ () => this.redirect('/') }
          >
            Jogar Novamente
          </button>
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  players: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = ({ player }) => ({
  players: player.players,
});

export default connect(mapStateToProps)(Ranking);
