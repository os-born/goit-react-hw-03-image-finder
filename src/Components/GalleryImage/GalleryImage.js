import PropTypes from "prop-types";
import ImageGalleryItem from "../GalleryImageItem/GalleryImageItem";
import styles from "./GalleryImage.module.css";

function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
