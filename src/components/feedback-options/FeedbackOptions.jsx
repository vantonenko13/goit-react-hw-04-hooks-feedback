import React from "react";

import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackOptions}>
      {options &&
        options.length &&
        options.map((btn) => {
          return (
            <button key={btn.id} onClick={() => onLeaveFeedback(btn.value)}>
              {btn.name}
            </button>
          );
        })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
