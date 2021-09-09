import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { apiQUESTIONS } from '../actions/services';
import Answers from './Answers';
import NextBtn from './NextBtn';
import { scorePlayer } from '../actions';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      assertions: 0,
      disableQuestions: false,
      className: false,
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.quest = this.quest.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.getScore = this.getScore.bind(this);
  }

  componentDidMount() {
    const { token, getQuestions } = this.props;
    getQuestions(token);
  }

  getScore(currTime, diff) {
    if (currTime && diff) {
      const { name, email, score, getScore } = this.props;
      const { assertions } = this.state;
      const diffArray = ['GasparGod', 'easy', 'medium', 'hard'];
      const valueToCalc = 10;
      const points = score + (valueToCalc + (currTime * diffArray.indexOf(diff)));
      this.count();
      const actualAssertions = assertions + 1;
      const state = {
        player: {
          name,
          assertions: actualAssertions,
          score: points,
          gravatarEmail: email,
        },
      };
      const pay = {
        score: points,
      };
      getScore(pay);
      localStorage.state = JSON.stringify(state);
    }
  }

  count() {
    this.setState((prevState) => ({
      assertions: prevState.assertions + 1,
    }));
  }

  enableButton(currTime, diff) {
    const { clickedTrue, stopTimer } = this.props;
    stopTimer();
    this.setState({ visible: true, disableQuestions: true, className: true });
    clickedTrue();
    this.getScore(currTime, diff);
  }

  nextQuestion() {
    const { index, questionIndex, clickedFalse, reloadTime } = this.props;
    const numberTest = 4;
    if (index === numberTest) {
      const { history } = this.props;
      history.push('/feedback');
    } else {
      questionIndex();
      reloadTime();
      clickedFalse();
      this.setState({ visible: false, disableQuestions: false, className: false });
    }
  }

  quest(question) {
    const { currentTime } = this.props;
    const { visible, disableQuestions, className } = this.state;
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
          disableQuestions={ disableQuestions }
          className={ className }
        />
        { visible || currentTime === 0
          ? <NextBtn nextQuestion={ this.nextQuestion } /> : null}
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
  name: player.name,
  email: player.email,
  token: player.token,
  score: player.score,
  questions: game.questions,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (payload) => dispatch(apiQUESTIONS(payload)),
  getScore: (payload) => dispatch(scorePlayer(payload)),
});

Questions.propTypes = {
  token: PropTypes.string,
  getQuestions: PropTypes.func,
}.isRequired;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions));
