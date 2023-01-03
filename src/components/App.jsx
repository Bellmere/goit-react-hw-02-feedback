import React, {Component} from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import {Section} from './Section/Section';

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
    

  handleFeedback = e => {
    const {good, neutral, bad} = this.state;
    if (e === 'Good') {
      this.setState({good: good + 1});
    } else if (e === 'Neutral') {
      this.setState({neutral: neutral + 1});
    } else if (e === 'Bad') {
      this.setState({bad: bad + 1});
    }
  };

  countTotalFeedback = () => {
      const {good, neutral, bad,} = this.state;
      let total = good + neutral + bad;
      return total;
  };

  countPositiveFeedbackPercentage = () => {
      const {good} = this.state;
      let totalFeedback = this.countTotalFeedback();
      if (!totalFeedback) {
          return 0;
      }
      return Math.round(good / totalFeedback * 100);
  };

  render() {
      const {good, neutral, bad,} = this.state;
        return (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101'
            }}
          >
            <Section title='Please leave feedback'>
            <FeedbackOptions 
            options={['Good', 'Neutral', 'Bad']} 
            onLeaveFeedback={this.handleFeedback} 
            />
            </Section>
            <Section title='Statistics'>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          </div>
        );
  }
}
