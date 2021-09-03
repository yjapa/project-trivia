import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;
    const emailGravatar = md5(email).toString();
    return (
      <div className="header">
        <div className="headerGamer">
          <img
            src={ `https://www.gravatar.com/avatar/${emailGravatar}` }
            alt="gravatar gamer"
            className="gravatar"
            data-testid="header-profile-picture"
          />
          <p>
            Jogador:
            <span data-testid="header-player-name">
              {name}
            </span>
          </p>
        </div>
        <div>
          <p>
            Pontos:
            <span data-testid="header-score">{score}</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  name: player.name,
  score: player.score,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
