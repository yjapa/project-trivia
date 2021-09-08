import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiQUESTIONS } from '../actions/services';
import Answers from './Answers';
import NextBtn from './NextBtn';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.quest = this.quest.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  componentDidMount() {
    const { token, getQuestions } = this.props;
    getQuestions(token);
  }

  enableButton() {
    this.setState({ visible: true });
  }

  nextQuestion() {
    const { index, nextQuestion, reloadTime, timerGame } = this.props;
    const numberTest = 4;
    if (index === numberTest) {
      // localStorage.setItem('usuario', JSON.stringify(usuario));
    } else {
      nextQuestion();
      reloadTime(timerGame);
      this.setState({ visible: false });
    }
  }

  quest(question) {
    const { currentTime } = this.props;
    const { visible } = this.state;
    return (
      <div className="questions">
        <div>
          <div className="category" data-testid="question-category">
            { question.category }
          </div>
          <div className="question" data-testid="question-text">
            { question.question }
          </div>
        </div>
        <Answers
          question={ question }
          currentTime={ currentTime }
          enableButton={ this.enableButton }
        />
        { visible ? <NextBtn nextQuestion={ this.nextQuestion } /> : null}
      </div>
    );
  }

  render() {
    const { questions } = this.props;
    const { index } = this.props;
    if (questions.length === 0) return <p>Loading..</p>;
    const questionMap = questions.map((question) => this.quest(question));
    return (
      <div className="divQuestion">{questionMap[index]}</div>
    );
  }
}

const mapStateToProps = ({ player, game }) => ({
  token: player.token,
  questions: game.questions,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (payload) => dispatch(apiQUESTIONS(payload)),
});

Questions.propTypes = {
  token: PropTypes.string,
  getQuestions: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
