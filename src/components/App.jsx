import React from 'react';
import { Statistics } from './statistics/statistics'
import { FeedbackOptions } from './feedbackOptions/feedbackOptions'
import { Section } from './section/section';
import { Notification } from './notification/notification';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleChange = (event) => {
    const { name } = event.target;
    this.setState(prevState=>({
      [name]: prevState[name]+1
    }))
  }


  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

    render() {
      
    return (
      <div>

        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleChange} />
        </Section>
        
        <Section title="Statistics">
        {this.countTotalFeedback()
        ? <Statistics good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}/>
        : <Notification message="There is no feedback"/>
        }               
        </Section>

      </div>
    );
  }
}

