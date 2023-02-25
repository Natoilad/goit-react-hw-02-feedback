import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = param => {
    console.log(param);
    this.setState(prevstate => {
      const obj = { ...prevstate };
      obj[param] = obj[param] + 1;
      return obj;
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          // fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Please leave feedback</h1>
        <button
          type="button"
          onClick={() => {
            this.addFeedback('good');
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            this.addFeedback('neutral');
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            this.addFeedback('bad');
          }}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <p>
          Good <span>{this.state.good}</span>
        </p>
        <p>
          Neutral <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad <span>{this.state.bad}</span>
        </p>
        <p>
          Total <span>{this.countTotalFeedback()}</span>
        </p>
        <p>
          Positive feedback{' '}
          <span>{this.countPositiveFeedbackPercentage()}</span>
        </p>
      </div>
    );
  }
}
