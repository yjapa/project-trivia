import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Answers extends Component {
  handleClick() {
    
  }
  render() {
    const { question } = this.props;
    const arrayQuestions = [];
    arrayQuestions.push(question.correct_answer, ...question.incorrect_answers);
    const sortQuestions = arrayQuestions.sort();
    let randomQuestions = sortQuestions;
    if (sortQuestions[0] === question.correct_answer) {
      randomQuestions = sortQuestions.reverse();
    }
    return (
      <div>
        {randomQuestions.map((randomQuestion, index) => {
          if (randomQuestion === question.correct_answer) {
            return (
              <button
                key={ index }
                data-testid="correct-answer"
                type="button"
                onClick={ this.handleClick }
              >
                {randomQuestion}
              </button>
            );
          }
          return (
            <button
              key={ index }
              data-testid={ `wrong-answer-${index}` }
              type="button"
            >
              {randomQuestion}
            </button>
          );
        })}
      </div>
    );
  }
}

Answers.propTypes = {
  question: PropTypes.arrayOf(Object),
}.isRequired;

export default Answers;
