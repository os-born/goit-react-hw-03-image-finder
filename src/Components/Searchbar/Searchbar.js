import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {};
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__buttonLabel}>Search</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
