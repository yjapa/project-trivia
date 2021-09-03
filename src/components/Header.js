import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    const emailGravatar = md5(email).toString();
    return (
      <div className="header">
        <div className="headerGamer">
          <img
            src="`https://www.gravatar.com/avatar/${emailGravatar}`"
            alt="gravatar gamer"
            className="gravatar"
            data-testid="header-profile-picture"
          />
          <p>
            Jogador:
            <span data-testid="header-player-name"> Salcicha</span>
          </p>
        </div>
        <div>
          <p>
            Pontos:
            <span data-testid="header-score"> Salcipoints</span>
          </p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  emailGravatar: PropTypes.string.isRequired,
};

export default Header;
