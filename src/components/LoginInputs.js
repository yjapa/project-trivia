import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LoginInputs extends Component {
  render() {
    const { email, name, check, handleChange } = this.props;

    return (
      <div>
        <label
          htmlFor="name"
        >
          Nome:
          <input
            type="name"
            name="name"
            id="input-name"
            placeholder="Nome"
            data-testid="input-player-name"
            value={ name }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="email"
        >
          Email:
          <input
            type="text"
            name="email"
            id="input-email"
            placeholder="Email"
            data-testid="input-gravatar-email"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ check.checkEmail === false || check.checkName === false }
        >
          Jogar
        </button>
        <Link data-testid="btn-settings" to="/config">
          <button type="button">Configurações</button>
        </Link>
      </div>
    );
  }
}

LoginInputs.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  check: PropTypes.shape({
    checkEmail: PropTypes.bool.isRequired,
    checkName: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginInputs;
