import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { playerRanking, zerador } from '../actions';

class Feedback extends React.Component {
  constructor() {
    super();

    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    const { getPlayer } = this.props;
    const infoPlayer = JSON.parse(localStorage.getItem('ranking'));
    getPlayer(infoPlayer[0]);
  }

  componentWillUnmount() {
    const { zeraPlayer } = this.props;
    localStorage.ranking = JSON.stringify('[]');
    const playerZerado = {
      name: '',
      email: '',
      score: 0,
      picture: '',
      token: '',
    };
    zeraPlayer(playerZerado);
  }

  redirect(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    const stateLocalStorage = JSON.parse(localStorage.getItem('state'));
    const { assertions, score } = stateLocalStorage.player;

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
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => this.redirect('/') }
        >
          Jogar novamente
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => this.redirect('/ranking') }
        >
          Ver Ranking
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  getPlayer: PropTypes.func.isRequired,
  zeraPlayer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getPlayer: (payload) => dispatch(playerRanking(payload)),
  zeraPlayer: (payload) => dispatch(zerador(payload)),
});

export default connect(null, mapDispatchToProps)(Feedback);
