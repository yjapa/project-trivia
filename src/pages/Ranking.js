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
    const beforePlayers = JSON.parse(localStorage.getItem('players'));
    console.log(beforePlayers);
    // beforePlayers.some()
    localStorage.setItem('players', JSON.stringify(players));
    const stateLocalStorage = JSON.parse(localStorage.getItem('players'));
    /* // stateLocalStorage.players.sort((a, b) => (a.score < b.score ? -1 : a.score > b.score ? 1 : 0)); */
    const scoreSort = stateLocalStorage.sort((a, b) => b.score - a.score);
    // if (stateLocalStorage.length === 0) return <p>Loading...</p>;
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
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        { rankingPlayers }
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
