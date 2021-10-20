import React from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

function Searchbar({ onHandleSubmit, onHandleChangeQuery, query }) {
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onHandleSubmit}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onHandleChangeQuery}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  onHandleChangeQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Searchbar;
