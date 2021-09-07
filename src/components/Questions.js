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

    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
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
          onClick={ this.enableButton }
        />
        { visible ? <NextBtn onClick={ this.handleClick } /> : null}
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
