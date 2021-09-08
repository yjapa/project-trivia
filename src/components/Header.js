import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    }
  }

  componentDidMount() {
    const { email } = this.props;
    const emailGravatar = md5(email).toString();
    this.setState({
      url: `https://www.gravatar.com/avatar/${emailGravatar}`,
    });
  }
  render() {
    const { name, score } = this.props;
    const { url } = this.state;
    return (
      <div className="header">
        <div className="headerGamer">
          <img
            src={ url }
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
            <span data-testid="header-score">
              {score}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  name: player.name,
  score: player.score,
  email: player.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
