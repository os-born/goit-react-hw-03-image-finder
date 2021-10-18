import React, { Component } from "react";
// import fetchImages from "../../services/images/ApiPics";
import ApiImg from "../../services/images/ApiPics";
import ImageGalleryList from "./ImageGalleryList/ImageGalleryList";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class ImageGallery extends Component {
  state = {
    pics: [],
    page: 1,
    status: Status.IDLE,
    error: null,
    largeImg: "",
    openModal: false,
  };

  componentDidUpdate(prevProps) {
    const prevPic = prevProps.searchQuery;
    const nextPic = this.props.searchQuery;

    if (!nextPic.trim()) {
      return alert("Please enter a value for search images!");
    }

    if (prevPic !== nextPic) {
      this.setState({ status: Status.PENDING, page: 1 });
      ApiImg.fetchImages(nextPic)
        .then((pic) => {
          if (pic.length === 0) {
            this.setState({ status: Status.IDLE });
          }
          this.setState((prevState) => {
            return {
              pics: [...pic],
              status: Status.RESOLVED,
              page: prevState.page + 1,
            };
          });
        })
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }
  }

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        openModal: !prevState.openModal,
      };
    });
  };

  onClickLoad = () => {
    const nextPic = this.props.searchResult;
    const page = this.state.page;
    ApiImg.fetchImages(nextPic, page)
      .then((pic) => {
        if (pic.length === 0) {
          return;
        }
        this.setState((prevState) => {
          return {
            pics: [...prevState.pics, ...pic],
            status: Status.RESOLVED,
            page: prevState.page + 1,
          };
        });
      })
      .catch((error) => this.setState({ error, status: Status.REJECTED }));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // renderImages = async () => {
  //     const { page } = this.state;
  //     const { searchQuery } = this.props;

  //     if (!searchQuery.trim()) {
  //     return toast.info('Please enter a value for search images!');
  //     }

  //     // this.toggleLoader();

  //     try {
  //     const request = await fetchImages(searchQuery, page);
  //     this.setState(({ pics, page }) => ({
  //         pics: [...pics, ...request],
  //         page: page + 1,
  //     }));
  //     if (request.length === 0) {
  //         this.setState({ error: `No results were found for ${searchQuery}!` });
  //     }
  //     } catch (error) {
  //     this.setState({ error: 'Something went wrong. Try again.' });
  //     }
  //     // finally {
  //     // this.toggleLoader();
  //     // }
  // };

  render() {
    const { pics, error, status, showModal, largeImage } = this.state;
    if (status === "idle") {
      return <></>;
    }

    // if (status === 'pending') {
    //   return <LoaderImg/>
    // }

    if (status === "rejected") {
      return <div>{error.message}</div>;
    }

    if (status === "resolved") {
      return (
        <>
          <ImageGalleryList pics={pics} modalImage={this.modalImage} />
          {showModal && <Modal onClose={this.toggleModal} url={largeImage} />}
          {pics.length > 0 && <Button onHandleLoadMore={this.onClickLoad} />}
        </>
      );
    }
  }

  // render() {
  //     return (
  //         <>
  //         <ul className={s.ImageGallery}>
  //             <ImageGalleryItem />
  //         </ul>
  //         <ToastContainer />
  //         </>
  //     );

  // }
}

export default ImageGallery;
