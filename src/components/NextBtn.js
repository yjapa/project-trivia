import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NextBtn extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-next"
          onClick={ onClick }
        >
          Próxima
        </button>

      </div>
    );
  }
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default NextBtn;
