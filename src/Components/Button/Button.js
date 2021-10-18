import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ onLoadMore }) {
  return (
    <div className={styles.Button_wrapper}>
      <button type="button" className={styles.Button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
