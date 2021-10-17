import React from "react";
import s from "./Button.module.css";

const Button = () => {
  return (
    <div className={s.Button__conteiner}>
      <button type="button" className={s.Button}>
        Load More
      </button>
    </div>
  );
};

export default Button;
