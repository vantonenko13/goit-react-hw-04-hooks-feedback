import React, { useState, useMemo } from "react";

import Section from "./components/section.jsx/Section";
import FeedbackOptions from "./components/feedback-options/FeedbackOptions";
import Statistics from "./components/statistics/Statistics";

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = useMemo(
    () => [
      { id: "opt-1", name: "Good", value: "good" },
      { id: "opt-2", name: "Neutral", value: "neutral" },
      { id: "opt-3", name: "Bad", value: "bad" },
    ],
    []
  );

  const feedbackHandler = (value) => {
    setState((prev) => ({ ...prev, [value]: prev[value] + 1 }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((100 / total) * state.good);
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={feedbackHandler} />
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

export default App;
