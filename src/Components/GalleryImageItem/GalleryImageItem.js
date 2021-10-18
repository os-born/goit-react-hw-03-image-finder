import PropTypes from "prop-types";
import styles from "./GalleryImageItem.module.css";

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        onClick={onOpenModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
