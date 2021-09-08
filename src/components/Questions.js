import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { apiQUESTIONS } from '../actions/services';
import Answers from './Answers';
import NextBtn from './NextBtn';
import { infoPlayer } from '../actions';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      assertions: 0,
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.quest = this.quest.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  componentDidMount() {
    const { token, getQuestions } = this.props;
    getQuestions(token);
  }

  count() {
    this.setState((prevState) => ({
      assertions: prevState.assertions + 1,
    }));
  }

  enableButton(currTime, diff) {
    this.setState({ visible: true });
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

  nextQuestion() {
    const { index, nextQuestion, reloadTime, timerGame } = this.props;
    const numberTest = 4;
    if (index === numberTest) {
      const { history } = this.props;
      history.push('/feedback');
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
      <div>
        <div>
          <div data-testid="question-category">
            { question.category }
          </div>
          <div data-testid="question-text">
            { question.question }
          </div>
        </div>
        <span>time</span>
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
      questionMap[index]
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
  getScore: (payload) => dispatch(infoPlayer(payload)),
});

Questions.propTypes = {
  token: PropTypes.string,
  getQuestions: PropTypes.func,
}.isRequired;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions));
