import React, { Component } from "react";
import fetchImages from "../services/images/ApiImg";
import Container from "./Container";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button/Button";
import LoaderComponent from "./Loader";
import Modal from "./Modal";
import ErrorComponent from "./Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { animateScroll as scroll } from "react-scroll";
import "./App.css";

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    isLoading: false,
    largeImageURL: "",
    showModal: false,
    error: null,
  };

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], page: 1, error: null });
    }
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.renderImages();
  };

  onLoadMore = () => {
    this.renderImages();
    this.scroll();
  };

  renderImages = async () => {
    const { query, page } = this.state;

    if (!query.trim()) {
      return toast.info("Please enter a value for search images!");
    }

    this.toggleLoader();

    try {
      const request = await fetchImages(query, page);
      this.setState(({ images, page }) => ({
        images: [...images, ...request],
        page: page + 1,
      }));
      if (request.length === 0) {
        this.setState({ error: `No results found for ${query}!` });
      }
    } catch (error) {
      this.setState({ error: "Something wrong. Try again." });
    } finally {
      this.toggleLoader();
    }
  };

  onOpenModal = (e) => {
    this.setState({ largeImageURL: e.target.dataset.source });
    this.toggleModal();
  };

  toggleLoader = () => {
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  scroll = () => {
    scroll.scrollToBottom();
  };

  render() {
    const { query, images, largeImageURL, isLoading, showModal, error } =
      this.state;

    return (
      <Container>
        <Searchbar
          onHandleSubmit={this.handleSubmit}
          onHandleChangeQuery={this.handleChange}
          query={query}
        />

        {error && <ErrorComponent texterror={error} />}

        {isLoading && <LoaderComponent />}

        {images.length > 0 && !error && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )}

        {!isLoading && images.length > 0 && !error && (
          <Button onLoadMore={this.onLoadMore} />
        )}

        {showModal && (
          <Modal
            onToggleModal={this.toggleModal}
            largeImageURL={largeImageURL}
          />
        )}

        <ToastContainer />
      </Container>
    );
  }
}

export default App;
