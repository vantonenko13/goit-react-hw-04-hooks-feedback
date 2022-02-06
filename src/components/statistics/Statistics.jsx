import React from "react";

import PropTypes from "prop-types";

import Notification from "../notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total && total !== 0 ? (
        <div>
          <h2>Statistics</h2>
          <div>Good: {good}</div>
          <div>Neutral: {neutral}</div>
          <div>Bad: {bad}</div>
          <div>Total: {total}</div>
          <div>Positive feedback: {positivePercentage} %</div>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
