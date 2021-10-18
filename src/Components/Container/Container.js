import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

function Container({ children }) {
  return <div className={styles.Container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
