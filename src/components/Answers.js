import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Answers extends Component {
  render() {
    const { question } = this.props;
    const arrayQuestions = [];
    arrayQuestions.push(question.correct_answer, ...question.incorrect_answers);
    const randomQuestions = arrayQuestions.sort();
    if (randomQuestions[0] === question.correct_answer) {
      return randomQuestions.reverse();
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
