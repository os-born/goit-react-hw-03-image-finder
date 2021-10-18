import React from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

function Searchbar({ onHandleSubmit, onHandleChangeQuery, query }) {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onHandleSubmit}>
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={styles.SearchForm_input}
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
