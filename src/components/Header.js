import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerGamer">
          <img src="" alt="" className="gravatar" data-testid="header-profile-picture"/>
          <p>Jogador: <span data-testid="header-player-name">Salcicha</span></p>
        </div>
        <div>
          <p>Pontos: <span data-testid="header-score">Salcipoints</span></p>
        </div>
      </div>
    );
  }
}

export default Header;