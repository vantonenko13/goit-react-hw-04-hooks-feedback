import React from "react";

import PropTypes from "prop-types";

import styles from "./Section.module.scss";

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
