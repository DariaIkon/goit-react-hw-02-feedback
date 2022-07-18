import { Component } from "react";
import FeedbackOption from "./FeedbackOption";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onIncrement = (event) => {
    const value = event.currentTarget.textContent;
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (this.total = good + neutral + bad);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (this.percents = Math.round((good / this.total) * 100) + "%");
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={"Statistics"}>
          <FeedbackOption
            options={this.state}
            onLeaveFeedback={this.onIncrement}
          />
          {total >= 1 ? (
            <Section title={"Please leave feedback"}>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedback}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
