import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

function Button({ onLoadMore }) {
  return (
    <div className={s.Button_wrapper}>
      <button type="button" className={s.Button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
