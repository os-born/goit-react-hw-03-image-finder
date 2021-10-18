import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

// const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onToggleModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onToggleModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <>
        <div className={styles.Overlay} onClick={this.handleBackdropClick}>
          <div className={styles.Modal}>
            <img src={largeImageURL} alt="" />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
};

export default Modal;
