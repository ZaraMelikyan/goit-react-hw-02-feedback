import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Feedback from './Feedback/Feedback';


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => {
      const value = prevState[feedback];
      return {
        [feedback]: value + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = (good / total) * 100;
    return Number(result.toFixed(2));
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();
    const options = ['Good', 'Neutral', 'Bad'];
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback onLeavFeedback={this.onLeaveFeedback} options={options} />
        </Section>
        { !total ? <Notification message="There is no feedback &#x1F60F;" /> :
          <Section title="Statistics">
            <Statistics
              state={this.state}
              total={total}
              positivePercentage={positivePercent}
            />
          </Section>
        }
      </div>
    );
  }
}